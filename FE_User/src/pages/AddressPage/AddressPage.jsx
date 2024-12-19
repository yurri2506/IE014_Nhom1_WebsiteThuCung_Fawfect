import React, { useState } from 'react';
import clsx from 'clsx'
import styles from './AddressPage.module.scss';
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
import { useNavigate } from 'react-router-dom';

const AddressPage = ({closeModal}) => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Võ Văn', phone: '0382868383', address: '324 Xô Viết Nghệ Tĩnh Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh' },
    { id: 2, name: 'Phi Thông', phone: '0987654321', address: '324 Xô Viết Nghệ Tĩnh Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh' },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: '', phone: '', address: '' });
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSelectAddress = (addressId) => {
    setSelectedAddress(addressId);
  };

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setNewAddress(address);
  };

  const handleSaveEditAddress = () => {
    setAddresses(
      addresses.map((addr) => (addr.id === newAddress.id ? newAddress : addr))
    );
    setIsEditing(false);
    setNewAddress({ name: '', phone: '', address: '' });
  };

  const handleAddNewAddress = () => {
    setIsAddingNew(true);
    setNewAddress({ id: Date.now(), name: '', phone: '', address: '' });
  };

  const handleSaveNewAddress = () => {
    setAddresses([...addresses, newAddress]);
    setIsAddingNew(false);
    setNewAddress({ name: '', phone: '', address: '' });
  };

  const handleDeleteAddress = (addressId) => {
    setAddresses(addresses.filter((addr) => addr.id !== addressId));
  };

  const handleConfirmAddress = () => {
    if (selectedAddress) {
      const address = addresses.find((addr) => addr.id === selectedAddress);
      navigate('/check-out', { state: { selectedAddress: address } }); 
    } else {
      alert('Vui lòng chọn địa chỉ.');
    }
  };

  return (
    <div className={styles.addressPage}>
      <ul>
        {addresses.map((address) => (
          <li key={address.id} className={styles.addressItem}>
            <div className={styles.all}>
              <div className={styles.checkAndInfo}>
                <div>
                  <input
                    type="checkbox"
                    checked={selectedAddress === address.id}
                    onChange={() => handleSelectAddress(address.id)}
                  />
                </div>
                <div className={styles.info}>
                  <p>
                    {address.name}
                  </p>
                  <p>
                    {address.phone}
                  </p>
                  <p>
                    {address.address}
                  </p>
                </div>
              </div>
              <div className={styles.btn}>
                <button className={clsx(styles.button, styles.update)} onClick={() => handleEditAddress(address)}>Cập nhật</button>
                <button className={clsx(styles.button, styles.delete)} onClick={() => handleDeleteAddress(address.id)}>Xóa</button>
              </div>
            </div>
            <UnderLineComponent
                width="100%"
                height="1px"
                background="rgba(0, 0, 0, 0.2)"
            />
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className={styles.AddressForm}>
          <h3>Cập Nhật Địa Chỉ</h3>
          <UnderLineComponent 
                width="100%"
                height="1px"
                background="rgba(0, 0, 0, 0.2)"
          />
          <input
            type="text"
            placeholder="Tên người nhận"
            value={newAddress.name}
            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            value={newAddress.phone}
            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            value={newAddress.address}
            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
          />
          <div style={{display: "flex", justifyContent: "center"}}>
            <button className={styles.button} onClick={handleSaveEditAddress}>Lưu</button>
          </div>
        </div>
      )}

      {isAddingNew && (
        <div className={styles.AddressForm}>
          <h3>Thêm Địa Chỉ Mới</h3>
          <input
            type="text"
            placeholder="Tên người nhận"
            value={newAddress.name}
            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            value={newAddress.phone}
            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            value={newAddress.address}
            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
          />
          <div style={{display: "flex", justifyContent: "center"}}>
          <button className={styles.button} onClick={handleSaveNewAddress}>Lưu Địa Chỉ Mới</button>
          </div>
        </div>
      )}
      {isEditing || isAddingNew ||
        <div style={{display: "flex", gap: "10px", margin: "30px 0 0 0", justifyContent: "flex-end"}}>
          <button className={clsx(styles.button, styles.add)} onClick={handleAddNewAddress}>Thêm Địa Chỉ Mới</button>
          <button className={clsx(styles.button, styles.confirm)} onClick={() => {handleConfirmAddress(); closeModal()}}>Xác Nhận</button>
      </div>
      }
    </div>
  );
};

export default AddressPage;
