// import React, { useState, useEffect } from "react";
// import { Input, Button, Typography, List, Form, Modal, Select } from "antd";
// import ProfileUser from "../MyOrderPage/UserProfile.jsx";
// import myAvatar from "../../assets/images/avatar.jpg";
// import { EditOutlined, DeleteOutlined, SettingOutlined, PlusOutlined } from "@ant-design/icons";
// import "./ChangeAddress.css";
// import { apiGetProvinces, apiGetDistricts, apiGetWards } from "./getAddress.js";

// const { Text } = Typography;

// const ChangeAddress = () => {
//   const [provinces, setProvinces] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [wards, setWards] = useState([]);
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "Thanh Huyền",
//       phone: "+84 123 334 456",
//       address: "16 Linh Chiểu, Phường Cù Bị, huyện Châu Đức, tỉnh Bà Rịa - Vũng Tàu",
//       isDefault: true,
//     },
//     {
//       id: 2,
//       name: "Thanh Tuyền",
//       phone: "+84 123 334 456",
//       address: "16 Linh Chiểu, Phường Cù Bị, huyện Châu Đức, tỉnh Bà Rịa - Vũng Tàu",
//       isDefault: false,
//     },
//   ]);

//   const [editingAddress, setEditingAddress] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   // Fetch danh sách tỉnh/thành phố khi component được mount
//   useEffect(() => {
//     const fetchProvinces = async () => {
//       try {
//         const response = await apiGetProvinces();
//         setProvinces(response.results || []);
//       } catch (error) {
//         console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
//       }
//     };
//     fetchProvinces();
//   }, []);

//   const handleSetDefault = (id) => {
//     setAddresses((prev) =>
//       prev.map((addr) => ({
//         ...addr,
//         isDefault: addr.id === id,
//       }))
//     );
//     alert("Đã thiết lập địa chỉ mặc định");
//   };

//   const handleDelete = (id) => {
//     setAddresses((prev) => prev.filter((addr) => addr.id !== id));
//     alert("Đã xóa địa chỉ thành công");
//   };

//   const handleEdit = (address) => {
//     setEditingAddress(address);
//     setIsModalVisible(true);
//   };

//   const handleAddNew = () => {
//     setEditingAddress(null);
//     setIsModalVisible(true);
//   };

//   const handleSave = (values) => {
//     const { province, district, ward, ...rest } = values;

//     const provinceName = provinces.find((p) => p.province_id === province)?.province_name || "";
//     const districtName = districts.find((d) => d.district_id === district)?.district_name || "";
//     const wardName = wards.find((w) => w.ward_id === ward)?.ward_name || "";

//     const fullAddress = `${wardName}, ${districtName}, ${provinceName}`;

//     if (editingAddress) {
//       setAddresses((prev) =>
//         prev.map((addr) =>
//           addr.id === editingAddress.id
//             ? { ...addr, ...rest, address: fullAddress }
//             : addr
//         )
//       );
//       alert("Đã cập nhật địa chỉ thành công");
//     } else {
//       setAddresses((prev) => [
//         ...prev,
//         { id: Date.now(), ...rest, address: fullAddress, isDefault: false },
//       ]);
//       alert("Đã thêm địa chỉ mới thành công");
//     }
//     setIsModalVisible(false);
//   };

//   const handleProvinceChange = async (provinceId) => {
//     try {
//       const response = await apiGetDistricts(provinceId);
//       setDistricts(response.results || []);
//       setWards([]); 
//     } catch (error) {
//       console.error("Lỗi khi lấy danh sách quận/huyện:", error);
//     }
//   };

//   const handleDistrictChange = async (districtId) => {
//     try {
//       const response = await apiGetWards(districtId);
//       setWards(response.results || []);
//     } catch (error) {
//       console.error("Lỗi khi lấy danh sách phường/xã:", error);
//     }
//   };

