import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import SideBar from '../SideBar/SideBar.js';
import {
  Button,
  Form,
  Input,
} from 'antd';

const cx = classNames.bind(styles);

// Dữ liệu ban đầu (Mật khẩu cũ là '12345678')
const initialData = {
  oldPassword: '12345678',  // Giá trị mặc định của mật khẩu cũ
};

function ChangePassword() {
  const [form] = Form.useForm();

  const handleSave = (values) => {
    alert('Thay đổi mật khẩu thành công!');
  };

  return (
    <div className={cx('profile-container')}>
      {/* Sidebar bên trái */}
      <SideBar />
      
      {/* Form bên phải */}
      <div className={cx('content')}>
        <div className={cx('header-container')}>
          <span className={cx('header')}>Đổi mật khẩu</span>
        </div>

        {/* Form chỉnh sửa mật khẩu */}
        <Form
          layout="horizontal" // Đặt layout ngang
          labelCol={{ span: 6 }} // Chiều rộng của nhãn
          wrapperCol={{ span: 18 }} // Chiều rộng của input box
          className={cx('form')}
          form={form}
          initialValues={initialData} // Gán giá trị mặc định cho form
          onFinish={handleSave} // Xử lý khi bấm nút "Lưu thay đổi"
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
  );
}

export default ChangePassword;
