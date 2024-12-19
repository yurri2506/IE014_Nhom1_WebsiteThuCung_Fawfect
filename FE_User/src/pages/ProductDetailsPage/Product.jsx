import React, { useEffect, useState } from 'react'
import styles from './ProductDetailsPage.module.scss'
import mainProduct from '../../assets/images/mainProduct.svg'
import subProduct1 from '../../assets/images/subProduct1.svg'
import subProduct2 from '../../assets/images/subProduct2.svg'
import subProduct3 from '../../assets/images/subProduct3.svg'
import subProduct4 from '../../assets/images/subProduct4.svg'
import subProduct5 from '../../assets/images/subProduct5.svg'
import productOption1 from '../../assets/images/productOption1.svg'
import chat from '../../assets/images/chat.svg'
import phoneChat from '../../assets/images/phoneChat.svg'
import cart from '../../assets/images/cart.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import tiktok from '../../assets/images/tiktok.svg'
import zalo from '../../assets/images/zalo.svg'
import feedbackAvt from '../../assets/images/feedbackAvt.svg'
import feedbackImg1 from '../../assets/images/feedbackImg1.svg'
import feedbackImg2 from '../../assets/images/feedbackImg2.svg'
import product1 from '../../assets/images/product1.svg'
import product2 from '../../assets/images/product2.svg'
import product3 from '../../assets/images/product3.svg'
import { Col, Pagination, Row } from 'antd'
import Slider from 'react-slick';
import { IoIosStar } from "react-icons/io"
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Link } from 'react-router-dom'
import ProductFeedBackComponent from '../../components/ProductFeedBackComponent/ProductFeedBackComponent'
import BackComponent from '../../components/BackComponent/BackComponent'
import NextComponent from '../../components/NextComponent/NextComponent'
import './ProductDetailsPage.scss'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import SortProductComponent from '../../components/SortProductComponent/SortProductComponent'
import clsx from 'clsx'