//   return (
//     <div className="grid wide">
//       <div className="container" style={{ margin: "0 auto", padding: "20px" }}>
//         <div className="profile-container">
//           <ProfileUser
//             full_name="Nguyễn Lê Thanh Huyền"
//             src_img={myAvatar}
//             name="yurri_2506"
//           />
//           <div className="content">
//             <span className="header">Địa chỉ của tôi</span>
//             <Button
//               type="primary"
//               icon={<PlusOutlined />}
//               onClick={handleAddNew}
//               style={{ position: "relative", left: "450px", color: "white", backgroundColor: "#E87428" }}
//             >
//               Thêm địa chỉ mới
//             </Button>
//             <List
//               itemLayout="vertical"
//               dataSource={addresses}
//               renderItem={(item) => (
//                 <List.Item
//                   actions={[
//                     <Button
//                       type="link"
//                       icon={<EditOutlined />}
//                       onClick={() => handleEdit(item)}
//                       key="edit"
//                     >
//                       Cập nhật
//                     </Button>,
//                     <Button
//                       type="link"
//                       icon={<DeleteOutlined />}
//                       danger
//                       onClick={() => handleDelete(item.id)}
//                       key="delete"
//                     >
//                       Xóa
//                     </Button>,
//                     !item.isDefault && (
//                       <Button
//                         type="link"
//                         icon={<SettingOutlined />}
//                         onClick={() => handleSetDefault(item.id)}
//                         key="setDefault"
//                       >
//                         Thiết lập mặc định
//                       </Button>
//                     ),
//                   ]}
//                   key={item.id}
//                 >
//                   <List.Item.Meta
//                     title={
//                       <>
//                         <Text strong>{item.name}</Text>{" "}
//                         <Text type="secondary">({item.phone})</Text>
//                       </>
//                     }
//                     description={item.address}
//                   />
//                   {item.isDefault && (
//                     <Button
//                       type="primary"
//                       disabled
//                       style={{ backgroundColor: "white", color: "#E87428" }}
//                     >
//                       Mặc định
//                     </Button>
//                   )}
//                 </List.Item>
//               )}
//             />
//           </div>
//         </div>
//         <Modal
//           title={editingAddress ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
//           open={isModalVisible}
//           onCancel={() => setIsModalVisible(false)}
//           footer={null}
//           centered
//         >
//           <AddressForm
//             initialValues={editingAddress || {}}
//             onSubmit={handleSave}
//             provinces={provinces}
//             districts={districts}
//             wards={wards}
//             onProvinceChange={handleProvinceChange}
//             onDistrictChange={handleDistrictChange}
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// const AddressForm = ({ initialValues, onSubmit, provinces, districts, wards, onProvinceChange, onDistrictChange }) => {
//   const [form] = Form.useForm();

//   const handleFinish = (values) => {
//     onSubmit(values);
//     form.resetFields();
//   };

//   return (
//     <Form form={form} initialValues={initialValues} onFinish={handleFinish} layout="vertical">
//       <Form.Item
//         name="name"
//         label="Họ và tên"
//         rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="phone"
//         label="Số điện thoại"
//         rules={[
//           { required: true, message: "Vui lòng nhập số điện thoại" },
//           { pattern: /^[0-9+ ]+$/, message: "Số điện thoại không hợp lệ" },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="province"
//         label="Tỉnh/Thành phố"
//         rules={[{ required: true, message: "Vui lòng chọn tỉnh/thành phố" }]}
//       >
//         <Select placeholder="Chọn tỉnh/thành phố" onChange={onProvinceChange}>
//           {provinces.map((province) => (
//             <Select.Option key={province.province_id} value={province.province_id}>
//               {province.province_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="district"
//         label="Quận/Huyện"
//         rules={[{ required: true, message: "Vui lòng chọn quận/huyện" }]}
//       >
//         <Select placeholder="Chọn quận/huyện" onChange={onDistrictChange}>
//           {districts.map((district) => (
//             <Select.Option key={district.district_id} value={district.district_id}>
//               {district.district_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="ward"
//         label="Phường/Xã"
//         rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
//       >
//         <Select placeholder="Chọn phường/xã">
//           {wards.map((ward) => (
//             <Select.Option key={ward.ward_id} value={ward.ward_id}>
//               {ward.ward_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="street-detail"
//         label="Số nhà, đường"
//         rules={[{ required: true, message: "Vui lòng nhập số nhà, đường" }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit" style={{ backgroundColor: "#E87428", color: "white"}}>
//           Lưu
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default ChangeAddress;








