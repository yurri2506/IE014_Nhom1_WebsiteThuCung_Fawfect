import React, { useState, useEffect } from "react";
import styles from "./ProductDetailsPage.module.scss";
import { Col, Row } from "antd";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import UnderLineComponent from "../../components/UnderLineComponent/UnderLineComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import ProductFeedBackComponent from "../../components/ProductFeedBackComponent/ProductFeedBackComponent";
import BackComponent from "../../components/BackComponent/BackComponent";
import NextComponent from "../../components/NextComponent/NextComponent";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/orderSlice";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import tiktok from "../../assets/images/tiktok.svg";
import zalo from "../../assets/images/zalo.svg";
import {
  getDetailsProduct,
  getRelatedProducts,
  getProductFeedback,
} from "../../services/Product.service";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [numProduct, setNumProduct] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State cho hình ảnh chính
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const fetchProductData = async ({ queryKey }) => {
    const id = queryKey[1]; // Lấy id từ queryKey
    const [details, related, feedback] = await Promise.all([
      getDetailsProduct(id),
      getRelatedProducts(id),
      getProductFeedback(id),
    ]);
    return {
      details: details.data,
      related: related.data,
      feedback: feedback.data,
    };
  };

  const { data, isLoading } = useQuery({
    queryKey: ["product-data", id], // queryKey chứa id
    queryFn: fetchProductData, // Cấu trúc queryFn mới
    enabled: !!id, // Chỉ fetch khi id tồn tại
    refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
    keepPreviousData: true, // Giữ dữ liệu cũ khi id thay đổi
  });

  const productDetails = data?.details || {};
  const relatedProducts = data?.related || [];
  const productFeedback = data?.feedback || [];
  // Set hình ảnh mặc định là hình ảnh đầu tiên
  useEffect(() => {
    if (productDetails?.product_images?.length) {
      setSelectedImage(productDetails.product_images[0]);
    }
  }, [productDetails]);

  const handleInputChange = (value) => {
    setNumProduct(
      Math.min(
        Math.max(1, Number(value)),
        selectedVariant?.product_countInStock || 1
      )
    );
  };

  const handleAddToCart = () => {
    if (!user?.isAuthenticated) {
      navigate("/sign-in", { state: location?.pathname });
    } else if (!selectedVariant) {
      alert("Vui lòng chọn một biến thể trước khi thêm vào giỏ hàng!");
    } else {
      dispatch(
        addToCart({
          product_id: productDetails?._id,
          variant_id: selectedVariant?._id,
          quantity: numProduct,
          variantDetails: selectedVariant,
        })
      );
    }
  };

  const handleChangeCount = (type) => {
    if (type === "increase") {
      setNumProduct((prev) =>
        Math.min(prev + 1, selectedVariant?.product_countInStock || 1)
      );
    } else {
      setNumProduct((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant); // Cập nhật biến thể được chọn
    setNumProduct(1); // Reset số lượng khi chọn biến thể mới
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <NextComponent
        fontSize="2rem"
        color="#000"
        position="absolute"
        zIndex="2"
        top="42px"
        right="-15px"
      />
    ),
    prevArrow: (
      <BackComponent
        fontSize="2rem"
        color="#000"
        position="absolute"
        zIndex="2"
        top="42px"
        left="-15px"
      />
    ),
  };

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  const thumbnails = productDetails?.product_images || [];
  const feedbackList = productFeedback || [];
  const products = relatedProducts || [];

  return (
    <div className="container">
      <Row style={{ padding: "16px" }}>
        {/* Left Section */}
        <Col span={10} style={{ padding: "16px" }}>
          <div className={styles.mainImage}>
            {selectedImage ? (
              <img
                src={`data:image/png;base64,${selectedImage}`}
                alt="Product main"
              />
            ) : (
              <p>Không có hình ảnh để hiển thị</p>
            )}
          </div>
          <Slider {...settings} className={styles.thumbnails}>
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={`data:image/png;base64,${thumb}`}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setSelectedImage(thumb)} // Cập nhật hình ảnh chính
              />
            ))}
          </Slider>
          <div className={styles.contact}>
            <span>Chia sẻ sản phẩm qua:</span>
            <Link to={"/"}>
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to={"/"}>
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link to={"/"}>
              <img src={tiktok} alt="Tiktok" />
            </Link>
            <Link to={"/"}>
              <img src={zalo} alt="Zalo" />
            </Link>
          </div>
        </Col>

        {/* Right Section */}
        <Col span={14}>
          <div className={styles.productInfo}>
            <h2>{productDetails?.product_title}</h2>
            <div className={styles.rating}>
              <div className={styles.rt}>
                <span>{productDetails?.product_rate}</span>
                {[...Array(5)].map((_, idx) => (
                  <IoIosStar
                    key={idx}
                    className={styles.icon}
                    style={{
                      color:
                        idx < productDetails?.product_rate
                          ? "#ffc107"
                          : "#e4e5e9",
                    }}
                  />
                ))}
              </div>
              <div className={styles.rt}>
                <span>
                  {feedbackList?.length || 0} <p>Đánh giá</p>
                </span>
              </div>
              <div className={styles.sell}>
                <span>
                  {productDetails?.product_selled} <p>Đã bán</p>
                </span>
              </div>
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>
                {productDetails?.product_price?.toLocaleString()}đ
              </span>
              <span className={styles.currentPrice}>
                {(
                  productDetails?.product_price *
                  (1 - productDetails?.product_percent_discount / 100)
                ).toLocaleString()}
                đ
              </span>
              <div className={styles.discount}>
                <span>{productDetails?.product_percent_discount}% GIẢM</span>
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles.option}>
                <span>Chọn loại</span>
                <div className={styles.choice}>
                  {productDetails?.variants?.map((variant, index) => (
                    <ButtonComponent
                      key={index}
                      title={
                        variant.product_color
                          ? variant.product_color
                          : variant.product_order_type
                          ? variant.product_order_type
                          : variant.product_size
                          ? variant.product_size
                          : variant.product_weight
                          ? variant.product_weight
                          : variant.pet_age
                          ? `${variant.pet_age} tuổi`
                          : "Không rõ"
                      }
                      iconSmall={`data:image/png;base64,${variant.variant_img}`}
                      fontSize="1.2rem"
                      width="170px"
                      widthDiv="none"
                      onClick={() => handleVariantClick(variant)}
                    /> 
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.quantity}> 
              <span>Số lượng</span>
              <div className={styles.btn}>
                <button onClick={() => handleChangeCount("decrease")}>-</button>
                <input
                  type="number"
                  value={numProduct}
                  onChange={(e) => handleInputChange(e.target.value)}
                  min={1}
                  max={selectedVariant?.product_countInStock || 1}
                  className={styles.quantityInput}
                />
                <button onClick={() => handleChangeCount("increase")}>+</button>
              </div>
              <p>
                Còn lại: {selectedVariant?.product_countInStock || 0} sản phẩm
              </p>
            </div>
            <div className={styles.actions}>
              <ButtonComponent
                title="Thêm vào giỏ hàng"
                fontSize="1.2rem"
                width="200px"
                height="50px"
                onClick={handleAddToCart}
              />
              <ButtonComponent
                title="Mua ngay"
                fontSize="1.2rem"
                width="150px"
                height="50px"
                primary
              />
            </div>
          </div>
        </Col>
      </Row>

      {/* Product Description */}
      <div className={styles.productDescription}>
        <div className={styles.title}>
          <h2 >Mô tả sản phẩm</h2>
        </div>
        <p style={{ whiteSpace: 'pre-line' }}>{productDetails?.product_description}</p>
      </div>

      {/* Feedback Section */}
      <div className={styles.feedback}>
        <div className={styles.title}>
          <h2>Đánh giá sản phẩm</h2>
        </div>
        <div className={styles.productFeedback}>
          {feedbackList.map((data, index) => (
            <div key={index}>
              <ProductFeedBackComponent
                img={`data:image/png;base64,${data.user_id.user_avt_img|| ""}`}
                name={data.user_id.user_name || "ẩn danh"}
                star={data.rating || "ẩn danh"}
                date={new Date(data.createdAt).toLocaleDateString('vi-VN') || "ẩn danh"}
                comment={data.content || "ẩn danh"}
                
                imgFeedback={Array.isArray(data.feedback_img) ? data.feedback_img.map(img => `data:image/png;base64,${img}`) : []}
              />

              {index !== feedbackList.length - 1 && (
                <UnderLineComponent
                  width="100%"
                  height="1px"
                  background="#BFBDBC"
                  margin="20px 0 40px 0"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className={styles.otherProduct}>
        <div className={styles.title}>
          <h2>Các sản phẩm tương tự</h2>
        </div>
        <div>
          <div className="grid_row">
            {products.map((product, index) => (
              <div key={index} className="grid_column_2_4">
                <CardComponent
                  src={`data:image/png;base64,${product.product_images[1] || ""}`}
                  alt="ảnh sản phẩm"
                  name={product.product_title}
                  oldPrice={product.price}
                  newPrice={(
                    product?.product_price *
                    (1 - product?.product_percent_discount / 100)
                  ).toLocaleString()}
                  start={product.rating}
                  percent={product?.product_percent_discount}
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonComponent
          width="400px" 
          height="50px"
          title="Xem thêm"
          color="#000"
          border="2px solid #000"
          borderRadius="15px"
          fontSize="2rem"
          margin="0 0 40px 0"
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;