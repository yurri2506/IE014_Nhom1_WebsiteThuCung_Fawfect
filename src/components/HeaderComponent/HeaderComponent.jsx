// import React, { useEffect, useState } from "react";
// import { Button, Col, Input, notification, Row } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import clsx from "clsx";
// import styles from "./HeaderComponent.module.scss";
// import "./HeaderComponent.scss";
// import { GrNotification } from "react-icons/gr";
// import whiteLogo from "../../assets/images/whiteLogo.svg";
// import { FaChevronDown, FaHeart, FaRegHeart } from "react-icons/fa6";
// import { PiShoppingCartBold } from "react-icons/pi";
// import { SearchOutlined } from "@ant-design/icons";
// import MoreComponent from "../MoreComponent/MoreComponent";
// import { TbHelpSquare } from "react-icons/tb";
// import { FaAlignJustify } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { MdNavigateNext } from "react-icons/md";
// import { FaHome } from "react-icons/fa";
// import { FaBookOpen } from "react-icons/fa";
// import { FaDog } from "react-icons/fa6";
// import { FaCat } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import NotifyComponent from "../NotifyComponent/NotifyComponent";
// import myAvatarFalse from "../../assets/images/avatar-false.jpg";
// import {getAllNotification } from "../../services/Notification.service"
// import BottomMenuComponent from '../BottomMenuComponent/BottomMenuComponent'

// const HeaderComponent = () => {
//   const [span, setSpan] = useState(21);
//   const [offset, setOffset] = useState(2);
//   const navigate = useNavigate();
//   const [avatar, setAvatar] = useState(myAvatarFalse);
//   const [userName, setUserName] = useState("Người dùng");

//   // Lấy thông tin từ Redux
//   const { isAuthenticated, user_name, user_avt_img, _id} = useSelector(
//     (state) => state.user
//   );

//   // Xử lý avatar và tên người dùng
//   useEffect(() => {
//     if (isAuthenticated) {
//       setUserName(user_name || "Người dùng");
//       if (user_avt_img) {
//         // Xử lý hiển thị avatar từ API (base64) hoặc mặc định
//         const avatarSrc = `data:image/jpeg;base64,${user_avt_img}`;
//         setAvatar(avatarSrc);
//       } else {
//         setAvatar(myAvatarFalse);
//       }
//     } else {
//       // Người dùng chưa đăng nhập
//       setAvatar(myAvatarFalse);
//       setUserName("Người dùng");
//     }
//   }, [isAuthenticated, user_name, user_avt_img]);
//   const handleResize = () => {
//     const width = window.innerWidth;
//     if (width >= 740 && width <= 1023) {
//       setSpan(23);
//       setOffset(1);
//     } else {
//       setSpan(21);
//       setOffset(2);
//     }
//   };
//   const [notifications, setNotifications] = useState([]);

//  // Lấy thông báo khi hover vào "Thông báo"
//  const accessToken = localStorage.getItem("accessToken");
//  const handleGetAllNotification = async (_id, accessToken) => {
//   try {
//     const res = await getAllNotification(_id, accessToken);
//     setNotifications(res.data || [])
//     console.log("Fetched all notification", notifications);
//   } catch (error) {
//     console.error("Error in handleGetDetailsUser:", error);
//   }
// };

// // Sự kiện hover vào "Thông báo"
// const handleMouseEnter = () => {
//   if (_id && accessToken) {
//     handleGetAllNotification(_id, accessToken);
//   }
// };

//   // useEffect(() => {
//   //   if (_id && accessToken) {
//   //     handleGetAllNotification(_id, accessToken);
//   //   }
//   // }, [_id, accessToken]);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Gọi ngay lần đầu
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [isInMobile, setIsInMobile] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 739px)");
//     const handleViewportChange = () => setIsInMobile(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener("change", handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleViewportChange);
//     };
//   }, []);

//   const [isInViewport, setIsInViewPort] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width: 740px) and (max-width: 1023px)");
//     const handleViewportChange = () => setIsInViewPort(mediaQuery.matches);

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