//=========================================================================================================

// import React, { useState, useEffect } from "react";
// import { Input, Button, Typography, List, Form, Modal, Select } from "antd";
// import ProfileUser from "../MyOrderPage/UserProfile.jsx";
// import myAvatar from "../../assets/images/avatar.jpg";
// import { EditOutlined, DeleteOutlined, SettingOutlined, PlusOutlined } from "@ant-design/icons";
// import "./ChangeAddress.css";
// import { apiGetProvinces, apiGetDistricts, apiGetWards } from "./getAddress.js";
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUser } from '../../redux/slices/userSlice.js';

// const { Text } = Typography;

// const ChangeAddress = () => {
//   const [provinces, setProvinces] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [wards, setWards] = useState([]);
//   const [home_address, setHomeAddress] = useState([])
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const { _id, isAuthenticated, user_address } = useSelector((state) => state.user);
//   const access_token = localStorage.getItem("accessToken");
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [editingAddress, setEditingAddress] = useState(null);

//   // Fetch danh sách tỉnh/thành phố khi component được mount
//   useEffect(() => {
//     const fetchProvinces = async () => {
//       try {
//         const response = await apiGetProvinces();
//         setProvinces(response.results || []);
//       } catch (error) {
//         console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
//       }
//     };
//     fetchProvinces();
//   }, []);

//   const handleSetDefault = (id) => {
//     const updatedAddresses = user_address.map((addr) =>
//       addr._id === id ? { ...addr, isDefault: true } : { ...addr, isDefault: false }
//     );
//     dispatch(updateUser({ ...user_address, user_address: updatedAddresses }));
//     alert("Đã thiết lập địa chỉ mặc định");
//   };

//   const handleDelete = (id) => {
//     const updatedAddresses = user_address.filter((addr) => addr._id !== id);
//     dispatch(updateUser({ ...user_address, user_address: updatedAddresses }));
//     alert("Đã xóa địa chỉ thành công");
//   };

//   const handleEdit = (address) => {
//     setEditingAddress(address);
//     setIsModalVisible(true);
//   };

//   const handleAddNew = () => {
//     setEditingAddress(null);
//     setIsModalVisible(true);
//   };

//   const handleSave = (values) => {
//     const { province, district, ward, ...rest } = values;

//     const provinceName = provinces.find((p) => p.province_id === province)?.province_name || "";
//     const districtName = districts.find((d) => d.district_id === district)?.district_name || "";
//     const wardName = wards.find((w) => w.ward_id === ward)?.ward_name || "";

//     // const fullAddress = `${wardName}, ${districtName}, ${provinceName}`;

//     // let updatedAddresses;
//     // if (editingAddress) {
//     //   updatedAddresses = user_address.map((addr) =>
//     //     addr._id === editingAddress._id ? { ...addr, ...rest, home_address: fullAddress } : addr
//     //   );
//     //   alert("Đã cập nhật địa chỉ thành công");
//     // } else {
//     //   updatedAddresses = [
//     //     ...user_address,
//     //     { _id: Date.now().toString(), ...rest, home_address: fullAddress, isDefault: false },
//     //   ];
//     //   alert("Đã thêm địa chỉ mới thành công");
//     // }

//     dispatch(updateUser({ ...user_address, user_address: updatedAddresses }));
//     setIsModalVisible(false);
//   };

//   const handleProvinceChange = async (provinceId) => {
//     try {
//       const response = await apiGetDistricts(provinceId);
//       setDistricts(response.results || []);
//       setWards([]);
//     } catch (error) {
//       console.error("Lỗi khi lấy danh sách quận/huyện:", error);
//     }
//   };

