import React, { useEffect, useState } from "react";
import CartItemComponent from "../../components/CartItemComponent/CartItemComponent";
import OrderSummaryComponent from "../../components/OrderSummaryComponent/OrderSummaryComponent";
import styles from "./FavoriteProductsPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getAllFavoriteByUserId } from "../../services/Order.service";
import { useQuery } from "@tanstack/react-query";
import product4 from "../../assets/images/product4.svg";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import cart from '../../assets/images/cart.svg'

const FavoriteProductsPage = () => {
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
      const cartProduct = await getAllFavoriteByUserId(userId, token);
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

export default FavoriteProductsPage;