import React, { useEffect, useState } from 'react'
import styles from './TypeProductPage.module.scss'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import SortProductComponent from '../../components/SortProductComponent/SortProductComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import product1 from '../../assets/images/product1.svg'
import product2 from '../../assets/images/product2.svg'
import product3 from '../../assets/images/product3.svg'
import { Col, Row } from 'antd'
import clsx from 'clsx'
import { CiFilter } from "react-icons/ci";

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

    const [isInViewport, setIsInViewport] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 740px) and (max-width: 1023px)');
    const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
        mediaQuery.removeEventListener('change', handleViewportChange);
    };
    }, []);

    const handleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    useEffect(() => {
        if (showNavbar) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
    }, [showNavbar]);


  return (
    <div className={styles.main}>
        <div className='grid wide'>
            <div className='row'>
                <div className='col l-3 m-0'>
                    <NavbarComponent />
                </div>
                <div className='col l-9 m-12'>
                    <div className='row'>
                        <div className={clsx('col l-12 m-12', styles.sort)}>
                            <SortProductComponent
                                handleNavbar={handleNavbar}
                            />
                        </div>
                        {products.map((product, index) => (
                            <div className='col l-4 m-4'>
                                <CardComponent {...product}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showNavbar && (
                <div>
                    <div onClick={handleNavbar} className={styles.overlay}></div>
                    <div className={styles.navbar}>
                        <NavbarComponent />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default TypeProductPage