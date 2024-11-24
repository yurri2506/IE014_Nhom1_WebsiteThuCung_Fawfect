import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SortProductComponent.module.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { FaChevronDown } from 'react-icons/fa6'
import { CiFilter } from "react-icons/ci";


const SortProductComponent = ({handleNavbar}) => {
    const [selectedButton, setSelectedButton] = useState('Liên quan');

    const handleClick = (title) => {
        setSelectedButton(title);
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

  return (
    <div>
        <div className={styles.sort}>
            {isInViewport ? (
                null
            ) : (<span>Sắp xếp theo</span>)}
            <div className={styles.allBtn}>
                <ButtonComponent 
                    title="Liên quan"
                    width="110px"
                    height="45px"
                    fontSize="2rem"
                    widthDiv="none"
                    className={styles.btn}
                    primary={selectedButton === 'Liên quan'}
                    onClick={() => handleClick('Liên quan')}
                />
                <ButtonComponent 
                    title="Mới nhất"
                    width="110px"
                    height="45px"
                    fontSize="2rem"
                    widthDiv="none"
                    className={styles.btn}
                    primary={selectedButton === 'Mới nhất'}
                    onClick={() => handleClick('Mới nhất')}  
                />
                <ButtonComponent 
                    title="Bán chạy"
                    width="110px"
                    height="45px"
                    fontSize="2rem"
                    widthDiv="none"
                    className={styles.btn}
                    primary={selectedButton === 'Bán chạy'}
                    onClick={() => handleClick('Bán chạy')}
                />
            </div>
            <div className={styles.price}>
                <span>Giá</span>
                <FaChevronDown className={styles.icon}/>
                <ul>
                    <li>
                        <Link to={"/"}>
                            Giá: Thấp đến Cao
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            Giá: Cao đến Thấp
                        </Link>
                    </li>
                </ul>
            </div>
            {isInViewport ? (
                    <div onClick={handleNavbar} className={styles.filter}>
                    <CiFilter className={styles.icon}/>
                    <span>LỌC</span>
               </div>
                ) : null
            }
        </div>
    </div>
  )
}

export default SortProductComponent