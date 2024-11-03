import React from 'react'
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

const HomePage = () => {
  return (
      <div className='container'>
        <div className={styles.sliderImg}>
          <SliderComponent arrImages={[slider1, slider2]}/>
        </div>
        <div className='grid_row'>
          <div className='grid_column_3'>
            <ServiceComponent 
              src={service1} 
              alt="Miễn phí vận chuyển" 
              text="Miễn phí vận chuyển"
            />
          </div>
          <div className='grid_column_3'>
            <ServiceComponent 
              src={service2} 
              alt="Sản phẩm chính hãng" 
              text="Sản phẩm chính hãng"
            />
          </div>
          <div className='grid_column_3'>
            <ServiceComponent 
              src={service3} 
              alt="Thanh toán tiện lợi" 
              text="Thanh toán tiện lợi"
            />
          </div>
          <div className='grid_column_3'>
            <ServiceComponent 
              src={service4} 
              alt="Hỗ trợ tận tâm" 
              text="Hỗ trợ tận tâm"
              width="110px"
            />
          </div>
        </div>
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <TitleComponent
          title="Hàng mới về"
          textTransform="uppercase"
          textAlign="center"
          fontSize="4rem"
        />
        <div className='grid_row'>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product2}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product3}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <ButtonComponent 
            width="200px"
            height="50px"
            title="Xem thêm"
            color="#000"
            border="1px solid #000"
            background="#fff"
            borderRadius="15px"
            fontSize="2rem"
          />
        </div>
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <TitleComponent
          title="Sản phẩm bán chạy"
          textTransform="uppercase"
          textAlign="center"
          fontSize="4rem"
        />
        <div className='grid_row'>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <div className='grid_column_3'>
            <CardComponent 
              src={product1}
              alt="ABCD"
              name="Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng"
              oldPrice="55.000"
              newPrice="40.000"
              start="4.5/5"
              percent="10"
            />
          </div>
          <ButtonComponent 
              width="200px"
              height="50px"
              title="Xem thêm"
              color="#000"
              border="1px solid #000"
              background="#fff"
              borderRadius="15px"
              fontSize="2rem"
            />
        </div>
        <div className={styles.underLine}>
          <UnderLineComponent
            width="100%"
            height="1px"
            background="rgba(0, 0, 0, 0.1)"
          />
        </div>
        <TitleComponent
          title="100+ thương hiệu boss thích"
          textTransform="uppercase"
          textAlign="center"
          fontSize="4rem"
        />
        <div className='grid_row'>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand1}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand2}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand3}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand4}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand5}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand6}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand7}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand8}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand9}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand10}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand11}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand12}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand13}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand14}
              alt="ROYAL CANIN"
            />
          </div>
          <div className='grid_column_2_4'>
            <BrandComponent 
              src={brand15}
              alt="ROYAL CANIN"
            />
          </div>
        </div>
        <div className={styles.feedbacks}>
          <TitleComponent
            title="Khách yêu của PAWFECT nói gì"
            textTransform="none"
            textAlign="left"
            fontSize="4rem"
          />
          {/* <div className={styles.btn}>
            <BackComponent 
              fontSize="5rem"
              color="#000"
            /> 
            <NextComponent 
              fontSize="5rem"
              color="#000"
            />
          </div> */}
        </div>
        {/* <div className='grid_row' style={{marginBottom: "50px"}}>
          <div className='grid_column_4'>
            <FeedBackComponent 
              customer="Sarah M."
              review='"Rất nhiều sản phẩm cho cún yêu có ở cửa hàng, mình có thể tìm thấy mọi thứ ở đây."'
            />
          </div>
          <div className='grid_column_4'>
            <FeedBackComponent 
              customer="Alex K."
              review='"Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!"'
            />
          </div>
          <div className='grid_column_4'>
            <FeedBackComponent 
              customer="James L."
              review='"Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!"'
            />
            </div>
        </div> */}
        <div style={{marginBottom: "50px"}}>
          <CustomerReviewsComponent />
        </div>
      </div>
  )
}

export default HomePage
