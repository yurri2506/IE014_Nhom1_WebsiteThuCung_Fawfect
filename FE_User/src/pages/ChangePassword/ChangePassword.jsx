import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChangePassword.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";
import { checkCurrentPass } from '../../services/User.service.js';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const initialData = {
  oldPassword: 'thanhhuyen@123',
};

function CurrentPassword() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const { _id, isAuthenticated, user_email, user_name, full_name, user_avt_img } = useSelector((state) => state.user); // Lấy email từ Redux
  const [error, setError] = useState('');
  const access_token = localStorage.getItem("accessToken");

  const handleValuesChange = (changedValues, allValues) => {
    setIsFormFilled(!!allValues.oldPassword?.trim());
  };

  const handleCheckPassword = async(values) => {
    const{oldPassword} = values
    try {
      const res = await checkCurrentPass(_id ,access_token, oldPassword);
      console.log(res)
      if (res && res.status === 'OK') {
        navigate('/account/edit-password/new-password');
      }
    } catch (err) {
      console.error(err?.message || 'Cập nhật thất bại.');
      message.error('Mật khẩu hiện tại không đúng!');
    }
  };

  

  const handleCancel = () => {
    navigate('/account/profile');
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
            <span className={cx('header')}>Đổi mật khẩu</span>
            <Form
              layout="horizontal"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              className={cx('form')}
              form={form}
              onFinish={handleCheckPassword}
              onValuesChange={handleValuesChange}
            >
              <Form.Item
                label="Mật khẩu hiện tại"
                name="oldPassword"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }
                ]}
              >
                <Input.Password />
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
                  Tiếp tục
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPassword;