const ProductDetailsPage = () => {
    const [mainImage, setMainImage] = useState(mainProduct);

    const thumbnails = [subProduct1, subProduct2, subProduct3, subProduct4, subProduct5, subProduct5, subProduct5];

    const [count, setCount] = useState(1);

    const increase = () => setCount(count + 1);
    const decrease = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

    const handleInputChange = (event) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value) && value >= 1) {
        setCount(value);
      } else {
        setCount(1);
      }
    };

    // const feedbackList = [
    //   {
    //     img: feedbackAvt,
    //     name: "Phi Thông",
    //     star: 5,
    //     date: {
    //       saleDate: "2024-11-14",
    //       productType: "Mèo hồng M"
    //     },
    //     quanlity: "Rất tốt",
    //     isDecription: "Đúng mô tả",
    //     comment: "Sản phẩm rất tốt!",
    //     imgFeedback: [
    //       feedbackImg1,
    //       feedbackImg2,
    //       feedbackImg1,
    //       feedbackImg2
    //     ]
    //   },
    //   {
    //     img: feedbackAvt,
    //     name: "Quang Vũ",
    //     star: 4,
    //     date: {
    //       saleDate: "2023-11-14",
    //       productType: "Mèo đỏ M"
    //     },
    //     quanlity: "Cũng OK nha",
    //     isDecription: "Gần đúng",
    //     comment: "Khá hài lòng với chất lượng.",
    //     imgFeedback: [
    //       feedbackImg1
    //     ]
    //   },
    //   {
    //     img: feedbackAvt,
    //     name: "Thiên Vũ",
    //     star: 2,
    //     date: {
    //       saleDate: "2022-11-14",
    //       productType: "Mèo hồng M"
    //     },
    //     quanlity: "Chưa ổn",
    //     isDecription: "Chưa hoàn toàn đúng",
    //     comment: "Sản phẩm tạm ổn.",
    //     imgFeedback: [
    //       feedbackImg2
    //     ]
    //   }
    // ];
    
    const products = [
      // Danh sách sản phẩm (có thể thay đổi hoặc lấy từ API)
      { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
      // Các sản phẩm khác...
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      nextArrow: <NextComponent
        fontSize = "2rem"
        color = "#000"
        position = "absolute"
        zIndex = "2"
        top = "42px"
        right = "-15px"
    />,
    prevArrow: <BackComponent
        fontSize = "2rem"
        color = "#000"
        position = "absolute"
        zIndex = "2"
        top = "42px"
        left = "-15px"
    />
    };

    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 740px) and (max-width: 1023px)');
      const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

      handleViewportChange();
      mediaQuery.addEventListener('change', handleViewportChange);

      return () => {
        mediaQuery.removeEventListener('change', handleViewportChange);
      };
    }, []);

    const [isInMobile, setisInMobile] = useState(false);
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 739px)');
      const handleViewportChange = () => setisInMobile(mediaQuery.matches);

      handleViewportChange();
      mediaQuery.addEventListener('change', handleViewportChange);

      return () => {
        mediaQuery.removeEventListener('change', handleViewportChange);
      };
    }, []);
  
    return (
      <div className={styles.main}>
        <div className='grid wide'>
          {/* <div className='grid_row'>
            <div className='grid_column_4'>
              <div className={styles.mainImage}>
                <img src={mainImage} alt="Product main"/>
              </div>
              <div className={styles.thumbnails}>
              <Slider {...settings}>
              {thumbnails.map((thumb, index) => {
                return (
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className={styles.thumbnail} />)
  })}
            </Slider>
              </div>
              <Slider {...settings}>
              {thumbnails.map((thumb, index) => {
                return (
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className={styles.thumbnail} />)
  })}
            </Slider>
            </div>
            <div className='grid_column_8'>
            <div className={styles.productInfo}>
                <h2>Mũ len cosplay dễ thương cho thú cưng</h2>
                <div className={styles.rating}>
                  <div className={styles.rt}>
                    <span>5.0</span>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>/-strong/-heart:>:o:-((:-h </div>
                  <div className={styles.rt}>
                    <span>
                      31
                      <p>Đánh giá</p>
                    </span>
                  </div>
                  <div className={styles.sell}>
                    <span>
                      222
                      <p>Đã bán</p>
                    </span>
                  </div>
                </div>
                <div className={styles.price}>
                  <span className={styles.oldPrice}>35.000đ</span>
                  <span className={styles.currentPrice}>32.000đ</span>
                  <div className={styles.discount}>
                    <span>9% GIẢM</span>
                  </div>
                </div>
                <div className={styles.options}>
                  <div className={styles.option}>
                    <label>Chọn mẫu:</label>
                    <ButtonComponent 
                      title="Mũ trắng"
                      icon={productOption1}
                      fontSize="1.2rem"
                      width="150px"
                      // minWidth="200px"
                    />
                    <ButtonComponent 
                      title="Mũ tai mèo trắng"
                      icon={productOption1}
                      fontSize="1.2rem"
                      width="150px"
                    />
                    <ButtonComponent 
                      title="Mũ tai mèo trắng"
                      icon={productOption1}
                      fontSize="1.2rem"
                      width="150px"
                    />
                    <ButtonComponent 
                      title="Mũ tai mèo trắng trắng trắng"
                      icon={productOption1}
                      fontSize="1.2rem"
                      width="150px"
                    />
                    <ButtonComponent 
                      title="Mũ tai mèo trắng"
                      icon={productOption1}
                      fontSize="1.2rem"
                      width="150px"
                    />
                  </div>
                  <div className={styles.option}>
                    <label>Kích thước:</label>
                    <button className={styles.sizeButton}>Size S</button>
                    <button className={styles.sizeButton}>Size M</button>
                  </div>
                  <div className={styles.quantity}>
                    <label>Số lượng:</label>
                    <input type="number" min="1" defaultValue="1" className={styles.quantityInput} />
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={`${styles.button} ${styles.addToCartButton}`}>Thêm vào giỏ hàng</button>
                  <button className={`${styles.button} ${styles.buyNowButton}`}>Mua ngay</button>
                </div>
              </div>
            </div>/-strong/-heart:>:o:-((:-h </div> */}
          <Row style={!isInMobile ? { padding: "16px" } : null}>
            <Col span={isInViewport || isInMobile ? 24 : 10} style={!isInMobile ? { padding: "16px" } : null}>
            {/* <div className={styles.mainImage}>
              <img src={mainImage} alt="Product main"/>
            </div>
            <Slider {...settings} className={styles.thumbnails}>
              {thumbnails.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setMainImage(thumb)}
                      className={styles.thumbnail}
                    />
              ))}
            </Slider> */}
            {isInViewport || isInMobile ? (
              <div>
                <Slider {...settings2}>
                  {thumbnails.map((thumb, index) => (
                    <div key={index}>
                      {/* <img src={thumb} onClick={()=>setMainImage(thumb)} alt={`Product view ${index + 1}`} /> */}
                      <div className={styles.mainImage}>
                        <img src={thumb} alt="Product main" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              ) : (
                <>
                  <div className={styles.mainImage}>
                    <img src={mainImage} alt="Product main" />
                  </div>
                  <Slider {...settings} className={styles.thumbnails}>
                    {thumbnails.map((thumb, index) => (
                      <img
                        key={index}
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setMainImage(thumb)}
                        className={styles.thumbnail}
                      />
                    ))}
                  </Slider>
                </>
              )}
              <div className={clsx(styles.contact, 'm-0', 'l-12', 'c-12')}>
                <span>Chia sẻ sản phẩm qua:</span>
                <Link to={"/"}>
                  <img src={facebook} alt="" />
                </Link>
                <Link to={"/"}>
                  <img src={instagram} alt="" />
                </Link>
                <Link to={"/"}>
                  <img src={tiktok} alt="" />
                </Link>
                <Link to={"/"}>
                  <img src={zalo} alt="" />
                </Link>
              </div>
            </Col>

            <Col span={isInViewport || isInMobile ? 24 : 14}>
              <div className={styles.productInfo}>
                <h2>Mũ len cosplay dễ thương cho thú cưng</h2>
                <div className={styles.rating}>
                  <div className={styles.rt}>
                    <span>5.0</span>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                    <IoIosStar className={styles.icon}/>
                  </div>
                  <div className={styles.rt}>
                    <span>
                      31
                      <p>Đánh giá</p>
                    </span>
                  </div>
                  <div className={styles.sell}>
                    <span>
                      222
                      <p>Đã bán</p>
                    </span>
                  </div>
                </div>
                <div className={styles.price}>
                  {isInMobile ? (
                    <div>
                      <span className={styles.currentPrice}>32.000đ</span>
                      <span className={styles.oldPrice}>35.000đ</span>
                    </div>
                  ) : (
                    <div>
                      <span className={styles.oldPrice}>35.000đ</span>
                      <span className={styles.currentPrice}>32.000đ</span>
                    </div>
                  )}
                  {isInMobile ? (
                    <div>
                      <span className={styles.currentPrice}>
                        {(
                          productDetails?.product_price *
                          (1 - productDetails?.product_percent_discount / 100)
                        ).toLocaleString()}
                        đ
                      </span>
                      <span className={styles.oldPrice}>
                        {productDetails?.product_price?.toLocaleString()}đ
                      </span>
                    </div>
                  ) : (
                    <div>
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
                    </div>
                  )}
                  <div className={styles.discount}>
                    <span>9% GIẢM</span>
                  </div>
                </div>
                <div className={styles.options}>
                  <div className={styles.option}>
                    <span>Chọn mẫu</span>
                    <div className={clsx(styles.choice, 'row')}>
                      <div className='col c-6'>
                        <ButtonComponent 
                          title="Mũ trắng"
                          icon={productOption1}
                          fontSize="1.2rem"
                          // width="170px"
                          widthDiv="none"
                          // minWidth="200px"
                          className={styles.btnType}
                        />
                      </div>
                      <div className='col c-6'>
                        <ButtonComponent 
                          title="Mũ trắng"
                          icon={productOption1}
                          fontSize="1.2rem"
                          // width="170px"
                          widthDiv="none"
                          // minWidth="200px"
                          className={styles.btnType}
                        />
                      </div>
                      <div className='col c-6'>
                        <ButtonComponent 
                          title="Mũ trắng"
                          icon={productOption1}
                          fontSize="1.2rem"
                          // width="170px"
                          widthDiv="none"
                          // minWidth="200px"
                          className={styles.btnType}
                        />
                      </div>
                      <div className='col c-6'>
                        <ButtonComponent 
                          title="Mũ trắng"
                          icon={productOption1}
                          fontSize="1.2rem"
                          // width="170px"
                          widthDiv="none"
                          // minWidth="200px"
                          className={styles.btnType}
                        />
                      </div>
                      <div className='col c-6'>
                        <ButtonComponent 
                          title="Mũ trắng"
                          icon={productOption1}
                          fontSize="1.2rem"
                          // width="170px"
                          widthDiv="none"
                          // minWidth="200px"
                          className={styles.btnType}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.size}>
                    <span>Kích thước</span>
                    <div className={clsx('row', styles.choice)}>
                      <div className='col c-3'>
                        <ButtonComponent 
                          title="S"
                          fontSize="1.2rem"
                          // width="80px"
                          height="40px"
                          widthDiv="none"
                        />
                      </div>
                      <div className='col c-3'>
                        <ButtonComponent 
                          title="M"
                          fontSize="1.2rem"
                          // width="80px"
                          height="40px"
                          widthDiv="none"
                        />
                      </div>
                      <div className='col c-3'>
                        <ButtonComponent 
                          title="L"
                          fontSize="1.2rem"
                          // width="80px"
                          height="40px"
                          widthDiv="none"
                        />
                      </div>
                      <div className='col c-3'>
                        <ButtonComponent 
                          title="XL"
                          fontSize="1.2rem"
                          // width="80px"
                          height="40px"
                          widthDiv="none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <span>Số lượng</span>
                    <div className={styles.btn}>
                      <button onClick={decrease} min="1" defaultValue="1">-</button>
                      <input value={count} 
                        min="1" 
                        onChange={handleInputChange} 
                        className={styles.quantityInput}
                      />
                      <button onClick={increase}>+</button>
                    </div>
                    <div className={styles.chat}>
                      <ButtonComponent 
                          title="Chat Zalo"
                          fontSize="1.2rem"
                          width="150px"
                          height="40px"
                          widthDiv="none"
                          icon={chat}
                          primary
                          className={styles.btn}
                        />
                        <ButtonComponent 
                          title="Gọi Hotline"
                          fontSize="1.2rem"
                          width="150px"
                          height="40px"
                          widthDiv="none"
                          icon={phoneChat}
                          primary
                          className={styles.btn}
                        />
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <ButtonComponent 
                    title="Thêm vào giỏ hàng"
                    fontSize="1.2rem"
                    width="200px"
                    height="50px"
                    widthDiv="none"
                    icon={cart}
                    className={styles.btnAdd}
                  />
                  <ButtonComponent 
                    title="Mua ngay"
                    fontSize="1.2rem"
                    width="150px"
                    height="50px"
                    widthDiv="none"
                    primary
                    className={styles.btnBuy}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className={styles.productDescription}>
            <div className={styles.title}>
              <h2>Mô tả sản phẩm</h2>
            </div>
            <p>
            Mũ len cosplay dễ thương cho mèo - Mũ trùm đầu hóa trang cho thú cưng
  😸 Mô Tả Sản Phẩm: Một phụ kiện siêu đáng yêu mà bạn không thể bỏ qua cho thú cưng của mình! Thiết kế mũ kèm 2 dây cột cố định giúp các bé mèo tinh nghịch dễ dàng vui chơi, hoạt động thoải mái hơn. Chất liệu thấm hút tốt không chỉ mang lại sự thoải mái mà còn giữ cho bé luôn khô ráo.
  ☑️ Kích cỡ đường kính:     + Size S: 26-28cm    + Size M: 28-34cm
  ☑️ Chất liệu: Làm từ vải len
  ☑️ Công Dụng và Ưu Điểm:
      + Thiết kế màu sắc năng động và hợp thời trang, phù hợp với mọi dịp.
      + Hình in đáng yêu giúp thú cưng của bạn nổi bật và thu hút mọi ánh nhìn. + Chất liệu vải cao cấp, an toàn cho sức khỏe, mang lại cảm giác dễ chịu khi mặc.
  Bạn có thể Giữ Ấm đầu bé khi trời trở lạnh. Thời tiết sài gòn cũng sấp chuyển sang trời lạnh rồi vì vậy hãy sấm ngay một chiếc mũ cho bé nhà mình đi nào.
  😸 THIÊN ĐƯỜNG ĐỒ CHƠI PHỤ KIỆN CHÓ MÈO - THÚ CƯNG
  Cả một bầu trời phụ kiện tất tần tật những gì để cho các boss vui là tụi mình đều có nè.. nhanh nhanh đến mua sắm nè mọi người ơi 🔥
            </p>
          </div>

          <div className={styles.feedback}>
            <div className={styles.title}>
              <h2>Đánh giá sản phẩm</h2>
            </div>
            <div className={styles.overallRating}>
              <div className={styles.totalStar}>
                <span>
                  5.0
                  <p>trên 5</p>
                </span>
                <div className={styles.star}>
                  <IoIosStar className={styles.icon}/>
                  <IoIosStar className={styles.icon}/>
                  <IoIosStar className={styles.icon}/>
                  <IoIosStar className={styles.icon}/>
                  <IoIosStar className={styles.icon}/>
                </div>
              </div>
              <div className={styles.filter}>
                <div className={styles.haveStar}>
                  <ButtonComponent 
                    title="Tất cả"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="5 Sao"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="4 Sao"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="3 Sao"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="2 Sao"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="1 Sao"
                    fontSize="1.5rem"
                    width="100px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                </div>
                <div className={styles.noStar}>
                  <ButtonComponent 
                    title="Có bình luận"
                    fontSize="1.5rem"
                    width="150px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                  <ButtonComponent 
                    title="Có hình ảnh/video"
                    fontSize="1.5rem"
                    width="150px"
                    height="32px"
                    className={styles.btn}
                    widthDiv="none"
                  />
                </div>
              </div>
            </div>
            <div className={styles.productFeedback}>
              {/* {feedbackList.map((data, index) => (
                <div key={index}>
                  <ProductFeedBackComponent {...data} />
                  {index !== feedbackList.length - 1 && (
                    <UnderLineComponent 
                      width="100%"
                      height="1px"
                      background="#BFBDBC"
                      margin="20px 0 40px 0"
                    />
                  )}
                </div>
              ))} */}
            </div>
            <div className={styles.panigation}>
              <Pagination defaultCurrent={1} total={50}/>
            </div>
            <div className={styles.otherProduct}>
              <div className={styles.title}>
                <h2>Các sản phẩm tương tự</h2>
              </div>
              <div>
                <div className='row'>
                  {products.map((product, index) => (
                    <div key={index} className='col l-2-4 m-4 c-6'>
                      <CardComponent {...product}/>
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
        </div>
      </div>
    );
}

export default ProductDetailsPage