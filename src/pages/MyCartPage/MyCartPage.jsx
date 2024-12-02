// import React, { useEffect, useState } from 'react'
// import CartItemComponent from '../../components/CartItemComponent/CartItemComponent';
// import OrderSummaryComponent from '../../components/OrderSummaryComponent/OrderSummaryComponent';
// import product4 from '../../assets/images/product4.svg'
// import product5 from '../../assets/images/product5.svg'
// import product6 from '../../assets/images/product6.svg'
// import styles from './MyCartPage.module.scss'
// import { useNavigate } from 'react-router-dom';

// const MyCartPage = () => {
//     const initialItems = [
//         { id: 1, name: 'Thuốc dưỡng lông cho chó VEGEBRAND Bee Slurry Hair Beauty', price: 170000, oldPrice: 200000, quantity: 1, img : product4 },
//         { id: 2, name: 'Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng', price: 55000, oldPrice: 100000, quantity: 1, img: product5 },
//         { id: 3, name: 'Bánh thưởng cho chó vị thịt gà WUJI Chicken Jerky Flavor', price: 55000, oldPrice: 95000, quantity: 1, img: product6 },
//       ];
//     const [cartItems, setCartItems] = useState(initialItems);
//     const [discount, setDiscount] = useState(0);
//     const [checkedItems, setCheckedItems] = useState([]);
//     const [shippingFee, setShippingFee] = useState(0);
//     const navigate = useNavigate();

//     const handleCheckout = () => {
//         navigate('/check-out', {
//           state: { cartItems, checkedItems, discount, shippingFee }
//         });
//     };

//     const handleQuantityChange = (id, amount) => {
//       setCartItems(prevItems =>
//         prevItems.map(item =>
//           item.id === id ? { ...item, quantity: item.quantity + amount } : item
//         )
//       );
//     };

//     const handleRemoveItem = id => {
//       setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//     };

//     const handleCheckItem = id => {
//       setCheckedItems(prevCheckedItems => {
//           const newCheckedItems = prevCheckedItems.includes(id)
//               ? prevCheckedItems.filter(itemId => itemId !== id)
//               : [...prevCheckedItems, id];

//           if (newCheckedItems.length === 0) {
//               setDiscount(0);
//               setShippingFee(0);
//           } else {
//               setDiscount(20000);
//               setShippingFee(30000);
//           }

//           return newCheckedItems;
//       });
//   };

//     const handleCheckAll = (isChecked) => {
//       if (isChecked) {
//           setCheckedItems(cartItems.map(item => item.id));
//           setDiscount(20000);
//           setShippingFee(30000);
//       } else {
//           setCheckedItems([]);
//           setDiscount(0);
//           setShippingFee(0);
//       }
//   };

//     let totalAmount = cartItems.reduce((total, item) => {
//       if (checkedItems.includes(item.id)) {
//         return total + item.price * item.quantity;
//       }
//       return total;
//   }, 0) - discount + shippingFee;

//   totalAmount = totalAmount < 0 ? 0 : totalAmount;

//   let safe = cartItems.reduce((total, item) => {
//     if (checkedItems.includes(item.id)) {
//       return total + (item.oldPrice - item.price) * item.quantity;
//     }
//     return total;
// }, 0) + discount;

//   const [isInMobile, setisInMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 739px)');
//     const handleViewportChange = () => setisInMobile(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener('change', handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleViewportChange);
//     };
//   }, []);

//     return (
//       <div className={styles.main}>
//         <div className='grid wide'>
//             <h2>GIỎ HÀNG CỦA BẠN</h2>
//             <div className={styles.checkAll}>
//               <input
//                 type="checkbox"
//                 checked={checkedItems.length === cartItems.length}
//                 onChange={(e) => handleCheckAll(e.target.checked)}
//               />
//               <h3>Chọn tất cả</h3>
//             </div>
//             <div className={styles.cart}>
//               <div className={styles.cartItems}>
//                 {cartItems.map(item => (
//                   <CartItemComponent
//                     key={item.id}
//                     item={item}
//                     onQuantityChange={handleQuantityChange}
//                     onRemove={handleRemoveItem}
//                     onCheck={handleCheckItem}
//                     isChecked={checkedItems.includes(item.id)}
//                     isInMobile={isInMobile}
//                   />
//                 ))}
//               </div>
//               <OrderSummaryComponent
//                 onClick={handleCheckout}
//                 totalAmount={totalAmount}
//                 discount={discount}
//                 shippingFee={shippingFee}
//                 safe={safe}
//               />
//             </div>
//         </div>
//       </div>
//     );
// }

// export default MyCartPage


// Của Huyền ok rồi
// import React, { useEffect, useState } from "react";
// import CartItemComponent from "../../components/CartItemComponent/CartItemComponent";
// import OrderSummaryComponent from "../../components/OrderSummaryComponent/OrderSummaryComponent";
// import styles from "./MyCartPage.module.scss";
// import { useNavigate, useParams } from "react-router-dom";
// import { getAllProductByUserId } from "../../services/Order.service";
// import { useQuery } from "@tanstack/react-query";
// import product4 from "../../assets/images/product4.svg";
// import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

