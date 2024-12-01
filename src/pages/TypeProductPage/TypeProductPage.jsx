// import React, { useEffect, useState } from "react";
// import styles from "./TypeProductPage.module.scss";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
// import SortProductComponent from "../../components/SortProductComponent/SortProductComponent";
// import CardComponent from "../../components/CardComponent/CardComponent";
// import product1 from "../../assets/images/product1.svg";
// import product2 from "../../assets/images/product2.svg";
// import product3 from "../../assets/images/product3.svg";
// import clsx from "clsx";
// import { Pagination } from "antd";

// const TypeProductPage = () => {
//   const products = [
//     // Danh sách sản phẩm (có thể thay đổi hoặc lấy từ API)
//     {
//       src: product1,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product2,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product3,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product1,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product2,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product3,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product1,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product2,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product3,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     {
//       src: product3,
//       alt: "ABCD",
//       name: "Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng",
//       oldPrice: "55.000",
//       newPrice: "40.000",
//       start: "4.5/5",
//       percent: "10",
//     },
//     // Các sản phẩm khác...
//   ];

//   const [isInViewport, setIsInViewport] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(
//       "(min-width: 740px) and (max-width: 1023px)"
//     );
//     const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener("change", handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleViewportChange);
//     };
//   }, []);

//   const handleNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };

//   useEffect(() => {
//     if (showNavbar) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [showNavbar]);

//   const [isInMobile, setisInMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 739px)");
//     const handleViewportChange = () => setisInMobile(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener("change", handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleViewportChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (showNavbar) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [showNavbar]);

//   return (
//     <div className={styles.main}>
//       <div className="grid wide">
//         <div className="row">
//           <div className="col l-3 m-0 c-0">
//             <NavbarComponent />
//           </div>
//           <div className="col l-9 m-12 c-12">
//             <div className="row">
//               <div className={clsx("col l-12 m-12 c-12", styles.sort)}>
//                 <SortProductComponent
//                   handleNavbar={handleNavbar}
//                   isInViewport={isInViewport}
//                   isInMobile={isInMobile}
//                 />
//               </div>
//               {products.map((product, index) => (
//                 <div className="col l-4 m-4 c-6">
//                   <CardComponent {...product} />
//                 </div>
//               ))}
//             </div>
//             <Pagination defaultCurrent={1} total={50} />
//           </div>
//         </div>
//         {showNavbar && (isInViewport || isInMobile) && (
//           <div>
//             <div onClick={handleNavbar} className={styles.overlay}></div>
//             <div className={styles.navbar}>
//               <NavbarComponent
//                 isInViewport={isInViewport}
//                 isInMobile={isInMobile}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TypeProductPage;

// import React, { useEffect, useState } from "react";
// import styles from "./TypeProductPage.module.scss";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
// import SortProductComponent from "../../components/SortProductComponent/SortProductComponent";
// import CardComponent from "../../components/CardComponent/CardComponent";
// import clsx from "clsx";
// import { Pagination } from "antd";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getAllProduct } from "../../services/Product.service";

// const TypeProductPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // State để lưu trữ các tham số lọc
//   const [filters, setFilters] = useState({
//     limit: 12,
//     page: 0,
//     sort: "",
//     search: "",
//     category_level_1: "",
//     category_level_2: "",
//     category_level_3: "",
//     product_brand: "",
//     product_rate: "",
//     pet_age: "",
//     product_famous: "",
//     priceMin: "",
//     priceMax: "",
//   });

//   // Sử dụng useEffect để cập nhật `filters` từ URL params
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);

//     const updatedFilters = {
//       limit: 12,
//       page:  searchParams.get("page") || 0,
//       sort: searchParams.get("sort") || "",
//       search: searchParams.get("search") || "",
//       category_level_1: searchParams.get("category_level_1") || "",
//       category_level_2: searchParams.get("category_level_2") || "",
//       category_level_3: searchParams.get("category_level_3") || "",
//       product_brand: searchParams.get("product_brand") || "",
//       product_rate: searchParams.get("product_rate") || "",
//       pet_age: searchParams.get("pet_age") || "",
//       product_famous: searchParams.get("product_famous") || "",
//       priceMin: Number(searchParams.get("priceMin")),
//       priceMax: Number(searchParams.get("priceMax")),
//     };
//     setFilters(updatedFilters);
//   }, [location.search]);

//   // Hàm xử lý thay đổi bộ lọc và cập nhật URL params
//   const handleFilterChange = (newFilters) => {
//     const searchParams = new URLSearchParams(location.search);

//     // Cập nhật params vào URL
//     Object.keys(newFilters).forEach((key) => {
//       if (newFilters[key]) {
//         searchParams.set(key, newFilters[key]);
//       } else {
//         searchParams.delete(key);
//       }
//     });

//     navigate(`${location.pathname}?${searchParams.toString()}`);
//     setFilters((prevFilters) => ({ ...prevFilters, ...newFilters })); // Cập nhật state filters
//   };