//   const handleDistrictChange = async (districtId) => {
//     try {
//       const response = await apiGetWards(districtId);
//       setWards(response.results || []);
//     } catch (error) {
//       console.error("Lỗi khi lấy danh sách phường/xã:", error);
//     }
//   };

//   return (
//     <div className="grid wide">
//       <div className="container" style={{ margin: "0 auto", padding: "20px" }}>
//         <div className="profile-container">
//           <ProfileUser
//             full_name="Nguyễn Lê Thanh Huyền"
//             src_img={myAvatar}
//             name="yurri_2506"
//           />
//           <div className="content">
//             <span className="header">Địa chỉ của tôi</span>
//             <Button
//               type="primary"
//               icon={<PlusOutlined />}
//               onClick={handleAddNew}
//               style={{ position: "relative", left: "450px", color: "white", backgroundColor: "#E87428" }}
//             >
//               Thêm địa chỉ mới
//             </Button>
//             <List
//               itemLayout="vertical"
//               dataSource={user_address}
//               renderItem={(item) => (
//                 <List.Item
//                   actions={[
//                     <Button
//                       type="link"
//                       icon={<EditOutlined />}
//                       onClick={() => handleEdit(item)}
//                       key="edit"
//                     >
//                       Cập nhật
//                     </Button>,
//                     <Button
//                       type="link"
//                       icon={<DeleteOutlined />}
//                       danger
//                       onClick={() => handleDelete(item._id)}
//                       key="delete"
//                     >
//                       Xóa
//                     </Button>,
//                     !item.isDefault && (
//                       <Button
//                         type="link"
//                         icon={<SettingOutlined />}
//                         onClick={() => handleSetDefault(item._id)}
//                         key="setDefault"
//                       >
//                         Thiết lập mặc định
//                       </Button>
//                     ),
//                   ]}
//                   key={item._id}
//                 >
//                   <List.Item.Meta
//                     title={
//                       <>
//                         <Text strong>{item.name}</Text>{" "}
//                         <Text type="secondary">({item.phone})</Text>
//                       </>
//                     }
//                     description={
//                       <>
//                         <Text>{item.home_address}, {item.commune}, {item.district}, {item.province}</Text>
//                       </>
//                     }
//                   />
//                   {item.isDefault && (
//                     <Button
//                       type="primary"
//                       disabled
//                       style={{ backgroundColor: "white", color: "#E87428" }}
//                     >
//                       Mặc định
//                     </Button>
//                   )}
//                 </List.Item>
//               )}
//             />
//           </div>
//         </div>
//         <Modal
//           title={editingAddress ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
//           open={isModalVisible}
//           onCancel={() => setIsModalVisible(false)}
//           footer={null}
//           centered
//         >
//           <AddressForm
//             initialValues={editingAddress || {}}
//             onSubmit={handleSave}
//             provinces={provinces}
//             districts={districts}
//             wards={wards}
//             onProvinceChange={handleProvinceChange}
//             onDistrictChange={handleDistrictChange}
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// const AddressForm = ({ initialValues, onSubmit, provinces, districts, wards, onProvinceChange, onDistrictChange }) => {
//   const [form] = Form.useForm();

//   const handleFinish = (values) => {
//     onSubmit(values);
//     form.resetFields();
//   };

