// Phần Thông code ban đầu
// import React, { useEffect, useState } from 'react'
// import { clsx } from 'clsx'
// import SliderComponent from '../../components/SliderComponent/SliderComponent'
// import slider1 from '../../assets/images/slider1.svg'
// import slider2 from '../../assets/images/slider2.svg'
// import styles from './HomePage.module.scss'
// import ServiceComponent from '../../components/ServiceComponent/ServiceComponent'
// import service1 from '../../assets/images/service1.svg'
// import service2 from '../../assets/images/service2.svg'
// import service3 from '../../assets/images/service3.svg'
// import service4 from '../../assets/images/service4.svg'
// import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
// import CardComponent from '../../components/CardComponent/CardComponent'
// import product1 from '../../assets/images/product1.svg'
// import product2 from '../../assets/images/product2.svg'
// import product3 from '../../assets/images/product3.svg'
// import TitleComponent from '../../components/TitleComponent/TitleComponent'
// import BrandComponent from '../../components/BrandComponent/BrandComponent'
// import brand1 from '../../assets/images/brand1.svg'
// import brand2 from '../../assets/images/brand2.svg'
// import brand3 from '../../assets/images/brand3.svg'
// import brand4 from '../../assets/images/brand4.svg'
// import brand5 from '../../assets/images/brand5.svg'
// import brand6 from '../../assets/images/brand6.svg'
// import brand7 from '../../assets/images/brand7.svg'
// import brand8 from '../../assets/images/brand8.svg'
// import brand9 from '../../assets/images/brand9.svg'
// import brand10 from '../../assets/images/brand10.svg'
// import brand11 from '../../assets/images/brand11.svg'
// import brand12 from '../../assets/images/brand12.svg'
// import brand13 from '../../assets/images/brand13.svg'
// import brand14 from '../../assets/images/brand14.svg'
// import brand15 from '../../assets/images/brand15.svg'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
// import CustomerReviewsComponent from '../../components/CustomerReviewsComponent/CustomerReviewsComponent'
// import NewProductComponent from '../../components/NewProductComponent/NewProductComponent'
// import BestSellingComponent from '../../components/BestSellingComponent/BestSellingComponent'
// import AllBrandsComponent from '../../components/AllBrandsComponent/AllBrandsComponent'



// const HomePage = () => {
//   const services = [
//     { src: service1, alt: "Miễn phí vận chuyển", text: "Miễn phí vận chuyển" },
//     { src: service2, alt: "Sản phẩm chính hãng", text: "Sản phẩm chính hãng" },
//     { src: service3, alt: "Thanh toán tiện lợi", text: "Thanh toán tiện lợi" },
//     { src: service4, alt: "Hỗ trợ tận tâm", text: "Hỗ trợ tận tâm", width: "110px" },
//   ];

//   const products = [
//     // Danh sách sản phẩm (có thể thay đổi hoặc lấy từ API)
//     { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product1, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product2, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     { src: product3, alt: "ABCD", name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng", oldPrice: "55.000", newPrice: "40.000", start: "4.5/5", percent: "10" },
//     // Các sản phẩm khác...
//   ];
  
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [isInViewport, setIsInViewport] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(min-width: 740px) and (max-width: 1023px)');
//     const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener('change', handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleViewportChange);
//     };
//   }, []);

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

//   const handleShowMore = () => {
//     setVisibleCount(brands.length);
//   };

//   const handleShowLess = () => {
//     setVisibleCount(6); 
//   };
//   const brands = [
//     { src: brand1, alt: 'ROYAL CANIN' },
//     { src: brand2, alt: 'ROYAL CANIN' },
//     { src: brand3, alt: 'ROYAL CANIN' },
//     { src: brand4, alt: 'ROYAL CANIN' },
//     { src: brand5, alt: 'ROYAL CANIN' },
//     { src: brand6, alt: 'ROYAL CANIN' },
//     { src: brand7, alt: 'ROYAL CANIN' },
//     { src: brand8, alt: 'ROYAL CANIN' },
//     { src: brand9, alt: 'ROYAL CANIN' },
//     { src: brand10, alt: 'ROYAL CANIN' },
//     { src: brand11, alt: 'ROYAL CANIN' },
//     { src: brand12, alt: 'ROYAL CANIN' },
//     { src: brand13, alt: 'ROYAL CANIN' },
//     { src: brand14, alt: 'ROYAL CANIN' },
//     { src: brand15, alt: 'ROYAL CANIN' },
//   ];

