import React, { useState, useEffect } from "react";
import { Input, Button, Typography, List, Form, Modal, Select } from "antd";
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";
import { EditOutlined, DeleteOutlined, SettingOutlined, PlusOutlined } from "@ant-design/icons";
import "./ChangeAddress.css";
import { apiGetProvinces, apiGetDistricts, apiGetWards } from "./getAddress.js";

const { Text } = Typography;

const ChangeAddress = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Thanh Huyền",
      phone: "+84 123 334 456",
      address: "16 Linh Chiểu, Phường Cù Bị, huyện Châu Đức, tỉnh Bà Rịa - Vũng Tàu",
      isDefault: true,
    },
    {
      id: 2,
      name: "Thanh Tuyền",
      phone: "+84 123 334 456",
      address: "16 Linh Chiểu, Phường Cù Bị, huyện Châu Đức, tỉnh Bà Rịa - Vũng Tàu",
      isDefault: false,
    },
  ]);

  const [editingAddress, setEditingAddress] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch danh sách tỉnh/thành phố khi component được mount
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await apiGetProvinces();
        setProvinces(response.results || []);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
      }
    };
    fetchProvinces();
  }, []);

  const handleSetDefault = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
    alert("Đã thiết lập địa chỉ mặc định");
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    alert("Đã xóa địa chỉ thành công");
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setIsModalVisible(true);
  };

  const handleAddNew = () => {
    setEditingAddress(null);
    setIsModalVisible(true);
  };

  const handleSave = (values) => {
    const { province, district, ward, ...rest } = values;

    const provinceName = provinces.find((p) => p.province_id === province)?.province_name || "";
    const districtName = districts.find((d) => d.district_id === district)?.district_name || "";
    const wardName = wards.find((w) => w.ward_id === ward)?.ward_name || "";

    const fullAddress = `${wardName}, ${districtName}, ${provinceName}`;

    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id
            ? { ...addr, ...rest, address: fullAddress }
            : addr
        )
      );
      alert("Đã cập nhật địa chỉ thành công");
    } else {
      setAddresses((prev) => [
        ...prev,
        { id: Date.now(), ...rest, address: fullAddress, isDefault: false },
      ]);
      alert("Đã thêm địa chỉ mới thành công");
    }
    setIsModalVisible(false);
  };

  const handleProvinceChange = async (provinceId) => {
    try {
      const response = await apiGetDistricts(provinceId);
      setDistricts(response.results || []);
      setWards([]); 
    } catch (error) {
      console.error("Lỗi khi lấy danh sách quận/huyện:", error);
    }
  };

  const handleDistrictChange = async (districtId) => {
    try {
      const response = await apiGetWards(districtId);
      setWards(response.results || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách phường/xã:", error);
    }
  };

  return (
    <div className="grid wide">
      <div className="container" style={{ margin: "0 auto", padding: "20px" }}>
        <div className="profile-container">
          <ProfileUser
            full_name="Nguyễn Lê Thanh Huyền"
            src_img={myAvatar}
            name="yurri_2506"
          />
          <div className="content">
            <span className="header">Địa chỉ của tôi</span>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddNew}
              style={{ position: "relative", left: "450px", color: "white", backgroundColor: "#E87428" }}
            >
              Thêm địa chỉ mới
            </Button>
            <List
              itemLayout="vertical"
              dataSource={addresses}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      icon={<EditOutlined />}
                      onClick={() => handleEdit(item)}
                      key="edit"
                    >
                      Cập nhật
                    </Button>,
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => handleDelete(item.id)}
                      key="delete"
                    >
                      Xóa
                    </Button>,
                    !item.isDefault && (
                      <Button
                        type="link"
                        icon={<SettingOutlined />}
                        onClick={() => handleSetDefault(item.id)}
                        key="setDefault"
                      >
                        Thiết lập mặc định
                      </Button>
                    ),
                  ]}
                  key={item.id}
                >
                  <List.Item.Meta
                    title={
                      <>
                        <Text strong>{item.name}</Text>{" "}
                        <Text type="secondary">({item.phone})</Text>
                      </>
                    }
                    description={item.address}
                  />
                  {item.isDefault && (
                    <Button
                      type="primary"
                      disabled
                      style={{ backgroundColor: "white", color: "#E87428" }}
                    >
                      Mặc định
                    </Button>
                  )}
                </List.Item>
              )}
            />
          </div>
        </div>
        <Modal
          title={editingAddress ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          centered
        >
          <AddressForm
            initialValues={editingAddress || {}}
            onSubmit={handleSave}
            provinces={provinces}
            districts={districts}
            wards={wards}
            onProvinceChange={handleProvinceChange}
            onDistrictChange={handleDistrictChange}
          />
        </Modal>
      </div>
    </div>
  );
};

const AddressForm = ({ initialValues, onSubmit, provinces, districts, wards, onProvinceChange, onDistrictChange }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={handleFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Họ và tên"
        rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại" },
          { pattern: /^[0-9+ ]+$/, message: "Số điện thoại không hợp lệ" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="province"
        label="Tỉnh/Thành phố"
        rules={[{ required: true, message: "Vui lòng chọn tỉnh/thành phố" }]}
      >
        <Select placeholder="Chọn tỉnh/thành phố" onChange={onProvinceChange}>
          {provinces.map((province) => (
            <Select.Option key={province.province_id} value={province.province_id}>
              {province.province_name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="district"
        label="Quận/Huyện"
        rules={[{ required: true, message: "Vui lòng chọn quận/huyện" }]}
      >
        <Select placeholder="Chọn quận/huyện" onChange={onDistrictChange}>
          {districts.map((district) => (
            <Select.Option key={district.district_id} value={district.district_id}>
              {district.district_name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="ward"
        label="Phường/Xã"
        rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
      >
        <Select placeholder="Chọn phường/xã">
          {wards.map((ward) => (
            <Select.Option key={ward.ward_id} value={ward.ward_id}>
              {ward.ward_name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="street-detail"
        label="Số nhà, đường"
        rules={[{ required: true, message: "Vui lòng nhập số nhà, đường" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#E87428", color: "white"}}>
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangeAddress;
