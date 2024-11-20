import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountPage.module.scss';
import SideBar from '../SideBar/SideBar.js';
import moment from 'moment';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

const cx = classNames.bind(styles);

const initialData = {
  Input: 'yurri_2506',
  HoTen: 'Nguyễn Lê Thanh Huyền',
  NgaySinh: moment('25/06/2204', 'DD/MM/YYYY'),
  GioiTinh: 'Nữ',
  Email: 'thanhhuyen@gmail.com.vn',
  Sodienthoai: '0223350604',
  DiaChi: 'Cù Bị, Châu Đức, Bà Rịa - Vũng Tàu',
};

function AccountPage() {
  const [form] = Form.useForm();

  const handleSave = (values) => {
    alert('Cập nhật thông tin thành công!');
  };

  return (
    <div className={cx('profile-container')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('content')}>
          <span className={cx('header')}>Hồ sơ tài khoản</span>
        </div>
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
            <Input/>
          </Form.Item>

          <Form.Item
            label="Họ và tên"
            name="HoTen"
            rules={[{ required: true, message: 'Nhập họ và tên!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="NgaySinh"
            rules={[{ required: true, message: 'Nhập ngày sinh!' }]}
          >
            <DatePicker format="DD/MM/YYYY"/>
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
            <Input/>
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="Sodienthoai"
            rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
          >
            <Input/>
          </Form.Item>

  
          <Form.Item
            label="Địa chỉ"
            name="DiaChi"
            rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
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

export default AccountPage;
