import React, { useState } from 'react'
import styles from './SortProductComponent.module.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SortProductComponent = () => {
    const [selectedButton, setSelectedButton] = useState('Liên quan');

    const handleClick = (title) => {
        setSelectedButton(title);
    };

  return (
    <div>
        <div className={styles.sort}>
            <span>Sắp xếp theo</span>
            <div className={styles.allBtn}>
                <ButtonComponent 
                    title="Liên quan"
                    width="130px"
                    height="45px"
                    fontSize="2rem"
                    widthDiv="none"
                    className={styles.btn}
                    primary={selectedButton === 'Liên quan'}
                    onClick={() => handleClick('Liên quan')}
                />
                <ButtonComponent 
                    title="Mới nhất"
                    width="130px"
                    height="45px"
                    fontSize="2rem"
                    widthDiv="none"
                    className={styles.btn}
                    primary={selectedButton === 'Mới nhất'}
                    onClick={() => handleClick('Mới nhất')}  
                />
                <ButtonComponent 
                    title="Bán chạy"
                    width="130px"
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
        </div>
    </div>
  )
}

export default SortProductComponent