//   return (
//     <div className={styles.header}>
//       <div className={clsx("grid wide", styles.main)}>
//         <div onClick={handleNavbar} className={styles.bar}>
//           <FaAlignJustify />
//         </div>
//         <div className={styles.logo}>
//           <Link to={"/"}>
//             <img src={whiteLogo} alt="" />
//           </Link>
//         </div>
//         <Row className={styles.userOptions}>
//           <Col span={16} offset={8}>
//             <ul>
//               <li className={styles.forNotify}>
//                 <Link to={"/"} onMouseEnter={handleMouseEnter}>
//                   <GrNotification />
//                   <span>Thông báo</span>
//                 </Link>

//                 <NotifyComponent
//                   notifications={notifications}
//                   className={styles.moreNotify}
//                 />
//               </li>
//               <li>
//                 <Link to={"/"}>
//                   <TbHelpSquare />
//                   <span>FAQ</span>
//                 </Link>
//               </li>
//               {isAuthenticated ? (
//                 <li className={styles.userInfo}>
//                   <Link to={"/my-order"}>
//                     <img
//                       src={avatar}
//                       alt="User Avatar"
//                       className={styles.avatar}
//                     />
//                     <span>{userName}</span>
//                   </Link>
//                 </li>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/sign-in">
//                       <span>Đăng nhập</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/sign-up">
//                       <span>Đăng ký</span>
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </Col>
//         </Row>
//         <Row className={styles.search}>
//           <Col span={13} offset={5}>
//             <Input
//               placeholder="Tìm kiếm sản phẩm..."
//               suffix={
//                 <Button
//                   className={styles.searchButton}
//                   icon={<SearchOutlined className={styles.icon} />}
//                 />
//               }
//             />
//           </Col>
//           <Col className={styles.cart} span={6}>
//             <ul>
//               <li>
//                 <Link>
//                   <FaRegHeart />
//                   <span>Yêu thích</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to={`/my-cart/${_id}`}>
//                   <PiShoppingCartBold />
//                   <span>Giỏ hàng</span>
//                 </Link>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//         <div className={styles.userAndCart}>
//           <div onClick={() => navigate("/my-cart")} className={styles.cCart}>
//             <FaShoppingCart />
//           </div>
//           <div onClick={() => navigate("/sign-up")} className={styles.cUser}>
//             <FaUser />
//           </div>
//         </div>
//         <Row>
//           <Col className={styles.nav} span={span} offset={offset} style={isAuthenticated ? {marginTop: "0"} : {marginTop: "10px"}}>
//             <ul>
//               <li>
//                 <Link to={"/"}>Trang chủ</Link>
//               </li>
//               <li className={styles.forDog}>
//                 <Link>
//                   Sản phẩm cho chó
//                   <FaChevronDown className={styles.icon} />
//                 </Link>
//                 <MoreComponent className={styles.moreDog} />
//               </li>
//               <li className={styles.forCat}>
//                 <Link>
//                   Sản phẩm cho mèo
//                   <FaChevronDown className={styles.icon} />
//                 </Link>
//                 <MoreComponent className={styles.moreCat} />
//               </li>
//               <li>
//                 <Link to={"/about"}>Về chúng tôi</Link>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//         {showNavbar && (isInViewport || isInMobile) && (
//           <div>
//             <div onClick={handleNavbar} className={styles.overlay}></div>
//             <div className={styles.navbar}>
//               <ul onClick={handleNavbar}>
//                 <li>
//                   <Link to={"/"}>
//                     <div className={styles.iconNav}>
//                       <FaHome className={styles.iconForNav} />
//                       Trang chủ
//                     </div>
//                   </Link>
//                 </li>
//                 <li className={styles.forDog}>
//                   <Link>
//                     <div className={styles.iconNav}>
//                       <FaDog className={styles.iconForNav} />
//                       Sản phẩm cho chó
//                     </div>
//                     <MdNavigateNext className={styles.icon} />
//                   </Link>
//                   <MoreComponent className={styles.moreDog} />
//                 </li>
//                 <li className={styles.forCat}>
//                   <Link>
//                     <div className={styles.iconNav}>
//                       <FaCat className={styles.iconForNav} />
//                       Sản phẩm cho mèo
//                     </div>
//                     <MdNavigateNext className={styles.icon} />
//                   </Link>
//                   <MoreComponent className={styles.moreCat} />
//                 </li>
//                 <li>
//                   <Link to={"/about"}>
//                     <div className={styles.iconNav}>
//                       <FaBookOpen className={styles.iconForNav} />
//                       Về chúng tôi
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link>
//                     <div className={styles.iconNav}>
//                       <FaHeart className={styles.iconForNav} />
//                       Sản phẩm yêu thích
//                     </div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//       {(isInViewport || isInMobile) && <BottomMenuComponent />}
//     </div>
//   );
// };

