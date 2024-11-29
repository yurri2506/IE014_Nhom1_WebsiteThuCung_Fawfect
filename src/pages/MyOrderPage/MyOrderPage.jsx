// import React, { useState } from "react";
// import { Tabs, Input, Card, Button, Typography, Row, Col } from "antd";
// import myAvatar from "../../assets/images/avatar.jpg";
// import "./styles.scss";
// import ProfileUser from  "./ProfileUser.jsx";
// import OrderCart from  "./OrderCart.jsx";

// const { TabPane } = Tabs;
// const { Text } = Typography;

// const MyOrderPage = () => {
//   const menuTab = {
//     1: "Tất cả",
//     2: "Chờ xác nhận",
//     3: "Đang vận chuyển",
//     4: "Hoàn thành",
//     5: "Đã hủy",
//     6: "Trả hàng/Hoàn tiền",
//   };

//   const [activeTab, setActiveTab] = useState("1");

//   const handleTabChange = (key) => {
//     setActiveTab(key);
//   };

//   const orders = [
//     {
//       id: 1,
//       order_status: "Hoàn thành",
//       products: [
//         {
//           id: 101,
//           src_img: myAvatar,
//           product_title: "Thức ăn dạng hạt cho chó",
//           product_description: "Phân loại hàng: Thức ăn",
//           number: "1",
//           price_old: "400.000",
//           price_new: "320.000",
//         },
//         {
//           id: 102,
//           src_img: myAvatar,
//           product_title: "Sữa tắm cho chó",
//           product_description: "Phân loại hàng: Sữa tắm",
//           number: "2",
//           price_old: "150.000",
//           price_new: "120.000",
//         },
//       ],
//     },
//     {
//       id: 2,
//       order_status: "Đang vận chuyển",
//       products: [
//         {
//           id: 201,
//           src_img: myAvatar,
//           product_title: "Dầu xả cho chó",
//           product_description: "Phân loại hàng: Dầu xả",
//           number: "1",
//           price_old: "200.000",
//           price_new: "180.000",
//         },
//       ],
//     },
//   ];

//   return (
//     // <div className={styles}>

//     // </div>
//     <div className="grid wide">
//       <Row gutter={16}>
//         <ProfileUser
//           full_name="Nguyễn Lê Thanh Huyền"
//           src_img={myAvatar}
//           name="yurri_2506"
//         />

//         {/* Main Content */}
//         <Col span={18}>
//           {/* Tabs */}
//           <Tabs defaultActiveKey="1" tabBarGutter={40} size="large" onChange={handleTabChange}>
//             {Object.entries(menuTab).map(([key, label]) => (
//               <TabPane tab={label} key={key} />
//             ))}
//           </Tabs>

//           {/* Search Bar */}
//           <Input.Search
//             placeholder="Tìm kiếm theo tên Shop, ID đơn hàng hoặc tên sản phẩm"
//             style={{ marginTop: "0px", marginBottom: "20px" }}
//           />

//           {orders
//             .filter((order) => {
//               if (activeTab === "1") return true; // Tất cả đơn hàng
//               if (activeTab === "2") return order.order_status === "Chờ xác nhận";
//               if (activeTab === "3") return order.order_status === "Đang vận chuyển";
//               if (activeTab === "4") return order.order_status === "Hoàn thành";
//               if (activeTab === "5") return order.order_status === "Đã hủy";
//               if (activeTab === "6") return order.order_status === "Trả hàng/Hoàn tiền";
//               return false;
//             })
//             .map((order) => (
//               <Card className="order-card" key={order.id}>
//                 <Row className="order-status">
//                   <Col span={24} className="status-product">
//                     <Text style={{ color: "orange", fontSize: "20px" }}>{order.order_status}</Text>
//                   </Col>
//                 </Row>

//                 {order.products.map((product) => (
//                   <OrderCart key={product.id} {...product} />
//                 ))}
                
//                 <hr style={{ margin: "20px 0" }} />
                
//                 <Row justify="end" className="title-order">
//                   <Col span={21} className="title-price-card">
//                     <p className="title-price">Thành tiền:</p>
//                   </Col>
//                   <Col span={3} className="title-price-card">
//                     <p className="price">
//                       {order.products.reduce(
//                         (total, product) =>
//                           total + parseInt(product.price_new.replace(".", "")) * parseInt(product.number),
//                         0
//                       ).toLocaleString()}đ
//                     </p>
//                   </Col>

//                   <Col span={10} className="button-order-card">
//                     {order.order_status === "Hoàn thành" && (
//                       <>
//                         <Button
//                           type="primary"
//                           style={{ backgroundColor: "orange", color: "black" }}
//                         >
//                           Đánh giá
//                         </Button>
//                         <Button>Mua lại</Button>
//                       </>
//                     )}
//                     {(order.order_status === "Đã hủy" ||
//                       order.order_status === "Trả hàng/Hoàn tiền") && <Button>Mua lại</Button>}
//                     {order.order_status === "Chờ xác nhận" && (
//                       <Button type="primary" danger>
//                         Hủy
//                       </Button>
//                     )}
//                   </Col>
//                 </Row>
//               </Card>
//             ))}
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default MyOrderPage;


import React, { useEffect, useState } from "react";
import { Tabs, Input, Card, Button, Typography, Row, Col } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./MyOrderPage.scss";
import styles from './MyOrderPage.module.scss'
import myAvatar from "../../assets/images/avatar.jpg";
import ProfileUser from "./ProfileUser.jsx";
import OrderCart from "./OrderCart.jsx";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent.jsx";

const { TabPane } = Tabs;
const { Text } = Typography;

const MyOrderPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "1";

  const menuTab = {
    1: "Tất cả",
    2: "Chờ xác nhận",
    3: "Đang vận chuyển",
    4: "Hoàn thành",
    5: "Đã hủy",
    6: "Trả hàng/Hoàn tiền",
  };

  const handleTabChange = (key) => {
    navigate(`/my-order?tab=${key}`);
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

  const [isInMobile, setisInMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  const orders = [
    {
      id: 1,
      order_status: "Hoàn thành",
      products: [
        {
          id: 101,
          src_img: myAvatar,
          product_title: "Thức ăn dạng hạt cho chó",
          product_description: "Phân loại hàng: Thức ăn",
          number: "1",
          price_old: "400.000",
          price_new: "320.000",
        },
        {
          id: 102,
          src_img: myAvatar,
          product_title: "Sữa tắm cho chó",
          product_description: "Phân loại hàng: Sữa tắm",
          number: "2",
          price_old: "150.000",
          price_new: "120.000",
        },
      ],
    },
    {
      id: 2,
      order_status: "Đang vận chuyển",
      products: [
        {
          id: 201,
          src_img: myAvatar,
          product_title: "Dầu xả cho chó",
          product_description: "Phân loại hàng: Dầu xả",
          number: "1",
          price_old: "200.000",
          price_new: "180.000",
        },
      ],
    },
    {
      id: 2,
      order_status: "Đã hủy",
      products: [
        {
          id: 201,
          src_img: myAvatar,
          product_title: "Dầu xả cho chó",
          product_description: "Phân loại hàng: Dầu xả",
          number: "1",
          price_old: "200.000",
          price_new: "180.000",
        },
      ],
    },
    {
      id: 2,
      order_status: "Trả hàng/Hoàn tiền",
      products: [
        {
          id: 201,
          src_img: myAvatar,
          product_title: "Dầu xả cho chó",
          product_description: "Phân loại hàng: Dầu xả",
          number: "1",
          price_old: "200.000",
          price_new: "180.000",
        },
      ],
    },
    {
      id: 2,
      order_status: "Đã hủy",
      products: [
        {
          id: 201,
          src_img: myAvatar,
          product_title: "Dầu xả cho chó",
          product_description: "Phân loại hàng: Dầu xả",
          number: "1",
          price_old: "200.000",
          price_new: "180.000",
        },
      ],
    },
  ];

  return (
    <div style={{padding: "20px 0"}} className={styles.main}>
      <div className="grid wide">
        <Row gutter={24}>
          <ProfileUser
            full_name="Nguyễn Lê Thanh Huyền"
            src_img={myAvatar}
            name="yurri_2506"
            isInViewport={isInViewport}
            isInMobile={isInMobile}
          />

          {/* Main Content */}
          <Col span={isInViewport || isInMobile ? 24 : 18} className={styles.tabs}>
            {/* Tabs */}
            <Tabs
              activeKey={currentTab}
              tabBarGutter={40}
              size="large"
              onChange={handleTabChange}
            >
              {Object.entries(menuTab).map(([key, label]) => (
                <TabPane tab={label} key={key} />
              ))}
            </Tabs>

            {/* Search Bar */}
            <Input.Search
              placeholder="Tìm kiếm theo tên Shop, ID đơn hàng hoặc tên sản phẩm"
              style={{ marginTop: "0px", marginBottom: "20px" }}
            />

            {orders
              .filter((order) => {
                if (currentTab === "1") return true; // Tất cả đơn hàng
                if (currentTab === "2") return order.order_status === "Chờ xác nhận";
                if (currentTab === "3") return order.order_status === "Đang vận chuyển";
                if (currentTab === "4") return order.order_status === "Hoàn thành";
                if (currentTab === "5") return order.order_status === "Đã hủy";
                if (currentTab === "6") return order.order_status === "Trả hàng/Hoàn tiền";
                return false;
              })
              .map((order) => (
                <Card className={styles.card} key={order.id}>
                  <Row className={styles.orderStatus}>
                    <Col span={24}>
                      <Text>
                        {order.order_status}
                      </Text>
                    </Col>
                  </Row>

                  {order.products.map((product) => (
                    <OrderCart key={product.id} {...product} />
                  ))}

                  <Row className={styles.total}>
                    <Col span={21}>
                      <p>Thành tiền:</p>
                    </Col>
                    <Col span={3}>
                      <p className={styles.price}>
                        {order.products
                          .reduce(
                            (total, product) =>
                              total +
                              parseInt(product.price_new.replace(".", "")) *
                                parseInt(product.number),
                            0
                          )
                          .toLocaleString()}
                        đ
                      </p>
                    </Col>

                    <Col span={24} className={styles.allBtn}>
                      {order.order_status === "Hoàn thành" && (
                        <div className={styles.btnDetails}>
                          <ButtonComponent 
                            title="Đánh giá"
                            primary
                            className={styles.btnPrimary}
                            widthDiv="none"
                            showIcon={false}
                          />
                          <ButtonComponent 
                            title="Mua lại"
                            className={styles.btn}
                            widthDiv="none"
                            showIcon={false}
                          />
                        </div>
                      )}
                      {(order.order_status === "Đã hủy" ||
                        order.order_status === "Trả hàng/Hoàn tiền") && (
                          <ButtonComponent 
                            title="Mua lại"
                            primary
                            className={styles.btnPrimary}
                            widthDiv="none"
                            showIcon={false}
                          />
                      )}
                      {order.order_status === "Chờ xác nhận" && (
                        <ButtonComponent 
                          title="Hủy"
                          primary
                          className={styles.btnPrimary}  
                          widthDiv="none"
                          showIcon={false}
                        />
                      )}
                    </Col>
                  </Row>
                </Card>
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MyOrderPage;
