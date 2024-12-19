// import React, { useState } from 'react';

// const SelectAddressComponent = () => {
//   const [currentAddress, setCurrentAddress] = useState('123 Đường ABC, Phường XYZ');
//   const [addresses, setAddresses] = useState([
//     '123 Đường ABC, Phường XYZ',
//     '456 Đường DEF, Phường LMN',
//     '789 Đường GHI, Phường OPQ',
//   ]);
//   const [view, setView] = useState('main'); // main | selectAddress | addNewAddress
//   const [newAddress, setNewAddress] = useState('');
//   const [defaultAddress, setDefaultAddress] = useState(currentAddress);
//   const [editingAddress, setEditingAddress] = useState(null);
//   const [updatedAddress, setUpdatedAddress] = useState('');

//   // Chuyển sang giao diện chọn địa chỉ
//   const changeAddress = () => {
//     setView('selectAddress');
//   };

//   // Chọn địa chỉ khác và quay lại giao diện chính
//   const selectAddress = (address) => {
//     setCurrentAddress(address);
//     setView('main');
//   };

//   // Chuyển sang giao diện thêm địa chỉ mới
//   const goToAddNewAddress = () => {
//     setView('addNewAddress');
//   };

//   // Lưu địa chỉ mới và quay lại giao diện chính
//   const saveNewAddress = () => {
//     if (newAddress) {
//       const updatedAddresses = [...addresses, newAddress];
//       setAddresses(updatedAddresses);
//       setCurrentAddress(newAddress);
//       setNewAddress('');
//       setView('main');
//     }
//   };

//   // Xóa địa chỉ
//   const deleteAddress = (address) => {
//     const updatedAddresses = addresses.filter((addr) => addr !== address);
//     setAddresses(updatedAddresses);
//     // Nếu xóa địa chỉ hiện tại thì chuyển về địa chỉ mặc định
//     if (currentAddress === address) {
//       setCurrentAddress(defaultAddress);
//     }
//   };

//   // Đặt làm mặc định
//   const setAsDefault = (address) => {
//     setDefaultAddress(address);
//     setCurrentAddress(address);
//     setView('main');
//   };

//   // Bắt đầu cập nhật địa chỉ
//   const startUpdatingAddress = (address) => {
//     setEditingAddress(address);
//     setUpdatedAddress(address);
//   };

//   // Lưu cập nhật địa chỉ
//   const saveUpdatedAddress = () => {
//     const updatedAddresses = addresses.map((addr) =>
//       addr === editingAddress ? updatedAddress : addr
//     );
//     setAddresses(updatedAddresses);
//     if (currentAddress === editingAddress) {
//       setCurrentAddress(updatedAddress);
//     }
//     setEditingAddress(null);
//     setUpdatedAddress('');
//   };

//   return (
//     <div className="SelectAddressComponent">
//       <h2>Trang Thanh Toán</h2>

//       {/* Giao diện chính hiển thị địa chỉ hiện tại */}
//       {view === 'main' && (
//         <div className="current-address">
//           <h3>Địa chỉ nhận hàng:</h3>
//           <p>{currentAddress}</p>
//           <button onClick={changeAddress}>Thay đổi địa chỉ</button>
//         </div>
//       )}

//       {/* Giao diện chọn địa chỉ khác */}
//       {view === 'selectAddress' && (
//         <div className="address-selection">
//           <h3>Chọn địa chỉ nhận hàng:</h3>
//           <ul>
//             {addresses.map((address, index) => (
//               <li key={index} className="address-item">
//                 {editingAddress === address ? (
//                   <>
//                     <input
//                       type="text"
//                       value={updatedAddress}
//                       onChange={(e) => setUpdatedAddress(e.target.value)}
//                     />
//                     <button onClick={saveUpdatedAddress}>Lưu</button>
//                     <button onClick={() => setEditingAddress(null)}>Hủy</button>
//                   </>
//                 ) : (
//                   <>
//                     <span onClick={() => selectAddress(address)}>{address}</span>
//                     <button onClick={() => startUpdatingAddress(address)}>Cập nhật</button>
//                     <button onClick={() => deleteAddress(address)}>Xóa</button>
//                     <button onClick={() => setAsDefault(address)}>Đặt làm mặc định</button>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <button onClick={goToAddNewAddress}>Thêm địa chỉ mới</button>
//           <button onClick={() => setView('main')}>Quay lại</button>
//         </div>
//       )}

//       {/* Giao diện thêm địa chỉ mới */}
//       {view === 'addNewAddress' && (
//         <div className="add-new-address">
//           <h3>Thêm địa chỉ mới:</h3>
//           <input
//             type="text"
//             placeholder="Nhập địa chỉ mới"
//             value={newAddress}
//             onChange={(e) => setNewAddress(e.target.value)}
//           />
//           <button onClick={saveNewAddress}>Lưu địa chỉ</button>
//           <button onClick={() => setView('selectAddress')}>Quay lại</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectAddressComponent;


import React, { useState } from 'react';
import  styles from './SelectAddressComponent.module.scss'
import UnderLineComponent from '../UnderLineComponent/UnderLineComponent'
import AddressPage from '../../pages/AddressPage/AddressPage';

function SelectAddressComponent({closeModal}) {
  return (
    <div className={styles.main}>
          <div className={styles.overlay} onClick={closeModal}></div>

          <div className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h3>Địa chỉ của bạn</h3>
            <UnderLineComponent 
                width="100%"
                height="1px"
                background="rgba(0, 0, 0, 0.2)"
            />
            <AddressPage
              closeModal={closeModal}
            />
          </div>    
    </div>
  );
}

export default SelectAddressComponent;
