import React from 'react';
import { Button, Form, Input, DatePicker, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountPage.css';
import ProfileUser from "../MyOrderPage/ProfileUser.jsx";
import myAvatar from "../../assets/images/avatar.jpg";
import moment from 'moment';

const cx = classNames.bind(styles);

const initialData = {
  Input: 'yurri_2506',
  HoTen: 'Nguyễn Lê Thanh Huyền',
  NgaySinh: moment('25/06/2204', 'DD/MM/YYYY'), // Đảm bảo sử dụng moment đúng cách
  GioiTinh: 'Nữ',
  Email: 'thanhhuyen@gmail.com.vn',
  Sodienthoai: '0223350604',
  DiaChi: 'Cù Bị, Châu Đức, Bà Rịa - Vũng Tàu',
};

const EditAccount = () => {
  const navigate = useNavigate();
 
  const [form] = Form.useForm();

  const handleSave = (values) => {
    alert('Cập nhật thông tin thành công!');
    navigate('/account-info');
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px" }} className={cx('container')}>
      <div className={cx('profile-container')}>
        <ProfileUser
          full_name="Nguyễn Lê Thanh Huyền"
          src_img={myAvatar}
          name="yurri_2506"
        />

        <div className={cx('content')}>
            <span className={cx('header')}>Sửa thông tin tài khoản</span>

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
              label="Tên người dùng"
              name="Input"
              rules={[{ required: true, message: 'Nhập tên người dùng!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Họ và tên"
              name="HoTen"
              rules={[{ required: true, message: 'Nhập họ và tên!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Ngày sinh"
              name="NgaySinh"
              rules={[{ required: true, message: 'Nhập ngày sinh!' }]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              label="Giới tính"
              name="GioiTinh"
              rules={[{ required: true, message: 'Chọn giới tính!' }]}
            >
              <Select>
                <Select.Option value="male">Nam</Select.Option>
                <Select.Option value="female">Nữ</Select.Option>
                <Select.Option value="other">Khác</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: 'Nhập email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="Sodienthoai"
              rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="DiaChi"
              rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <Button type="primary" htmlType="submit" className={cx('confirm-button')}>
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