// const MyCartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [discount, setDiscount] = useState(0);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [shippingFee, setShippingFee] = useState(0);
//   const [isInMobile, setisInMobile] = useState(false);

//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");
//   const { id } = useParams();

//   // Hàm fetch dữ liệu từ API
//   const fetchCartData = async ({ queryKey }) => {
//     const [, userId, token] = queryKey; // Giải nén queryKey
//     try {
//       const cartProduct = await getAllProductByUserId(userId, token);
//       if (!cartProduct || !cartProduct.data) {
//         throw new Error("No cart data returned from API");
//       }
//       return cartProduct; // React Query tự động xử lý Promise này
//     } catch (error) {
//       console.error("Error fetching cart data:", error.message);
//       throw new Error("Failed to fetch cart data");
//     }
//   };

//   // Sử dụng useQuery để gọi API
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["product-data", id, accessToken],
//     queryFn: fetchCartData,
//     enabled: !!id && !!accessToken, // Chỉ chạy khi cả id và accessToken có giá trị
//     refetchOnWindowFocus: true,
//     keepPreviousData: true,
//   });
//   console.log("data", data);
//   // Cập nhật cartItems khi data từ API thay đổi
//   useEffect(() => {
//     if (data?.data?.products) {
//       const items = data.data.products.map((item) => ({
//         id: item.variant,
//         name: item.product_id.product_title || "Không có tên sản phẩm",
//         oldPrice: item.product_id.product_price || 0,
//         price: (item.product_id.product_price *
//           (1 - item.product_id.product_percent_discount / 100)
//             .toLocaleString()) || 0,
//         quantity: item.quantity || 1,
//         img:
//           item.product_id.product_images && item.product_id.product_images[0]
//             ? `data:image/jpeg;base64,${item.product_id.product_images[0]}`
//             : product4,
//       }));
//       setCartItems(items);
//     }
//   }, [data]);

//   // Hàm xử lý các sự kiện
//   const handleCheckout = () => {
//     navigate("/check-out", {
//       state: { cartItems, checkedItems, discount, shippingFee },
//     });
//   };

//   const handleQuantityChange = (id, amount) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const handleCheckItem = (id) => {
//     setCheckedItems((prevCheckedItems) => {
//       const newCheckedItems = prevCheckedItems.includes(id)
//         ? prevCheckedItems.filter((itemId) => itemId !== id)
//         : [...prevCheckedItems, id];

//       if (newCheckedItems.length === 0) {
//         setDiscount(0);
//         setShippingFee(0);
//       } else {
//         setDiscount(20000);
//         setShippingFee(30000);
//       }

//       return newCheckedItems;
//     });
//   };

//   const handleCheckAll = (isChecked) => {
//     if (isChecked) {
//       setCheckedItems(cartItems.map((item) => item.id));
//       setDiscount(20000);
//       setShippingFee(30000);
//     } else {
//       setCheckedItems([]);
//       setDiscount(0);
//       setShippingFee(0);
//     }
//   };

//   // Tính toán tổng giá trị
//   const totalAmount = checkedItems.reduce((total, id) => {
//     const item = cartItems.find((cartItem) => cartItem.id === id);
//     return item ? total + item.price * item.quantity : total;
//   }, 0) - discount + shippingFee;

//   const safe = checkedItems.reduce((total, id) => {
//     const item = cartItems.find((cartItem) => cartItem.id === id);
//     return item ? total + (item.oldPrice - item.price) * item.quantity : total;
//   }, 0) + discount;

//   // Xử lý hiển thị giao diện di động
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 739px)");
//     const handleViewportChange = () => setisInMobile(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener("change", handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleViewportChange);
//     };
//   }, []);

//   if (isLoading) {
//     return <div>Đang tải dữ liệu giỏ hàng...</div>;
//   }

//   const handleRemoveAllItems = () => {
//     setCartItems([]);
//     setCheckedItems([]);
//     setDiscount(0);
//     setShippingFee(0);
//   };

//   return (
//     <div className={styles.main}>
//       <div className="grid wide">
//         <h2>GIỎ HÀNG CỦA BẠN</h2>
//         <div className={styles.allBtn}>
//           <div className={styles.checkAll}>
//             {cartItems.length > 0 && (
//               <>
//                 <input
//                   type="checkbox"
//                   checked={checkedItems.length === cartItems.length}
//                   onChange={(e) => handleCheckAll(e.target.checked)}
//                 />
//                 <h3>Chọn tất cả</h3>
//               </>
//             )}
//           </div>
//           <div className={styles.removeAll}>
//             {cartItems.length > 0 && (
//               <button
//                 className={styles.removeAllButton}
//                 onClick={handleRemoveAllItems}
//               >
//                 Xóa tất cả
//               </button>
//             )}
//           </div>
//         </div>
//         <div className={styles.cart}>
//           <div className={styles.cartItems}>
//             {cartItems.map((item) => (
//               <CartItemComponent
//                 key={item.id}
//                 item={item}
//                 onQuantityChange={handleQuantityChange}
//                 onRemove={handleRemoveItem}
//                 onCheck={handleCheckItem}
//                 isChecked={checkedItems.includes(item.id)}
//                 isInMobile={isInMobile}
//               />
//             ))}
//           </div>
//           <OrderSummaryComponent
//             onClick={handleCheckout}
//             totalAmount={Math.max(totalAmount, 0)}
//             discount={discount}
//             shippingFee={shippingFee}
//             safe={safe}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCartPage;

