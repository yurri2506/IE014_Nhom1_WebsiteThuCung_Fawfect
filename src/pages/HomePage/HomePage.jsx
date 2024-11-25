import React, { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.svg'
import slider2 from '../../assets/images/slider2.svg'
import styles from './HomePage.module.scss'
import ServiceComponent from '../../components/ServiceComponent/ServiceComponent'
import service1 from '../../assets/images/service1.svg'
import service2 from '../../assets/images/service2.svg'
import service3 from '../../assets/images/service3.svg'
import service4 from '../../assets/images/service4.svg'
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import product1 from '../../assets/images/product1.svg'
import product2 from '../../assets/images/product2.svg'
import product3 from '../../assets/images/product3.svg'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import BrandComponent from '../../components/BrandComponent/BrandComponent'
import brand1 from '../../assets/images/brand1.svg'
import brand2 from '../../assets/images/brand2.svg'
import brand3 from '../../assets/images/brand3.svg'
import brand4 from '../../assets/images/brand4.svg'
import brand5 from '../../assets/images/brand5.svg'
import brand6 from '../../assets/images/brand6.svg'
import brand7 from '../../assets/images/brand7.svg'
import brand8 from '../../assets/images/brand8.svg'
import brand9 from '../../assets/images/brand9.svg'
import brand10 from '../../assets/images/brand10.svg'
import brand11 from '../../assets/images/brand11.svg'
import brand12 from '../../assets/images/brand12.svg'
import brand13 from '../../assets/images/brand13.svg'
import brand14 from '../../assets/images/brand14.svg'
import brand15 from '../../assets/images/brand15.svg'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import CustomerReviewsComponent from '../../components/CustomerReviewsComponent/CustomerReviewsComponent'
import NewProductComponent from '../../components/NewProductComponent/NewProductComponent'
import BestSellingComponent from '../../components/BestSellingComponent/BestSellingComponent'
import AllBrandsComponent from '../../components/AllBrandsComponent/AllBrandsComponent'



const HomePage = () => {
  const services = [
    { src: service1, alt: "Miễn phí vận chuyển", text: "Miễn phí vận chuyển" },
    { src: service2, alt: "Sản phẩm chính hãng", text: "Sản phẩm chính hãng" },
    { src: service3, alt: "Thanh toán tiện lợi", text: "Thanh toán tiện lợi" },
    { src: service4, alt: "Hỗ trợ tận tâm", text: "Hỗ trợ tận tâm", width: "110px" },
  ];

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
  
  const [visibleCount, setVisibleCount] = useState(6);
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

  const handleShowMore = () => {
    setVisibleCount(brands.length);
  };

  const handleShowLess = () => {
    setVisibleCount(6); 
  };
  const brands = [
    { src: brand1, alt: 'ROYAL CANIN' },
    { src: brand2, alt: 'ROYAL CANIN' },
    { src: brand3, alt: 'ROYAL CANIN' },
    { src: brand4, alt: 'ROYAL CANIN' },
    { src: brand5, alt: 'ROYAL CANIN' },
    { src: brand6, alt: 'ROYAL CANIN' },
    { src: brand7, alt: 'ROYAL CANIN' },
    { src: brand8, alt: 'ROYAL CANIN' },
    { src: brand9, alt: 'ROYAL CANIN' },
    { src: brand10, alt: 'ROYAL CANIN' },
    { src: brand11, alt: 'ROYAL CANIN' },
    { src: brand12, alt: 'ROYAL CANIN' },
    { src: brand13, alt: 'ROYAL CANIN' },
    { src: brand14, alt: 'ROYAL CANIN' },
    { src: brand15, alt: 'ROYAL CANIN' },
  ];

  return (
      <div className={clsx('grid wide')}>
        <div className={styles.sliderImg}>
          <SliderComponent arrImages={[slider1, slider2]} />
        </div>
        <div className={clsx('row', styles.service)}>
          {services.map((service, index) => (
            <div key={index} className="col l-3 m-0 c-0">
              <ServiceComponent {...service} />
            </div>
          ))}
        </div>
        <div className={clsx(styles.underLine, styles.underNew)}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <NewProductComponent
          isInMobile={isInMobile}
          products={products}
        />
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <BestSellingComponent 
          isInMobile={isInMobile}
          products={products}
        />
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        {isInMobile ? (null) : (
          <AllBrandsComponent 
            isInViewport={isInViewport}
            brands={brands}
            visibleCount={visibleCount}
            handleShowMore={handleShowMore}
            handleShowLess={handleShowLess}
          />
        )}
        <div style={{marginBottom: "50px"}}>
          <CustomerReviewsComponent 
            isInViewport={isInViewport}
            isInMobile={isInMobile}
          />
        </div>
    </div>
  )
}

export default HomePage