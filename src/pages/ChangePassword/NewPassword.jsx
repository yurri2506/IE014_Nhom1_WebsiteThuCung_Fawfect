import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChangePassword.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import myAvatar from "../../assets/images/avatar.jpg";

const cx = classNames.bind(styles);

function NewPassword() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleSaveNewPassword = (values) => {
    alert('Đổi mật khẩu thành công!');
    navigate('/account-info'); 
  };
  const handleValuesChange = (changedValues, allValues) => {
    if (allValues.newPassword && allValues.newPassword.trim() !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handleCancel = () => {
    navigate('/edit-password');
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
        onFinish={handleSaveNewPassword}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          dependencies={['newPassword']}
          rules={[
            { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Mật khẩu xác nhận không khớp!');
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
                disabled={!isFormFilled} 
                style={{
                  backgroundColor: isFormFilled ? '#E87428' : '#d9d9d9',
                  borderColor: isFormFilled ? '#E87428' : '#d9d9d9',
                }}
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

export default NewPassword;
