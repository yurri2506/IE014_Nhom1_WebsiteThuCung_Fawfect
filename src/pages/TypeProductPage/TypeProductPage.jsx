import React from 'react'
import styles from './TypeProductPage.module.scss'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import SortProductComponent from '../../components/SortProductComponent/SortProductComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import product1 from '../../assets/images/product1.svg'
import product2 from '../../assets/images/product2.svg'
import product3 from '../../assets/images/product3.svg'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
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

  return (
    <div className={styles.main}>
        <div className='container'>
            <Row>
                <Col span={6}>
                    <NavbarComponent />
                </Col>
                <Col span={18}>
                    <Row>
                        <SortProductComponent />
                        {products.map((product, index) => (
                            <Col span={8} style={{padding: "0 8px"}}>
                                <CardComponent {...product}/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default TypeProductPage