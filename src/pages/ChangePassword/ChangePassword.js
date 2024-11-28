import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChangePassword.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";

const cx = classNames.bind(styles);

const initialData = {
  oldPassword: 'thanhhuyen@123', 
};

function CurrentPassword() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleValuesChange = (changedValues, allValues) => {
    // Kiểm tra nếu trường "oldPassword" có giá trị
    setIsFormFilled(!!allValues.oldPassword?.trim());
  };

  // Hàm kiểm tra mật khẩu hiện tại
  const handleCheckPassword = (values) => {
    if (values.oldPassword === initialData.oldPassword) {
      alert('Mật khẩu hiện tại đúng!');
      navigate('/edit-password/new-password'); // Điều hướng sang trang mới
    } else {
      message.error('Mật khẩu hiện tại không đúng!');
    }
  };

  const handleCancel = () => {
    navigate('/account-info');
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px" }} className={cx('container')}>
      <div className="profile-container">
        <ProfileUser
          full_name="Nguyễn Lê Thanh Huyền"
          src_img={myAvatar}
          name="yurri_2506"
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
          onValuesChange={handleValuesChange} // Lắng nghe sự thay đổi trong form
        >
          <Form.Item
            label="Mật khẩu hiện tại"
            name="oldPassword"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }
            ]}
          >
            <Input.Password/>
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
              disabled={!isFormFilled} // Nút chỉ được bật khi isFormFilled = true
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
  );
}

export default CurrentPassword;