// Làm favorite products nhưng dùng lại để lấy sản phẩm
import React, { useEffect, useState } from "react";
import CartItemComponent from "../../components/CartItemComponent/CartItemComponent";
import OrderSummaryComponent from "../../components/OrderSummaryComponent/OrderSummaryComponent";
import styles from "./MyCartPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductByUserId } from "../../services/Order.service";
import { useQuery } from "@tanstack/react-query";
import product4 from "../../assets/images/product4.svg";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import cart from '../../assets/images/cart.svg'

const MyCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isInMobile, setisInMobile] = useState(false);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { id } = useParams();

  // Hàm fetch dữ liệu từ API
  const fetchCartData = async ({ queryKey }) => {
    const [, userId, token] = queryKey; // Giải nén queryKey
    try {
      const cartProduct = await getAllProductByUserId(userId, token);
      if (!cartProduct || !cartProduct.data) {
        throw new Error("No cart data returned from API");
      }
      return cartProduct; // React Query tự động xử lý Promise này
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
      throw new Error("Failed to fetch cart data");
    }
  };

  // Sử dụng useQuery để gọi API
  const { data, isLoading, error } = useQuery({
    queryKey: ["product-data", id, accessToken],
    queryFn: fetchCartData,
    enabled: !!id && !!accessToken, // Chỉ chạy khi cả id và accessToken có giá trị
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  console.log("data", data);
  // Cập nhật cartItems khi data từ API thay đổi
  useEffect(() => {
    if (data?.data?.products) {
      const items = data.data.products.map((item) => ({
        id: item.variant,
        name: item.product_id.product_title || "Không có tên sản phẩm",
        oldPrice: item.product_id.product_price || 0,
        price: (item.product_id.product_price *
          (1 - item.product_id.product_percent_discount / 100)
            .toLocaleString()) || 0,
        quantity: item.quantity || 1,
        img:
          item.product_id.product_images && item.product_id.product_images[0]
            ? `data:image/jpeg;base64,${item.product_id.product_images[0]}`
            : product4,
      }));
      setCartItems(items);
    }
  }, [data]);

  // Hàm xử lý các sự kiện
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckItem = (id) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((itemId) => itemId !== id)
        : [...prevCheckedItems, id];
      return newCheckedItems;
    });
  };

  const handleCheckAll = (isChecked) => {
    if (isChecked) {
      setCheckedItems(cartItems.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  };
  // Xử lý hiển thị giao diện di động
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 739px)");
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  if (isLoading) {
    return <div>Đang tải dữ liệu giỏ hàng...</div>;
  }

  const handleRemoveAllItems = () => {
    setCartItems([]);
    setCheckedItems([]);
  };

  const handleAddToCart = () => {
    const selectedItems = cartItems.filter((item) =>
      checkedItems.includes(item.id)
    );
    if (selectedItems.length === 0) {
      alert("Vui lòng chọn ít nhất một sản phẩm để thêm vào giỏ!");
      return;
    }
  
    // Gửi danh sách sản phẩm đã chọn tới API hoặc xử lý thêm vào giỏ
    console.log("Sản phẩm được thêm vào giỏ:", selectedItems);
    // Ví dụ: gọi API thêm sản phẩm vào giỏ
    // addToCartAPI(selectedItems);
  };

  return (
    <div className={styles.main}>
      <div className="grid wide">
        <h2>SẢN PHẨM YÊU THÍCH</h2>
        <div className={styles.allBtn}>
          <div className={styles.checkAll}>
            {cartItems.length > 0 && (
              <>
                <input
                  type="checkbox"
                  checked={checkedItems.length === cartItems.length}
                  onChange={(e) => handleCheckAll(e.target.checked)}
                />
                <h3>Chọn tất cả</h3>
              </>
            )}
          </div>
          <div className={styles.removeAll}>
            {cartItems.length > 0 && (
              <button
                className={styles.removeAllButton}
                onClick={handleRemoveAllItems}
              >
                Xóa tất cả
              </button>
            )}
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
                onCheck={handleCheckItem}
                isChecked={checkedItems.includes(item.id)}
                isInMobile={isInMobile}
                isLike={true}
              />
            ))}
          </div>
        </div>
        <div className={styles.addToCarts}>
          {/* <ButtonComponent
            title="Thêm các sản phẩm đã chọn vào giỏ"
            fontSize={isInMobile ? "1rem" : "1.2rem"}
            width="200px"
            height="50px"
            widthDiv="none"
            icon={cart}
            onClick={handleAddToCart}
            className={styles.btnAdd}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;