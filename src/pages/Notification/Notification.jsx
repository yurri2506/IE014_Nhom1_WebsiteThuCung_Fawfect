import React, { useState } from "react";
import { Button, Card, Col, Row, Checkbox, Breadcrumb } from "antd";
import "./Notification.css";
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      img: "https://chiaki.vn/upload/news/content/2021/05/thuc-an-cho-cho-con-pedigree-jpg-1620290242-06052021153722.jpg",
      title: "KIỆN HÀNG ĐANG TRÊN ĐƯỜNG VẬN CHUYỂN",
      content: "🎉 Kiện hàng đã chuyển thành công cho đơn vị vận chuyển. Shipper sẽ sớm liên hệ bạn! 🎊 Chiếc deal khuyến mãi sock với muôn vàn ưu đãi từ sản phẩm dinh dưỡng, đồ chơi, đồ dùng sinh hoạt,... đa dạng mẫu mã! 🛒 Nhanh tay chốt đơn",
      read: false,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/21/b3/e6/21b3e6294c5c83008fdbb4cc7e0a17ac.jpg",
      title: "NGÀY HỘI THÚ CƯNG - ĐẾN LÀ CÓ QUÀ",
      content: "📢 Với vô số giảm giá, quay số nhận quà hót hòn họn. Còn chần chờ gì không tham gia ngay! ✨ Diễn ra xuyên suốt từ các ngày 08 đến 10 tháng 7 này. 🎊 Chiếc deal khuyến mãi sock với muôn vàn ưu đãi từ sản phẩm dinh dưỡng, đồ chơi, đồ dùng sinh hoạt,... đa dạng mẫu mã! 🛒 Nhanh tay chốt đơn",
      read: false,
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-psd/flyer-template-with-dog-food_23-2148514498.jpg?t=st=1733128635~exp=1733132235~hmac=d15d45185284f5f25c79fc528928648650a69be82945a4e80cbd97a08fd6ecd6&w=996",
      title: "KHUYẾN MÃI 1/6 - MUÔN VÀN ƯU ĐÃI CHO BOSS",
      content: "🎉 Chiếc deal khuyến mãi sốc với muôn vàn ưu đãi từ sản phẩm dinh dưỡng, đồ chơi, đồ dùng sinh hoạt,... đến đồ ăn mẫu mã! 🎊 Chiếc deal khuyến mãi sock với muôn vàn ưu đãi từ sản phẩm dinh dưỡng, đồ chơi, đồ dùng sinh hoạt,... đa dạng mẫu mã! 🛒 Nhanh tay chốt đơn",
      read: false,
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1197557915/vi/vec-to/mega-sale-deal-banner-m%E1%BA%ABu-m%E1%BA%ABu-thi%E1%BA%BFt-k%E1%BA%BF-%C6%B0u-%C4%91%C3%A3i-%C4%91%E1%BA%B7c-bi%E1%BB%87t-b%C3%A1n-l%E1%BB%9Bn-cu%E1%BB%91i-m%C3%B9a-bi%E1%BB%83u-ng%E1%BB%AF-%C6%B0u-%C4%91%C3%A3i-%C4%91%E1%BA%B7c.jpg?s=1024x1024&w=is&k=20&c=rdnQSwm8AI7CwQ5P0-VrMdYSbwWStfryM_uPlZpewwc=",
      title: "KHUYẾN MÃI 1/6 - MUÔN VÀN ƯU ĐÃI CHO BOSS",
      content: "🎊 Chiếc deal khuyến mãi sock với muôn vàn ưu đãi từ sản phẩm dinh dưỡng, đồ chơi, đồ dùng sinh hoạt,... đa dạng mẫu mã! 🛒 Nhanh tay chốt đơn! 📢 Với vô số giảm giá, quay số nhận quà hót hòn họn. Còn chần chờ gì không tham gia ngay! ✨ Diễn ra xuyên suốt từ các ngày 08 đến 10 tháng 7 này",
      read: false,
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Đánh dấu đã đọc
  const markAsRead = () => {
    const updatedNotifications = notifications.map((n) =>
      selectedIds.includes(n.id) ? { ...n, read: true } : n
    );
    setNotifications(updatedNotifications);
    setSelectedIds([]);
  };

  // Xóa thông báo
  const deleteNotifications = () => {
    const updatedNotifications = notifications.filter((n) => !selectedIds.includes(n.id));
    setNotifications(updatedNotifications);
    setSelectedIds([]);
  };

  // Xử lý chọn thông báo
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
    );
  };

  // Chọn tất cả
  const selectAll = (checked) => {
    setSelectedIds(checked ? notifications.map((n) => n.id) : []);
  };

  return (
    <div className='grid wide'>
    <div style={{ margin: "0 auto", padding: "20px" }} className='container'>
      <div className="notice-container">
        <ProfileUser
          full_name="Nguyễn Lê Thanh Huyền"
          src_img={myAvatar}
          name="yurri_2506"
        />

        {/* Breadcrumb
        <div className="content">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="#" className="text-orange">
                Trang chủ
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#" className="text-orange">
                Trang cá nhân
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Thông báo</Breadcrumb.Item>
          </Breadcrumb> */}

      {/* Header Actions */}
      <div className='content'>
      <div className="action-buttons">
        <Checkbox
          onChange={(e) => selectAll(e.target.checked)}
          checked={selectedIds.length === notifications.length && notifications.length > 0}
        >
          Chọn tất cả
        </Checkbox>
        <Button onClick={markAsRead} disabled={selectedIds.length === 0} type="primary" className="mark-button">
          Đánh dấu đã đọc
        </Button>
        <Button onClick={deleteNotifications} disabled={selectedIds.length === 0} danger>
          Xóa tất cả
        </Button>
      </div>

      {/* Notifications List */}
      <div className="notifications">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`notification-card ${notification.read ? "read" : ""}`}
          >
            <Row>
              <Col span={2}>
                <Checkbox
                  checked={selectedIds.includes(notification.id)}
                  onChange={() => handleSelect(notification.id)}
                />
              </Col>
              <Col span={4}>
                <img
                  src={notification.img}
                  alt="Notification"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              </Col>
              <Col span={18}>
                <h6 className="notification-title">{notification.title}</h6>
                <p className="notification-content">{notification.content}</p>
              </Col>
            </Row>
          </Card>
        ))}
        {notifications.length === 0 && <p>Không có thông báo nào.</p>}
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default NotificationPage;