//   return (
//     <Form form={form} initialValues={initialValues} onFinish={handleFinish} layout="vertical">
//       <Form.Item
//         name="name"
//         label="Họ và tên"
//         rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="phone"
//         label="Số điện thoại"
//         rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="province"
//         label="Tỉnh/Thành phố"
//         rules={[{ required: true, message: "Vui lòng chọn tỉnh/thành phố" }]}>
//         <Select placeholder="Chọn tỉnh/thành phố" onChange={onProvinceChange}>
//           {provinces.map((province) => (
//             <Select.Option key={province.province_id} value={province.province_id}>
//               {province.province_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="district"
//         label="Quận/Huyện"
//         rules={[{ required: true, message: "Vui lòng chọn quận/huyện" }]}>
//         <Select placeholder="Chọn quận/huyện" onChange={onDistrictChange}>
//           {districts.map((district) => (
//             <Select.Option key={district.district_id} value={district.district_id}>
//               {district.district_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="ward"
//         label="Phường/Xã"
//         rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}>
//         <Select placeholder="Chọn phường/xã">
//           {wards.map((ward) => (
//             <Select.Option key={ward.ward_id} value={ward.ward_id}>
//               {ward.ward_name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="street-detail"
//         label="Số nhà, đường"
//         rules={[{ required: true, message: "Vui lòng nhập số nhà, đường" }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit" style={{ backgroundColor: "#E87428", color: "white" }}>
//           Lưu
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

import React, { useState, useEffect } from "react";
import { Input, Button, Typography, List, Modal, Select, Form } from "antd";
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import { EditOutlined, DeleteOutlined, SettingOutlined, PlusOutlined } from "@ant-design/icons";
import { apiGetProvinces, apiGetDistricts, apiGetWards } from "./getAddress.js";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice.js';
import { addAddress, deleteAddress, setAddressDefault, updateAddress } from "../../services/User.service.js";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const ChangeAddress = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [home_address, setHomeAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressID, setAddressID] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmDeleteVisible, setIsConfirmDeleteVisible] = useState(false);
  const [deleteAddressId, setDeleteAddressId] = useState(null);
  const dispatch = useDispatch();
  const { _id, isAuthenticated, user_address, user_name, full_name, user_avt_img } = useSelector((state) => state.user);
  const access_token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

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

  const handleSetDefault = async(id) => {
    try {
      const res = await setAddressDefault(_id ,access_token, id);
      console.log(res)
      if (res && res.status === 'Successfully') {
        dispatch(updateUser({ user_address: res.data }));
        navigate('/account/edit-address');
      }
    } catch (err) {
      console.error(err?.message || 'Cập nhật thất bại.');
    }
  };

  const handleDeleteAddress = async (adr_id) => {
    try {
      const response = await deleteAddress(_id, access_token, adr_id);
      return response;
    } catch (error) {
      console.error(error.message || "Có lỗi xảy ra.");
    }
  };

  const handleDelete = async () => {
    if (deleteAddressId) {
      try {
        const res = await handleDeleteAddress(deleteAddressId);
        if (res && res.status === 'Successfully') {
          dispatch(updateUser({ user_address: res.data }));
          setIsConfirmDeleteVisible(false);
          navigate('/account/edit-address');
        }
      } catch (err) {
        console.error(err?.message || 'Cập nhật thất bại.');
      }
    }
  };

  const handleEdit = (_id) => {
    const address = user_address.find((addr) => addr._id === _id);
    if (address) {
      setName(address.name);
      setPhone(address.phone);
      setHomeAddress(address.home_address);
      setAddressID(_id);
      setIsModalVisible(true); // Mở modal để chỉnh sửa
    }
  };

  const handleAddNew = () => {
    setHomeAddress("");
    setPhone("");
    setName("");
    setIsModalVisible(true);
  };

  const handleNewAddress = async (newAddress) => {
    try {
      const response = await addAddress(_id, access_token, newAddress);
      return response;
    } catch (error) {
      console.error(error.message || "Có lỗi xảy ra.");
    }
  };

  const handleUpdateAddress = async (newAddress, adr_id) => {
    try {
      const response = await updateAddress(_id, access_token, newAddress, adr_id);
      return response;
    } catch (error) {
      console.error(error.message || "Có lỗi xảy ra.");
    }
  };

  const handleSave = async (values) => {
    const { province, district, ward, home_address, phone, name, adr_id } = values;
    const provinceName = provinces.find((p) => p.province_id === province)?.province_name || "";
    const districtName = districts.find((d) => d.district_id === district)?.district_name || "";
    const wardName = wards.find((w) => w.ward_id === ward)?.ward_name || "";

    const newAddress = {
      name: name,
      phone: phone,
      home_address: home_address,
      province: provinceName,
      district: districtName,
      commune: wardName,
    };

    try {
      if (adr_id === "") {
        const res = await handleNewAddress(newAddress);
        if (res && res.status === "Successfully") {
          dispatch(updateUser({ user_address: res.data }));
          navigate("/account/edit-address");
        }
      } else {
        const res = await handleUpdateAddress(newAddress, adr_id);
        if (res && res.status === "Successfully") {
          dispatch(updateUser({ user_address: res.data }));
          navigate("/account/edit-address");
        }
      }
    } catch (err) {
      console.error(err?.message || "Cập nhật địa chỉ thất bại.");
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
          <ProfileUser full_name={full_name} src_img={user_avt_img} name={user_name} />
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
              dataSource={user_address}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(item._id)} key="edit">
                      Cập nhật
                    </Button>,
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => {
                        setDeleteAddressId(item._id);
                        setIsConfirmDeleteVisible(true);
                      }}
                      key="delete"
                    >
                      Xóa
                    </Button>,
                    !item.isDefault && (
                      <Button
                        type="link"
                        icon={<SettingOutlined />}
                        onClick={() => handleSetDefault(item._id)}
                        key="setDefault"
                      >
                        Thiết lập mặc định
                      </Button>
                    ),
                  ]}
                  key={item._id}
                >
                  <List.Item.Meta
                    title={
                      <>
                        <Text strong>{item.name}</Text>{" "}
                        <Text type="secondary">({item.phone})</Text>
                      </>
                    }
                    description={
                      <Text>
                        {item.home_address}, {item.commune}, {item.district}, {item.province}
                      </Text>
                    }
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
          title={home_address ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          centered
        >
          <AddressForm
            addressID={addressID}
            name={name}
            phone={phone}
            home_address={home_address}
            onSubmit={handleSave}
            provinces={provinces}
            districts={districts}
            wards={wards}
            onProvinceChange={handleProvinceChange}
            onDistrictChange={handleDistrictChange}
          />
        </Modal>

        <Modal
          title="Xác nhận xóa"
          visible={isConfirmDeleteVisible}
          onCancel={() => setIsConfirmDeleteVisible(false)}
          onOk={handleDelete}
          okText="Xóa"
          cancelText="Hủy"
          okButtonProps={{
            style: { backgroundColor: 'red', color: 'white', borderColor: 'red' },
          }}
          cancelButtonProps={{
            style: { backgroundColor: '#f0f0f0', color: '#000' },
          }}
        >
          <p>Bạn có chắc chắn muốn xóa địa chỉ này không?</p>
        </Modal>
      </div>
    </div>
  );
};
const AddressForm = ({
  addressID,
  name,
  phone,
  home_address,
  onSubmit,
  provinces,
  districts,
  wards,
  onProvinceChange,
  onDistrictChange,
}) => {
  const [form] = Form.useForm();

  // useEffect để thiết lập giá trị mặc định cho form từ home_address
  useEffect(() => {
    form.setFieldsValue({
      name: name || '', // Thiết lập giá trị name
      phone: phone || '', // Thiết lập giá trị phone
      home_address: home_address || '', // Thiết lập các giá trị ban đầu từ home_address
    });
  }, [home_address, name, phone, form]);

  const handleFinish = (values) => {
    onSubmit({ ...values, adr_id: addressID }); // Gọi onSubmit với các giá trị của form
    form.resetFields(); // Reset các trường sau khi lưu
  };

  return (
    <Form form={form} onFinish={handleFinish} layout="vertical">
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
        rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
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
        name="home_address" // Đây sẽ là trường cho "Số nhà, đường"
        label="Số nhà, đường"
        rules={[{ required: true, message: "Vui lòng nhập số nhà, đường" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#E87428", color: "white" }}>
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ChangeAddress;
