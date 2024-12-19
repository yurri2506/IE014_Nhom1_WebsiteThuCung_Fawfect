import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message, notification } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChangePassword.css';
import ProfileUser from "../MyOrderPage/UserProfile.jsx";
import { useSelector } from 'react-redux';
import { changePassword } from '../../services/User.service.js';

const cx = classNames.bind(styles);

function NewPassword() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const { _id, isAuthenticated, user_email, user_name, full_name, user_avt_img } = useSelector((state) => state.user); // Lấy email từ Redux
  const [error, setError] = useState('');
  const access_token = localStorage.getItem("accessToken");

  const handleSaveNewPassword = async(values) => {
    const{newPassword, confirmPassword} = values;
    console.log(newPassword)
    console.log(confirmPassword)
    try {
      const res = await changePassword(_id ,access_token, newPassword, confirmPassword);
      console.log(res);
      if (res && res.status === 'OK') {
        // Hiển thị thông báo thành công
        notification.success({
          message: 'Thành công',
          description: 'Mật khẩu của bạn đã được thay đổi thành công!',
          duration: 2, // Thời gian hiển thị thông báo (2 giây)
          onClose: () => {
            // Sau khi thông báo đóng, điều hướng đến trang profile
            navigate('/account/profile');
          }
        });
      }
    } catch (err) {
      console.error(err?.message || 'Cập nhật thất bại.');
      message.error(err?.message || 'Đã xảy ra lỗi khi đổi mật khẩu!');
    }
  };

  const handleValuesChange = (changedValues, allValues) => {
    if (allValues.newPassword && allValues.newPassword.trim() !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handleCancel = () => {
    navigate('/account/edit-password');
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
    </div>
  );
}

export default NewPassword;