//   return (
//       <div className={clsx('grid wide')}>
//         <div className={styles.sliderImg}>
//           <SliderComponent arrImages={[slider1, slider2]} />
//         </div>
//         <div className={clsx('row', styles.service)}>
//           {services.map((service, index) => (
//             <div key={index} className="col l-3 m-0 c-0">
//               <ServiceComponent {...service} />
//             </div>
//           ))}
//         </div>
//         <div className={clsx(styles.underLine, styles.underNew)}>
//           <UnderLineComponent
//             width="100%"
//             height="1px"
//             background="rgba(0, 0, 0, 0.1)"
//           />
//         </div>
//         <NewProductComponent
//           isInMobile={isInMobile}
//           products={products}
//         />
//         <div className={styles.underLine}>
//           <UnderLineComponent
//             width="100%"
//             height="1px"
//             background="rgba(0, 0, 0, 0.1)"
//           />
//         </div>
//         <BestSellingComponent 
//           isInMobile={isInMobile}
//           products={products}
//         />
//         <div className={styles.underLine}>
//           <UnderLineComponent
//             width="100%"
//             height="1px"
//             background="rgba(0, 0, 0, 0.1)"
//           />
//         </div>
//         {isInMobile ? (null) : (
//           <AllBrandsComponent 
//             isInViewport={isInViewport}
//             brands={brands}
//             visibleCount={visibleCount}
//             handleShowMore={handleShowMore}
//             handleShowLess={handleShowLess}
//           />
//         )}
//         <div style={{marginBottom: "50px"}}>
//           <CustomerReviewsComponent 
//             isInViewport={isInViewport}
//             isInMobile={isInMobile}
//           />
//         </div>
//     </div>
//   )
// }

// export default HomePage

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
import CustomerReviewsComponent from '../../components/CustomerReviewsComponent/CustomerReviewsComponent'
import NewProductComponent from '../../components/NewProductComponent/NewProductComponent'
import BestSellingComponent from '../../components/BestSellingComponent/BestSellingComponent'
import AllBrandsComponent from '../../components/AllBrandsComponent/AllBrandsComponent'
import { getAllProduct } from '../../services/Product.service'
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isInMobile, setisInMobile] = useState(false);
  const navigate = useNavigate();
   // Hàm gọi API
   const fetchProductData = async (queryKey) => {
    queryKey = queryKey.queryKey
    const product_famous = {
      limit: Number(queryKey[4]),
      product_famous: String(queryKey[1])
    };
    const best_seller = {
      limit: Number(queryKey[4]),
      sort: String(queryKey[2])
    };
    const product_new = {
      limit: Number(queryKey[4]),
      sort: String(queryKey[3])
    };
    try {
      const [famousProduct, bestProduct, newProduct ] = await Promise.all([
        getAllProduct(product_famous),
        getAllProduct(best_seller),
        getAllProduct(product_new)
      ]);
      
      if (!newProduct || !bestProduct || !famousProduct) {
        throw new Error('No data returned from API');
      }
      return {
        newProduct: newProduct.data,
        bestProduct: bestProduct.data,
        famousProduct: famousProduct.data
      }; // Trả về dữ liệu lấy được từ API
  
    } catch (error) {
      console.error('Error fetching product data:', error.message);
      // Nếu có lỗi, trả về một giá trị mặc định hoặc thông báo lỗi rõ ràng
      throw new Error('Failed to fetch product data');
    }
  };
  // Sử dụng useQuery để quản lý việc fetch sản phẩm
  const { data, isLoading } = useQuery({
    queryKey: ['product-data', 'true', 'best_selling', 'newest', '8'],  // Tạo khóa truy vấn cho dữ liệu sản phẩm
    queryFn: fetchProductData,   // Hàm fetch dữ liệu từ API
    refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
    keepPreviousData: true,      // Giữ dữ liệu cũ khi thay đổi tham số
  });
  const newProduct = data?.newProduct || {}
  const famousProduct = data?.famousProduct || {}
  const bestProduct = data?.bestProduct || {}

  const handleNewProduct = () => {
    navigate("/get-all-product?sort=newest")
  }

  const handleFamousProduct = () => {
    navigate("/get-all-product?product_famous=true")
  }

  const handleBestProduct = () => {
    navigate("/get-all-product?sort=best_selling")
  }

  // Xử lý sản phẩm lấy được từ API
  const services = [
    { src: service1, alt: "Miễn phí vận chuyển", text: "Miễn phí vận chuyển" },
    { src: service2, alt: "Sản phẩm chính hãng", text: "Sản phẩm chính hãng" },
    { src: service3, alt: "Thanh toán tiện lợi", text: "Thanh toán tiện lợi" },
    { src: service4, alt: "Hỗ trợ tận tâm", text: "Hỗ trợ tận tâm", width: "110px" },
  ];
  
  useEffect(() => {
    const viewportQuery = window.matchMedia('(min-width: 740px) and (max-width: 1023px)');
    const mobileQuery = window.matchMedia('(max-width: 739px)');

    const handleViewportChange = () => setIsInViewport(viewportQuery.matches);
    const handleMobileChange = () => setisInMobile(mobileQuery.matches);

    handleViewportChange();
    handleMobileChange();

    viewportQuery.addEventListener('change', handleViewportChange);
    mobileQuery.addEventListener('change', handleMobileChange);

    return () => {
      viewportQuery.removeEventListener('change', handleViewportChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
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
  
  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  return (
      <div className={clsx('grid wide')}>
        <div className={styles.sliderImg}>
          <SliderComponent arrImages={[slider1, slider2]} defaultArrows={false}/>
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
          products={famousProduct}
          title="Sản phẩm nổi bật"
          onClick={handleFamousProduct}
        />
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <NewProductComponent
          isInMobile={isInMobile}
          products={newProduct}
          title="Sản phẩm mới"
          onClick={handleNewProduct}
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
          products={bestProduct}
          onClick={handleBestProduct}
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