//   // Hàm lấy dữ liệu sản phẩm từ API
//   const fetchProductData = async ({ queryKey }) => {
//     const [, params] = queryKey;
//     try {
//       const response = await getAllProduct(params); // Gọi API với params 
//       console.log("dữ liệu", response);console.log("dữ liệu", params);
//       return response; // Trả về dữ liệu sản phẩm
//     } catch (error) {
//       console.error("Error fetching product data:", error.message);
//       throw new Error("Failed to fetch product data");
//     }
//   };

//   // Cập nhật lại cách gọi `useQuery` theo cú pháp mới v5
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["product-data", filters], // Vẫn giữ `queryKey` như trước
//     queryFn: fetchProductData, // Hàm gọi API
//     enabled: !!filters, // Chỉ fetch khi id tồn tại
//     refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
//     keepPreviousData: true, // Giữ dữ liệu cũ khi id thay đổi
//   });

//   const products = data?.data || [];

//   const [isInViewport, setIsInViewport] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   const handleNavbar = () => setShowNavbar((prev) => !prev);

//   const [isInMobile, setIsInMobile] = useState(false);

//   // Theo dõi sự thay đổi kích thước viewport để điều chỉnh cho mobile và desktop
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width: 740px) and (max-width: 1023px)");
//     const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener("change", handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleViewportChange);
//     };
//   }, []);

//   useEffect(() => {
//     const mobileQuery = window.matchMedia("(max-width: 739px)");
//     const handleMobileChange = () => setIsInMobile(mobileQuery.matches);

//     handleMobileChange();
//     mobileQuery.addEventListener("change", handleMobileChange);

//     return () => {
//       mobileQuery.removeEventListener("change", handleMobileChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (showNavbar) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [showNavbar]);

//   // Hiển thị thông báo khi đang tải hoặc lỗi xảy ra
//   if (isLoading) {
//     return <div>Đang tải dữ liệu sản phẩm...</div>;
//   }

//   if (isError) {
//     return <div>Đã có lỗi xảy ra khi tải sản phẩm.</div>;
//   }

//   return (
//     <div className={styles.main}>
//       <div className="grid wide">
//         <div className="row">
//           <div className="col l-3 m-0 c-0">
//             <NavbarComponent
//               isInViewport={isInViewport}
//               isInMobile={isInMobile}
//               handleFilterChange={handleFilterChange} // Truyền hàm vào NavbarComponent
//             />
//           </div>
//           <div className="col l-9 m-12 c-12">
//             <div className="row">
//               <div className={clsx("col l-12 m-12 c-12", styles.sort)}>
//                 <SortProductComponent
//                   handleNavbar={handleNavbar}
//                   isInViewport={isInViewport}
//                   isInMobile={isInMobile}
//                   handleFilterChange={handleFilterChange} // Truyền hàm vào SortProductComponent
//                 />
//               </div>
//               {products.length > 0 ? (
//                 products.map((product, index) => (
//                   <div key={index} className="col l-4 m-4 c-6">
//                     <CardComponent
//                       src={`data:image/png;base64,${
//                         product.product_images[1] || ""
//                       }`}
//                       alt="ảnh sản phẩm"
//                       name={product.product_title}
//                       oldPrice={product.product_price}
//                       newPrice={(
//                         product?.product_price *
//                         (1 - product?.product_percent_discount / 100)
//                       ).toLocaleString()}
//                       start={product.rating}
//                       percent={product?.product_percent_discount}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="col l-12 m-12 c-12">Không có sản phẩm nào</div>
//               )}
//             </div>
//             <Pagination
//               current={filters.page}
//               total={data?.total || 0} // Total là số lượng sản phẩm trả về từ API
//               onChange={(page) => handleFilterChange({ page })}
//             />
//           </div>
//         </div>

//         {/* Hiển thị Navbar khi showNavbar = true và màn hình mobile hoặc viewport */}
//         {showNavbar && (isInViewport || isInMobile) && (
//           <div>
//             <div onClick={handleNavbar} className={styles.overlay}></div>
//             <div className={styles.navbar}>
//               <NavbarComponent
//                 isInViewport={isInViewport}
//                 isInMobile={isInMobile}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TypeProductPage;

import React, { useEffect, useState } from "react";
import styles from "./TypeProductPage.module.scss";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import SortProductComponent from "../../components/SortProductComponent/SortProductComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import clsx from "clsx";
import { Pagination } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/Product.service";

const TypeProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State để lưu trữ các tham số lọc
  const [filters, setFilters] = useState({
    limit: 12,
    page: 0,
    sort: "",
    search: "",
    category_level_1: "",
    category_level_2: "",
    category_level_3: "",
    product_brand: "",
    product_rate: "",
    pet_age: "",
    product_famous: "",
    priceMin: "",
    priceMax: "",
  });

  // Sử dụng useEffect để cập nhật `filters` từ URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const updatedFilters = {
      limit: 12,
      page: searchParams.get("page") || 0,
      sort: searchParams.get("sort") || "",
      search: searchParams.get("search") || "",
      category_level_1: searchParams.get("category_level_1") || "",
      category_level_2: searchParams.get("category_level_2") || "",
      category_level_3: searchParams.get("category_level_3") || "",
      product_brand: searchParams.get("product_brand") || "",
      product_rate: searchParams.get("product_rate") || "",
      pet_age: searchParams.get("pet_age") || "",
      product_famous: searchParams.get("product_famous") || "",
      priceMin: Number(searchParams.get("priceMin")) || "",
      priceMax: Number(searchParams.get("priceMax")) || "",
    };

    // Chỉ cập nhật filters khi có sự thay đổi thực sự
    setFilters((prevFilters) => {
      if (JSON.stringify(prevFilters) !== JSON.stringify(updatedFilters)) {
        return updatedFilters;
      }
      return prevFilters;
    });
  }, [location.search]);

  // Hàm xử lý thay đổi bộ lọc và cập nhật URL params
  const handleFilterChange = (newFilters) => {
    const searchParams = new URLSearchParams(location.search);

    // Cập nhật params vào URL
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        searchParams.set(key, newFilters[key]);
      } else {
        searchParams.delete(key);
      }
    });

    navigate(`${location.pathname}?${searchParams.toString()}`);
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters })); // Cập nhật state filters
  };

  // Hàm lấy dữ liệu sản phẩm từ API
  const fetchProductData = async ({ queryKey }) => {
    const [, params] = queryKey;
    try {
      const response = await getAllProduct(params); // Gọi API với params 
      console.log("dữ liệu", response); console.log("dữ liệu", params);
      return response; // Trả về dữ liệu sản phẩm
    } catch (error) {
      console.error("Error fetching product data:", error.message);
      throw new Error("Failed to fetch product data");
    }
  };

  // Cập nhật lại cách gọi `useQuery` theo cú pháp mới v5
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product-data", filters], // Vẫn giữ `queryKey` như trước
    queryFn: fetchProductData, // Hàm gọi API
    enabled: !!filters, // Chỉ fetch khi filters đã có giá trị page (bắt đầu từ trang 0)
    refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
    keepPreviousData: true, // Giữ dữ liệu cũ khi id thay đổi
  });

  const products = data?.data || [];

  const [isInViewport, setIsInViewport] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => setShowNavbar((prev) => !prev);

  const [isInMobile, setIsInMobile] = useState(false);

  // Theo dõi sự thay đổi kích thước viewport để điều chỉnh cho mobile và desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 740px) and (max-width: 1023px)");
    const handleViewportChange = () => setIsInViewport(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 739px)");
    const handleMobileChange = () => setIsInMobile(mobileQuery.matches);

    handleMobileChange();
    mobileQuery.addEventListener("change", handleMobileChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  useEffect(() => {
    if (showNavbar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showNavbar]);

  // Hiển thị thông báo khi đang tải hoặc lỗi xảy ra
  if (isLoading) {
    return <div>Đang tải dữ liệu sản phẩm...</div>;
  }

  if (isError) {
    return <div>Đã có lỗi xảy ra khi tải sản phẩm.</div>;
  }

  return (
    <div className={styles.main}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-3 m-0 c-0">
            <NavbarComponent
              isInViewport={isInViewport}
              isInMobile={isInMobile}
              handleFilterChange={handleFilterChange} // Truyền hàm vào NavbarComponent
            />
          </div>
          <div className="col l-9 m-12 c-12">
            <div className="row">
              <div className={clsx("col l-12 m-12 c-12", styles.sort)}>
                <SortProductComponent
                  handleNavbar={handleNavbar}
                  isInViewport={isInViewport}
                  isInMobile={isInMobile}
                  handleFilterChange={handleFilterChange} // Truyền hàm vào SortProductComponent
                />
              </div>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div key={index} className="col l-4 m-4 c-6">
                    <CardComponent
                      src={`data:image/png;base64,${
                        product.product_images[1] || ""
                      }`}
                      alt="ảnh sản phẩm"
                      name={product.product_title}
                      oldPrice={product.product_price}
                      newPrice={(
                        product?.product_price *
                        (1 - product?.product_percent_discount / 100)
                      ).toLocaleString()}
                      start={product.rating}
                      percent={product?.product_percent_discount}
                    />
                  </div>
                ))
              ) : (
                <div className="col l-12 m-12 c-12">Không có sản phẩm nào</div>
              )}
            </div>
            <Pagination
              current={filters.page}
              total={data?.total || 0} // Total là số lượng sản phẩm trả về từ API
              onChange={(page) => handleFilterChange({ page })}
            />
          </div>
        </div>

        {/* Hiển thị Navbar khi showNavbar = true và màn hình mobile hoặc viewport */}
        {showNavbar && (isInViewport || isInMobile) && (
          <div>
            <div onClick={handleNavbar} className={styles.overlay}></div>
            <div className={styles.navbar}>
              <NavbarComponent
                isInViewport={isInViewport}
                isInMobile={isInMobile}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeProductPage;