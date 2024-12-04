// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import classNames from 'classnames/bind';
// import styles from './ChangePhone.css';
// import ProfileUser from "../MyOrderPage/UserProfile.jsx";
// import myAvatar from "../../assets/images/avatar.jpg";

// import {
//   Button,
//   Form,
//   Input,
// } from 'antd';

// const cx = classNames.bind(styles);

// const initialData = {
//   currentPhone: '0223350604',
// };

// function ChangePhone() {
//   const navigate = useNavigate();
//   const [form] = Form.useForm();

//   const [isFormFilled, setIsFormFilled] = useState(false);

//   const handleValuesChange = (changedValues, allValues) => {
//     if (allValues.newPhone && allValues.newPhone.trim() !== '') {
//       setIsFormFilled(true);
//     } else {
//       setIsFormFilled(false);
//     }
//   };


//   const handleSave = (values) => {
//     alert('Hãy xác thực số điện thoại mới!');
//     navigate('/verification');
//   };

//   const handleCancel = () => {
//     navigate('/account/profile');
//   };

//   return (
//     <div className='grid wide'>
//     <div style={{ margin: "0 auto", padding: "20px" }} className={cx('container')}>
//       <div className="profile-container">
//         <ProfileUser
//           full_name="Nguyễn Lê Thanh Huyền"
//           src_img={myAvatar}
//           name="yurri_2506"
//         />

//         <div className={cx('content')}>
//           <span className={cx('header')}>Đổi số điện thoại</span>
//           <Form
//             layout="horizontal"
//             labelCol={{ span: 6 }}
//             wrapperCol={{ span: 18 }}
//             className={cx('form')}
//             form={form}
//             initialValues={initialData}
//             onFinish={handleSave}
//             onValuesChange={handleValuesChange}
//           >
//             <Form.Item
//               label="Số điện thoại hiện tại"
//               name="currentPhone"
//             >
//               <Input disabled value={initialData.currentPhone} />
//             </Form.Item>

//             <Form.Item
//               label="Số điện thoại mới"
//               name="newPhone"
//               rules={[{ required: true, message: 'Nhập số điện thoại mới!' }, { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
//               <Button
//                 htmlType="reset"
//                 className={cx('cancel-button')}
//                 onClick={handleCancel}
//               >
//                 Hủy
//               </Button>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className={cx('confirm-button')}
//                 disabled={!isFormFilled} 
//                 style={{
//                   backgroundColor: isFormFilled ? '#E87428' : '#d9d9d9',
//                   borderColor: isFormFilled ? '#E87428' : '#d9d9d9',
//                 }}
//               >
//                 Xác nhận
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default ChangePhone;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ChangePhone.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";

import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../services/User.service.js';
import { updateUser } from '../../redux/slices/userSlice.js';

const cx = classNames.bind(styles);

function ChangePhone() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { _id, isAuthenticated, user_phone, user_name, full_name, user_avt_img} = useSelector((state) => state.user);
  const access_token = localStorage.getItem("accessToken");

  const handleValuesChange = (changedValues, allValues) => {
    if (allValues.newPhone && allValues.newPhone.trim() !== '') {
      setError(''); // Xóa lỗi nếu người dùng nhập giá trị hợp lệ
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handleSave = async (values) => {
    const { newPhone } = values;
    const userData = { user_phone: newPhone };
    dispatch(updateUser({ user_phone: newPhone }));
    try {
      const res = await handleUpdateUser(userData);
      if (res && res.status === 'OK') {
        // dispatch(updateUser({ ...res.data }));
        navigate('/account/profile');
      }
    } catch (err) {
      setError(err?.message?.message || 'Cập nhật số điện thoại thất bại. Vui lòng thử lại.');
      dispatch(updateUser({ user_phone }));
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const res = await editUser(_id, access_token, userData);
      console.log("Fetched update user", res);
      return res; // Trả về kết quả để xử lý trong `handleSave`
    } catch (err) {
      console.error("Error in handleUpdate:", err);
      setError('Có lỗi xảy ra khi cập nhật thông tin.');
      throw err;
    }
  };

  const handleCancel = () => {
    navigate('/account/profile'); // Quay về trang hồ sơ
  };

  return (
    <div className='grid wide'>
      <div style={{ margin: "0 auto", padding: "20px" }} className={cx('container')}>
        <div className="profile-container">
          <ProfileUser
            full_name={full_name}
            src_img={user_avt_img}
            name={user_name}
          />

          <div className={cx('content')}>
            <span className={cx('header')}>{user_phone ? 'Đổi số điện thoại' : 'Thêm số điện thoại mới'}</span>

            <Form
              layout="horizontal"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              className={cx('form')}
              form={form}
              initialValues={{ currentPhone: user_phone || '' }}
              onFinish={handleSave}
              onValuesChange={handleValuesChange}
            >
              <Form.Item
                label="Số điện thoại hiện tại"
                name="currentPhone"
              >
                {user_phone ? (
                  <Input disabled value={user_phone} />
                ) : (
                  <span style={{ color: 'red' }}>Chưa có số điện thoại</span>
                )}
              </Form.Item>

              <Form.Item
                label="Số điện thoại mới"
                name="newPhone"
                validateStatus={error ? 'error' : ''}
                help={error || 'Số điện thoại phải từ 10-11 chữ số.'} // Hiển thị thông báo lỗi hoặc hướng dẫn
                rules={[
                  { required: true, message: 'Nhập số điện thoại mới!' },
                  { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' },
                ]}
              >
                <Input
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!/^[0-9]{10,11}$/.test(value)) {
                      setError('Số điện thoại không hợp lệ!');
                    } else {
                      setError('');
                    }
                  }}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                <Button
                  htmlType="reset"
                  className={cx('cancel-button')}
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={cx('confirm-button')}
                  disabled={!isFormFilled}
                  style={{
                    backgroundColor: isFormFilled ? '#E87428' : '#d9d9d9',
                    borderColor: isFormFilled ? '#E87428' : '#d9d9d9',
                  }}
                >
                  {user_phone ? 'Xác nhận' : 'Thêm số điện thoại'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePhone;
