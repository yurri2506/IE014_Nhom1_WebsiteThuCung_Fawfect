// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Checkbox, Rate } from 'antd'
// import styles from './NavbarComponent.module.scss'
// // import './Navbar.scss'
// import { Slider } from 'antd';
// import ButtonComponent from '../ButtonComponent/ButtonComponent'

// const NavbarComponent = ({isInViewport, isInMobile}) => {
//     const [showAllBrands, setShowAllBrands] = useState(false);

//     const [ageRange, setAgeRange] = useState([3, 120]);

//     const onChange = () => {}
//     const renderContent = (type, options) => {
//         switch(type) {
//             case 'product-category':
//                 return (
//                     options.map((option, index) => {
//                         return <Link to={"/product-details"} key={index}>{option}</Link>
//                     })
//                 )
//             case 'weight':
//                 return (
//                     <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
//                         {options.map((option, index) => {
//                             return <Checkbox key={index} value={option.value}>{option.label}</Checkbox>
//                         })}
//                     </Checkbox.Group>
//                 )
//             case 'brand':
//                 const displayedBrands = showAllBrands ? options : options.slice(0, 4);
//                 return (
//                     <div>
//                         <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
//                             {displayedBrands.map((option, index) => {
//                                 return <Checkbox key={index} value={option.value}>{option.label}</Checkbox>
//                             })}
//                         </Checkbox.Group>
//                         {options.length > 4 && (
//                             <button onClick={() => setShowAllBrands(prev => !prev)}>
//                                 {showAllBrands ? 'Ẩn bớt' : 'Xem thêm'}
//                             </button>
//                         )}
//                     </div>
//                 )
//             case 'star':
//                 return (
//                     options.map((option, index) => {
//                         return (
//                             <div key={index }>
//                                 <Rate disabled defaultValue={option} />
//                                 <p>Sao</p>
//                             </div>
//                         )
//                     })
//                 )
//                 case 'age':
//                 return (
//                     <div>
//                         <Slider
//                             range
//                             min={3}
//                             max={120}
//                             step={1}
//                             value={ageRange}
//                             onChange={(value) => setAgeRange(value)}
//                             tooltip={{ formatter: (value) => `${Math.floor(value / 12)} năm ${value % 12} tháng` }}
//                         />
//                         <p>
//                             Độ tuổi:
//                             <span>Từ {Math.floor(ageRange[0] / 12)} năm {ageRange[0] % 12} tháng
//                             <span>đến</span>
//                             {Math.floor(ageRange[1] / 12)} năm {ageRange[1] % 12} tháng</span>
//                         </p>
//                     </div>
//                 )
//             default:
//                 return null;
//         }
//     }

//   return (
//     <div className={styles.main}>
//         <div className={styles.productCategory}>
//             <h2>Danh mục sản phẩm</h2>
//             {renderContent("product-category", ['Đồ ăn', 'Sữa', 'Trang phục', 'Dụng cụ vệ sinh', 'Sữa tắm', 'Chuồng', 'Balo'])}
//         </div>
//         <div className={styles.filter}>
//                 <h2>Độ tuổi</h2>
//                 <div className={styles.age}>
//                     {renderContent("age")}
//                 </div>
//         </div>
//         <div className={styles.filter}>
//             <h2>Kích thước thú cưng</h2>
//             <div className={styles.choice}>
//                 {renderContent("weight", [
//                     {value: 'Dưới 2 kg', label: 'Dưới 2 kg'},
//                     {value: 'Từ 2 đến 10 kg', label: 'Từ 2 đến 10 kg'},
//                     {value: 'Từ 10 đến 20 kg', label: 'Từ 10 đến 20 kg'},
//                     {value: 'Từ 20 đến 30 kg', label: 'Từ 20 đến 30 kg'},
//                     {value: 'Trên 30kg', label: 'Trên 30kg'},
//                 ])}
//             </div>
//         </div>
//         <div className={styles.filter}>
//             <h2>Thương hiệu</h2>
//             <div className={styles.choice}>
//                 {renderContent("brand", [
//                     {value: 'Hiraw', label: 'Hiraw'},
//                     {value: 'GimCat', label: 'GimCat'},
//                     {value: 'MonGe', label: 'MonGe'},
//                     {value: 'BioLine', label: 'BioLine'},
//                     {value: 'PetLove', label: 'PetLove'},
//                     {value: 'HappyPet', label: 'HappyPet'},
//                     {value: 'DoggyStyle', label: 'DoggyStyle'},
//                     {value: 'CatDelight', label: 'CatDelight'},
//                     {value: 'Pawfect', label: 'Pawfect'},
//                     {value: 'FurryFriends', label: 'FurryFriends'}
//                 ])}
//             </div>
//         </div>
//         <div className={styles.filter}>
//             <h2>Số sao đánh giá</h2>
//             <div className={styles.star}>
//                 {renderContent("star", ['5', '4', '3', '2', '1'])}
//             </div>
//         </div>
//         {isInViewport || isInMobile ? (
//              <ButtonComponent
//                 primary
//                 title="Áp dụng"
//                 width="80%"
//                 height="40px"
//                 textAlign="center"
//                 margin="10px 0 0 0"
//                 className={styles.btn}
//            />
//         ) : null}
//     </div>
//   )
// }

// export default NavbarComponent
import React, { useState } from "react";
import { Checkbox, Radio, Rate, Input } from "antd";
import styles from "./NavbarComponent.module.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

const NavbarComponent = ({ isInViewport, isInMobile, handleFilterChange }) => {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [priceMin, setMinPrice] = useState(""); // Lưu giá trị minPrice
  const [priceMax, setMaxPrice] = useState(""); // Lưu giá trị maxPrice
  const [selectedCategories, setSelectedCategories] = useState([]); // Lưu trữ các danh mục đã chọn

  // Hàm xử lý thay đổi bộ lọc danh mục
  const onCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories); // Cập nhật state selectedCategories
    handleFilterChange({ category_level_2: selectedCategories }); // Gọi hàm handleFilterChange từ parent component
  };

  // Hàm xử lý thay đổi bộ lọc giá
  const onMinPriceChange = (e) => {
    setMinPrice(e.target.value); // Cập nhật giá trị minPrice
  };

  const onMaxPriceChange = (e) => {
    setMaxPrice(e.target.value); // Cập nhật giá trị maxPrice
  };

  const onApplyPriceChange = () => {
    // Kiểm tra nếu cả minPrice và maxPrice đều hợp lệ
    if (priceMin && priceMax && !isNaN(priceMin) && !isNaN(priceMax)) {
      handleFilterChange({
        priceMin: Number(priceMin),
        priceMax: Number(priceMax),
      }); // Gửi giá trị lên parent component
    }
  };

  // Hàm xử lý thay đổi bộ lọc thương hiệu
  const onBrandChange = (selectedBrands) => {
    handleFilterChange({ product_brand: selectedBrands });
  };

  const renderContent = (type, options) => {
    switch (type) {
      case "product-category":
        return options.map((option, index) => {
          return (
            <Link
              to="#"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange([option]);
              }}
            >
              {option}
            </Link>
          );
        });
      case "price":
        return (
          <div>
            <div className={styles.priceInput}>
              <Input
                type="number"
                placeholder="Min giá"
                value={priceMin}
                onChange={onMinPriceChange}
                style={{ width: "45%", marginRight: "10px" }}
              />
              <Input
                type="number"
                placeholder="Max giá"
                value={priceMax}
                onChange={onMaxPriceChange}
                style={{ width: "45%" }}
              />
            </div>
            <button
              onClick={onApplyPriceChange}
              className={styles.applyPriceBtn}
            >
              Áp dụng
            </button>
          </div>
        );
      case "brand":
        const displayedBrands = showAllBrands ? options : options.slice(0, 4);
        return (
          <div>
            <Checkbox.Group style={{ width: "100%" }} onChange={onBrandChange}>
              {displayedBrands.map((option, index) => (
                <Checkbox key={index} value={option.value}>
                  {option.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
            {options.length > 4 && (
              <button onClick={() => setShowAllBrands((prev) => !prev)}>
                {showAllBrands ? "Ẩn bớt" : "Xem thêm"}
              </button>
            )}
          </div>
        );
      case "star":
        return options.map((option, index) => (
          <div key={index}>
            <Rate disabled defaultValue={option} />
            <p>Sao</p>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.productCategory}>
        <h2>Danh mục sản phẩm</h2>
        {renderContent("product-category", [
          "Thức ăn",
          "Phụ kiện",
          "Đồ chơi",
          "Chăm sóc vệ sinh",
          "Trang phục",
        ])}
      </div>
      <div className={styles.filter}>
        <h2>Giá</h2>
        <div className={styles.price}>{renderContent("price")}</div>
      </div>
      {/* <div className={styles.filter}>
        <h2>Kích thước thú cưng</h2>
        <div className={styles.choice}>
          {renderContent("weight", [
            { value: "Dưới 2 kg", label: "Dưới 2 kg" },
            { value: "Từ 2 đến 10 kg", label: "Từ 2 đến 10 kg" },
            { value: "Từ 10 đến 20 kg", label: "Từ 10 đến 20 kg" },
            { value: "Từ 20 đến 30 kg", label: "Từ 20 đến 30 kg" },
            { value: "Trên 30kg", label: "Trên 30kg" },
          ])}
        </div>
      </div> */}
      <div className={styles.filter}>
        <h2>Thương hiệu</h2>
        <div className={styles.choice}>
          {renderContent("brand", [
            { value: "Paddy", label: "Paddy" },
            { value: "Neovia", label: "Neovia" },
            { value: "Natural Core", label: "Natural Core" },
            { value: "LaPaw", label: "LaPaw" },
            { value: "Hug", label: "Hug" },
            { value: "Diamond", label: "Diamond" },
            { value: "PetCenter", label: "PetCenter" },
            { value: "DoggyMan", label: "DoggyMan" },
            { value: "FOFOS", label: "FOFOS" },
            { value: "BNN", label: "BNN" },
            { value: "Tpet", label: "Tpet" },
          ])}
        </div>
      </div>
      <div className={styles.filter}>
        <h2>Số sao đánh giá</h2>
        <div className={styles.star}>
          {renderContent("star", ["5", "4", "3", "2", "1"])}
        </div>
      </div>
      {isInViewport || isInMobile ? (
        <ButtonComponent
          primary
          title="Áp dụng"
          width="80%"
          height="40px"
          textAlign="center"
          margin="10px 0 0 0"
          className={styles.btn}
        />
      ) : null}
    </div>
  );
};

export default NavbarComponent;
