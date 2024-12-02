import React, { useEffect, useState } from "react";
import CartItemComponent from "../../components/CartItemComponent/CartItemComponent";
import OrderSummaryComponent from "../../components/OrderSummaryComponent/OrderSummaryComponent";
import styles from "./FavoriteProductsPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductByUserId } from "../../services/Order.service";
import { useQuery } from "@tanstack/react-query";
import product4 from "../../assets/images/product4.svg";

const FavoriteProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [isInMobile, setisInMobile] = useState(false);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { id } = useParams();

  // Hàm fetch dữ liệu từ API
  const fetchCartData = async ({ queryKey }) => {
    const [ , userId, token] = queryKey; // Giải nén queryKey
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
  const handleCheckout = () => {
    navigate("/check-out", {
      state: { cartItems, checkedItems, discount, shippingFee },
    });
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
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

  // Tính toán tổng giá trị
  const totalAmount = checkedItems.reduce((total, id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? total + item.price * item.quantity : total;
  }, 0) - discount + shippingFee;

  const safe = checkedItems.reduce((total, id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? total + (item.oldPrice - item.price) * item.quantity : total;
  }, 0) + discount;

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
            totalAmount={Math.max(totalAmount, 0)}
            discount={discount}
            shippingFee={shippingFee}
            safe={safe}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductsPage;