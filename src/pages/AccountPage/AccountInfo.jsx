import React from 'react'; 
import { Button, Form, Input, DatePicker, Select } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import { EditOutlined } from '@ant-design/icons';
import styles from './AccountPage.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";
import classNames from 'classnames/bind';
import moment from 'moment';

const cx = classNames.bind(styles);

const AccountInfo = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const initialData = {
    Input: 'yurri_2506',
    HoTen: 'Nguyễn Lê Thanh Huyền',
    NgaySinh: moment('25/06/2204', 'DD/MM/YYYY'),
    GioiTinh: 'Nữ',
    Email: 'thanhhuyen@gmail.com.vn',
    Sodienthoai: '0223350604',
    DiaChi: 'Cù Bị, Châu Đức, Bà Rịa - Vũng Tàu',
    Matkhau: 'thanhhuyen@123'
  };

  const handleEdit = () => {
    navigate('/account/edit-info');
  };

  return (
    <div className='grid wide'>
    <div style={{ margin: "0 auto", padding: "20px" }} className={cx('container')}>
      <div className="profile-container">
        <ProfileUser
          full_name="Nguyễn Lê Thanh Huyền"
          src_img={myAvatar}
          name="yurri_2506"
        />

        <div className={cx('content')}>
          <div className={cx('content-button')}>
            <span className={cx('header')}>Hồ sơ tài khoản</span> 
            <Button
              type="primary"
              onClick={handleEdit}
              className={cx('confirm-button')}
              style={{
                position: 'relative',
              }}
            >
              Sửa thông tin
            </Button>
          </div>
          <Form
            layout="horizontal" 
            labelCol={{ span: 6 }} 
            wrapperCol={{ span: 18 }} 
            className={cx('form')}
            form={form}
            initialValues={initialData} 
            disabled={true} 
            style={{ position: 'relative' }} 
          >
            <Form.Item
              label="Tên người dùng"
              name="Input">
              <Input disabled value="yurri_2506" />
            </Form.Item>

            <Form.Item
              label="Họ và tên"
              name="HoTen">
              <Input disabled value="Nguyễn Lê Thanh Huyền" />
            </Form.Item>

            <Form.Item
              label="Ngày sinh"
              name="NgaySinh">
              <DatePicker disabled value={moment('25/06/2204', 'DD/MM/YYYY')} format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              label="Giới tính"
              name="GioiTinh">
              <Select disabled value="female">
                <Select.Option value="male">Nam</Select.Option>
                <Select.Option value="female">Nữ</Select.Option>
                <Select.Option value="other">Khác</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Input 
                  disabled 
                  value="thanhhuyen@gmail.com.vn" 
                  style={{ flex: 1, marginRight: '8px' }} 
                />
                <EditOutlined 
                  onClick={() => navigate('/account/edit-email')}
                  style={{ cursor: 'pointer', color: '#E87428', fontSize: '16px' }} 
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="Sodienthoai"
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Input 
                  disabled 
                  value="0223350604" 
                  style={{ flex: 1, marginRight: '8px' }} 
                />
                <EditOutlined 
                  onClick={() => navigate('/account/edit-phone')} 
                  style={{ cursor: 'pointer', color: '#E87428', fontSize: '16px' }} 
                />
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountInfo;
