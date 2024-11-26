import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ChangePassword.css';
import ProfileUser from  "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";

import {
  Button,
  Form,
  Input,
} from 'antd';

const cx = classNames.bind(styles);

const initialData = {
  oldPassword: '12345678', 
};

function ChangePassword() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleSave = (values) => {
    alert('Đổi mật khẩu thành công!');
    navigate('/account-info');
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
            initialValues={initialData} 
            onFinish={handleSave} 
          >
          <Form.Item
            label="Mật khẩu hiện tại"
            name="oldPassword"
            rules={[{ required: true, message: 'Nhập mật khẩu hiện tại!' }]}
          >
            {/* Sử dụng Input để hiển thị mật khẩu mặc định */}
            <Input.Password defaultValue={initialData.oldPassword} />
          </Form.Item>

          <Form.Item
            label="Mật khẩu mới"
            name="newPassword"
            rules={[{ required: true, message: 'Nhập mật khẩu mới!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Xác nhận mật khẩu mới!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu mới không khớp!'));
                },
              }),
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
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default ChangePassword;