// export default HeaderComponent;

import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Col, Input, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import styles from "./HeaderComponent.module.scss";
import "./HeaderComponent.scss";
import { GrNotification } from "react-icons/gr";
import whiteLogo from "../../assets/images/whiteLogo.svg";
import { FaChevronDown, FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { SearchOutlined } from "@ant-design/icons";
import MoreComponent from "../MoreComponent/MoreComponent";
import { TbHelpSquare } from "react-icons/tb";
import { FaAlignJustify } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { useSelector } from "react-redux";
import NotifyComponent from "../NotifyComponent/NotifyComponent";
import myAvatarFalse from "../../assets/images/avatar-false.jpg";
import { getAllNotification } from "../../services/Notification.service";
import BottomMenuComponent from "../BottomMenuComponent/BottomMenuComponent";

const HeaderComponent = () => {
  const [span, setSpan] = useState(21);
  const [offset, setOffset] = useState(2);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(myAvatarFalse);
  const [userName, setUserName] = useState("Người dùng");
  const [suggestions, setSuggestions] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isInMobile, setIsInMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Lấy thông tin từ Redux
  const { isAuthenticated, user_name, user_avt_img, _id } = useSelector(
    (state) => state.user
  );

  console.log('username', user_name)
  // Xử lý avatar và tên người dùng
  useEffect(() => {
    if (isAuthenticated) {
      setUserName(user_name || "Người dùng");
      if (user_avt_img) {
        // Xử lý hiển thị avatar từ API (base64) hoặc mặc định
        const avatarSrc = `data:image/jpeg;base64,${user_avt_img}`;
        setAvatar(avatarSrc);
      } else {
        setAvatar(myAvatarFalse);
      }
    } else {
      // Người dùng chưa đăng nhập
      setAvatar(myAvatarFalse);
      setUserName("Người dùng");
    }
  }, [isAuthenticated, user_name, user_avt_img]);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 740 && width <= 1023) {
      setSpan(23);
      setOffset(1);
    } else {
      setSpan(21);
      setOffset(2);
    }
  };

  // Lấy thông báo khi hover vào "Thông báo"
  const accessToken = localStorage.getItem("accessToken");
  const handleGetAllNotification = async (_id, accessToken) => {
    try {
      const res = await getAllNotification(_id, accessToken);
      setNotifications(res.data || []);
      console.log("Fetched all notification", notifications);
    } catch (error) {
      console.error("Error in handleGetDetailsUser:", error);
    }
  };

  // Sự kiện hover vào "Thông báo"
  const handleMouseEnter = () => {
    if (_id && accessToken) {
      handleGetAllNotification(_id, accessToken);
    }
  };

  // useEffect(() => {
  //   if (_id && accessToken) {
  //     handleGetAllNotification(_id, accessToken);
  //   }
  // }, [_id, accessToken]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi ngay lần đầu
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 739px)");
    const handleViewportChange = () => setIsInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  const [isInViewport, setIsInViewPort] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 740px) and (max-width: 1023px)"
    );
    const handleViewportChange = () => setIsInViewPort(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
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

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  // Cập nhật lịch sử tìm kiếm vào localStorage khi có thay đổi
  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  // Hiển thị lịch sử khi người dùng bấm vào ô tìm kiếm
  const handleFocus = () => {
    setShowHistory(true); // Mở lịch sử tìm kiếm khi người dùng bấm vào ô tìm kiếm
  };

  const handleBlur = () => {
    // Tự động ẩn lịch sử khi người dùng rời khỏi ô tìm kiếm (chỉ ẩn nếu không còn nhập liệu)
    if (!searchQuery.trim()) {
      setShowHistory(false);
    }
  };

  // Hàm xử lý tìm kiếm khi nhấn Enter hoặc nút tìm kiếm
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const updatedHistory = [searchQuery, ...searchHistory].slice(0, 5); // Giới hạn tối đa 5 từ khóa
      setSearchHistory(updatedHistory);
      // Kiểm tra xem người dùng đã nhập gì chưa
      navigate(`/get-all-product?search=${searchQuery}`); // Chuyển hướng tới trang tìm kiếm với query params
    }
  };

  // Hàm xử lý thay đổi giá trị của ô nhập liệu
  const handleSearchChange = (value) => {
    setSearchQuery(value); // Cập nhật giá trị tìm kiếm
    if (value.trim()) {
      fetchSuggestions(value); // Gọi API hoặc tìm kiếm dữ liệu gợi ý khi có giá trị nhập vào
    } else {
      setSuggestions([]); // Nếu không có giá trị nhập vào thì xóa gợi ý
    }
  };

  // Hàm để lấy danh sách gợi ý (có thể thay bằng API thật)
  const fetchSuggestions = (query) => {
    // Ví dụ: Mảng giả lập các sản phẩm
    const allProducts = [
      "Mèo",
      "Chó",
      "Thức ăn cho mèo",
      "Thức ăn cho chó",
      "Phụ kiện cho chó",
      "Phụ kiện cho mèo",
      "Vật dụng",
      "Sản phẩm cho chó",
      "Sản phẩm cho mèo",
      "Vòng cổ",
      "pate hương đào",
      "pate",
      "pate hương cam",
      "hạt",
      "áo quần",
      "chậu cát",
      "áo dài",
      "đồ chơi",
      "cầu mây",
      "bánh",
    ];

    // Lọc các sản phẩm có chứa từ khóa tìm kiếm
    const filteredSuggestions = allProducts.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    // Cập nhật danh sách gợi ý
    setSuggestions(filteredSuggestions);
  };

  // Xác định in gợi ý hay lịch sử
  const combinedSuggestions = searchQuery.trim() === "" ? searchHistory : suggestions;

  return (
    <div className={styles.header}>
      <div className={clsx("grid wide", styles.main)}>
        <div onClick={handleNavbar} className={styles.bar}>
          <FaAlignJustify />
        </div>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={whiteLogo} alt="" />
          </Link>
        </div>
        <Row className={styles.userOptions}>
          <Col span={16} offset={8}>
            <ul>
              <li className={styles.forNotify}>
                <Link to={"/"} onMouseEnter={handleMouseEnter}>
                  <GrNotification />
                  <span>Thông báo</span>
                </Link>

                <NotifyComponent
                  notifications={notifications}
                  className={styles.moreNotify}
                />
              </li>
              <li>
                <Link to={"/fqa"}>
                  <TbHelpSquare />
                  <span>FAQ</span>
                </Link>
              </li>
              {isAuthenticated ? (
                <li className={styles.userInfo}>
                  <Link to={"/my-order"}>
                    <img
                      src={avatar}
                      alt="User Avatar"
                      className={styles.avatar}
                    />
                    <span>{userName}</span>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/sign-in">
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up">
                      <span>Đăng ký</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </Col>
        </Row>
        <Row className={styles.search}>
          <Col span={13} offset={5}>
            <AutoComplete
              value={searchQuery}
              onChange={handleSearchChange} // Cập nhật giá trị tìm kiếm khi người dùng nhập
              onSelect={(value) => setSearchQuery(value)} // Chọn một gợi ý, cập nhật giá trị tìm kiếm
              options={combinedSuggestions.map((suggestion) => ({
                value: suggestion, // Cung cấp giá trị cho từng gợi ý hoặc lịch sử
              }))}
              style={{ width: "100%", maxWidth: 600 }}
            >
              <Input
                placeholder="Tìm kiếm sản phẩm..."
                onPressEnter={handleSearch} // Xử lý khi nhấn Enter
                onFocus={handleFocus}
                onBlur={handleBlur}
                suffix={
                  <Button
                    className={styles.searchButton}
                    icon={<SearchOutlined className={styles.icon} />}
                    onClick={handleSearch} // Xử lý khi nhấn nút tìm kiếm
                  />
                }
              />
            </AutoComplete>
          </Col>
          <Col className={styles.cart} span={6}>
            <ul>
              <li>
                <Link>
                  <FaRegHeart />
                  <span>Yêu thích</span>
                </Link>
              </li>
              <li>
                <Link to={`/my-cart/${_id}`}>
                  <PiShoppingCartBold />
                  <span>Giỏ hàng</span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className={styles.userAndCart}>
          <div onClick={() => navigate("/my-cart")} className={styles.cCart}>
            <FaShoppingCart />
          </div>
          <div onClick={() => navigate("/sign-up")} className={styles.cUser}>
            <FaUser />
          </div>
        </div>
        <Row>
          <Col
            className={styles.nav}
            span={span}
            offset={offset}
            style={isAuthenticated ? { marginTop: "0" } : { marginTop: "10px" }}
          >
            <ul>
              <li>
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className={styles.forDog}>
                <Link to={"/get-all-product?category_level_1=Chó"}>
                  Sản phẩm cho chó
                  <FaChevronDown className={styles.icon} />
                </Link>
                <MoreComponent className={styles.moreDog} parent="Chó" />
              </li>
              <li className={styles.forCat}>
                <Link to={"/get-all-product?category_level_1=Mèo"}>
                  Sản phẩm cho mèo
                  <FaChevronDown className={styles.icon} />
                </Link>
                <MoreComponent className={styles.moreCat} parent="Mèo" />
              </li>
              <li>
                <Link to={"/about"}>Về chúng tôi</Link>
              </li>
            </ul>
          </Col>
        </Row>
        {showNavbar && (isInViewport || isInMobile) && (
          <div>
            <div onClick={handleNavbar} className={styles.overlay}></div>
            <div className={styles.navbar}>
              <ul onClick={handleNavbar}>
                <li>
                  <Link to={"/"}>
                    <div className={styles.iconNav}>
                      <FaHome className={styles.iconForNav} />
                      Trang chủ
                    </div>
                  </Link>
                </li>
                <li className={styles.forDog}>
                  <Link to={"/get-all-product?category_level_1=Chó"}>
                    <div className={styles.iconNav}>
                      <FaDog className={styles.iconForNav} />
                      Sản phẩm cho chó
                    </div>
                    <MdNavigateNext className={styles.icon} />
                  </Link>
                  <MoreComponent className={styles.moreDog} parent="Chó" />
                </li>
                <li className={styles.forCat}>
                  <Link to={"/get-all-product?category_level_1=Mèo"}>
                    <div className={styles.iconNav}>
                      <FaCat className={styles.iconForNav} />
                      Sản phẩm cho mèo
                    </div>
                    <MdNavigateNext className={styles.icon} />
                  </Link>
                  <MoreComponent className={styles.moreCat} parent="Mèo" />
                </li>
                <li>
                  <Link to={"/about"}>
                    <div className={styles.iconNav}>
                      <FaBookOpen className={styles.iconForNav} />
                      Về chúng tôi
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className={styles.iconNav}>
                      <FaHeart className={styles.iconForNav} />
                      Sản phẩm yêu thích
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {(isInViewport || isInMobile) && <BottomMenuComponent />}
    </div>
  );
};

export default HeaderComponent;
