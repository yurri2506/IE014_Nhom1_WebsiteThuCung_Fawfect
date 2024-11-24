import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Rate } from 'antd'
import styles from './NavbarComponent.module.scss'
import './Navbar.scss'
import { Slider } from 'antd';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const NavbarComponent = () => {
    const [showAllBrands, setShowAllBrands] = useState(false);

    const [ageRange, setAgeRange] = useState([3, 120]);

    const onChange = () => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'product-category':
                return (
                    options.map((option, index) => {
                        return <Link to={"/product-details"} key={index}>{option}</Link>
                    })
                )
            case 'weight':
                return (
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        {options.map((option, index) => {
                            return <Checkbox key={index} value={option.value}>{option.label}</Checkbox>
                        })}
                    </Checkbox.Group>
                )
            case 'brand':
                const displayedBrands = showAllBrands ? options : options.slice(0, 4);
                return (
                    <div>
                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                            {displayedBrands.map((option, index) => {
                                return <Checkbox key={index} value={option.value}>{option.label}</Checkbox>
                            })}
                        </Checkbox.Group>
                        {options.length > 4 && (
                            <button onClick={() => setShowAllBrands(prev => !prev)}>
                                {showAllBrands ? 'Ẩn bớt' : 'Xem thêm'}
                            </button>
                        )}
                    </div>
                )
            case 'star':
                return (
                    options.map((option, index) => {
                        return (
                            <div key={index }>
                                <Rate disabled defaultValue={option} /> 
                                <p>Sao</p>
                            </div>
                        )
                    })
                )
                case 'age':
                return (
                    <div>
                        <Slider
                            range
                            min={3}
                            max={120}
                            step={1}
                            value={ageRange}
                            onChange={(value) => setAgeRange(value)}
                            tooltip={{ formatter: (value) => `${Math.floor(value / 12)} năm ${value % 12} tháng` }}
                        />
                        <p>
                            Độ tuổi:
                            <span>Từ {Math.floor(ageRange[0] / 12)} năm {ageRange[0] % 12} tháng
                            <span>đến</span>
                            {Math.floor(ageRange[1] / 12)} năm {ageRange[1] % 12} tháng</span>
                        </p>
                    </div>
                )
            default:
                return null;
        }
    }

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
    <div className={styles.main}>
        <div className={styles.productCategory}>
            <h2>Danh mục sản phẩm</h2>
            {renderContent("product-category", ['Đồ ăn', 'Sữa', 'Trang phục', 'Dụng cụ vệ sinh', 'Sữa tắm', 'Chuồng', 'Balo'])}
        </div>
        <div className={styles.filter}>
                <h2>Độ tuổi</h2>
                <div className={styles.age}>
                    {renderContent("age")}
                </div>
        </div>
        <div className={styles.filter}>
            <h2>Kích thước thú cưng</h2>
            <div className={styles.choice}>
                {renderContent("weight", [
                    {value: 'Dưới 2 kg', label: 'Dưới 2 kg'},
                    {value: 'Từ 2 đến 10 kg', label: 'Từ 2 đến 10 kg'},
                    {value: 'Từ 10 đến 20 kg', label: 'Từ 10 đến 20 kg'},
                    {value: 'Từ 20 đến 30 kg', label: 'Từ 20 đến 30 kg'},
                    {value: 'Trên 30kg', label: 'Trên 30kg'},
                ])}
            </div>
        </div>
        <div className={styles.filter}>
            <h2>Thương hiệu</h2>
            <div className={styles.choice}>
                {renderContent("brand", [
                    {value: 'Hiraw', label: 'Hiraw'},
                    {value: 'GimCat', label: 'GimCat'},
                    {value: 'MonGe', label: 'MonGe'},
                    {value: 'BioLine', label: 'BioLine'},
                    {value: 'PetLove', label: 'PetLove'},
                    {value: 'HappyPet', label: 'HappyPet'},
                    {value: 'DoggyStyle', label: 'DoggyStyle'},
                    {value: 'CatDelight', label: 'CatDelight'},
                    {value: 'Pawfect', label: 'Pawfect'},
                    {value: 'FurryFriends', label: 'FurryFriends'}
                ])}
            </div>
        </div>
        <div className={styles.filter}>
            <h2>Số sao đánh giá</h2>
            <div className={styles.star}>
                {renderContent("star", ['5', '4', '3', '2', '1'])}
            </div>
        </div>
        {isInViewport ? (
             <ButtonComponent 
                primary
                title="Áp dụng"
                width="70%"
                height="40px"
                textAlign="center"
                margin="10px 0 0 0"
                className={styles.btn}
           />
        ) : null}
    </div>
  )
}

export default NavbarComponent