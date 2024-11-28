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

import React, { useEffect, useState } from "react";
import CartItemComponent from "../../components/CartItemComponent/CartItemComponent";
import OrderSummaryComponent from "../../components/OrderSummaryComponent/OrderSummaryComponent";
import styles from "./MyCartPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductByUserId } from "../../services/Order.service";
import { useQuery } from "@tanstack/react-query";
import product4 from "../../assets/images/product4.svg";

const MyCartPage = () => {
  const [cartItems, setCartItems] = useState();
  const [discount, setDiscount] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { id } = useParams();
  // Hàm gọi API
  const fetchCartData = async (queryKey) => {
    const id = queryKey.queryKey[1];
    const accessToken = queryKey.queryKey[2];
    console.log("Data: ", id, accessToken, queryKey);
    try {
      const cartProduct = await getAllProductByUserId(id, accessToken);
      if (!cartProduct) {
        throw new Error("No data cart returned from API");
      }
      console.log("Data2: ", cartProduct);
      return cartProduct;
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
      throw new Error("Failed to fetch cart data");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["product-data", id, accessToken],
    queryFn: fetchCartData, // Hàm fetch dữ liệu từ API
    refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
    keepPreviousData: false, // Giữ dữ liệu cũ khi thay đổi tham số
    enabled: !!id && !!accessToken,
  });
  // console.log("Data3: ", data.data.products);
  const initialItems = // data.data.products.map((item) => ({
  //         id: item.product_id._id,
  //         name: item.product_id.product_title || "Không có tên sản phẩm",
  //         price: item.product_id.product_price || 0,
  //         oldPrice: item.oldPrice || 0,
  //         quantity: item.quantity || 1, // Nếu không có quantity, mặc định là 1
  //         img:
  //           item.product_images && item.product_images[0]
  //             ? `data:image/jpeg;base64,${item.product_images[0]}`
  //             : product4, // Nếu không có ảnh, sử dụng product4 làm ảnh mặc định
  //       }))
      //  || 
          [{
            id: 1, // Giả sử id mặc định là 1
            name: "Thuốc dưỡng lông cho chó VEGEBRAND Bee Slurry Hair Beauty",
            price: 170000,
            oldPrice: 200000,
            quantity: 1,
            img: product4, // ảnh mặc định
          },{
            id: 2, // Giả sử id mặc định là 1
            name: "Thuốc dưỡng lông cho chó VEGEBRAND Bee Slurry Hair Beauty",
            price: 170000,
            oldPrice: 200000,
            quantity: 1,
            img: product4, // ảnh mặc định
          },{
            id: 3, // Giả sử id mặc định là 1
            name: "Thuốc dưỡng lông cho chó VEGEBRAND Bee Slurry Hair Beauty",
            price: 170000,
            oldPrice: 200000,
            quantity: 1,
            img: product4, // ảnh mặc định
          },
       ]
       setCartItems(initialItems)
  const handleCheckout = () => {
    navigate("/check-out", {
      state: { cartItems, checkedItems, discount, shippingFee },
    });
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckItem = (id) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((itemId) => itemId !== id)
        : [...prevCheckedItems, id];

      if (newCheckedItems.length === 0) {
        setDiscount(0);
        setShippingFee(0);
      } else {
        setDiscount(20000);
        setShippingFee(30000);
      }

      return newCheckedItems;
    });
  };

  const handleCheckAll = (isChecked) => {
    if (isChecked) {
      setCheckedItems(cartItems.map((item) => item.id));
      setDiscount(20000);
      setShippingFee(30000);
    } else {
      setCheckedItems([]);
      setDiscount(0);
      setShippingFee(0);
    }
  };

  let totalAmount = 0;
  //   cartItems.reduce((total, item) => {
  //     if (checkedItems.includes(item.id)) {
  //       return total + item.price * item.quantity;
  //     }
  //     return total;
  //   }, 0) -
  //   discount +
  //   shippingFee;

  // totalAmount = totalAmount < 0 ? 0 : totalAmount;

  let safe = 0;
  // cartItems.reduce((total, item) => {
  //   if (checkedItems.includes(item.id)) {
  //     return total + (item.oldPrice - item.price) * item.quantity;
  //   }
  //   return total;
  // }, 0) + discount;

  const [isInMobile, setisInMobile] = useState(false);
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
    return <div>Loading product details...</div>;
  }

  return (
    <div className={styles.main}>
      <div className="grid wide">
        <h2>GIỎ HÀNG CỦA BẠN</h2>
        <div className={styles.checkAll}>
          <input
            type="checkbox"
            checked={checkedItems.length === cartItems.length}
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
          <h3>Chọn tất cả</h3>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
                onCheck={handleCheckItem}
                isChecked={checkedItems.includes(item.id)}
                isInMobile={isInMobile}
              />
            ))}
          </div>
          <OrderSummaryComponent
            onClick={handleCheckout}
            totalAmount={totalAmount}
            discount={discount}
            shippingFee={shippingFee}
            safe={safe}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
