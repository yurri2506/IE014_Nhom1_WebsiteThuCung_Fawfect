import React, { useState } from 'react'
import CartItemComponent from '../../components/CartItemComponent/CartItemComponent';
import OrderSummaryComponent from '../../components/OrderSummaryComponent/OrderSummaryComponent';
import product4 from '../../assets/images/product4.svg'
import product5 from '../../assets/images/product5.svg'
import product6 from '../../assets/images/product6.svg'
import styles from './MyCart.module.scss'

const MyCart = () => {
    const initialItems = [
        { id: 1, name: 'Thuốc dưỡng lông cho chó VEGEBRAND Bee Slurry Hair Beauty', price: 170000, quantity: 1, img : product4 },
        { id: 2, name: 'Bánh thưởng cho mèo CIAO vị cá ngừ & ức gà nướng', price: 55000, quantity: 1, img: product5 },
        { id: 3, name: 'Bánh thưởng cho chó vị thịt gà WUJI Chicken Jerky Flavor', price: 55000, quantity: 1, img: product6 },
      ];
    const [cartItems, setCartItems] = useState(initialItems);
    const [discount, setDiscount] = useState(20000);
    const [checkedItems, setCheckedItems] = useState([]);
  
    const handleQuantityChange = (id, amount) => {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
      );
    };
  
    const handleRemoveItem = id => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleCheckItem = id => {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.includes(id)
          ? prevCheckedItems.filter(itemId => itemId !== id)
          : [...prevCheckedItems, id]
      );
    };

    const handleCheckAll = (isChecked) => {
      if (isChecked) {
          setCheckedItems(cartItems.map(item => item.id));
      } else {
          setCheckedItems([]);
      }
  };
  
    let totalAmount = cartItems.reduce((total, item) => {
      if (checkedItems.includes(item.id)) {
        return total + item.price * item.quantity;
      }
      return total;
  }, 0) - discount;

  totalAmount = totalAmount < 0 ? 0 : totalAmount;
  
    return (
      <div className={styles.main}>
        <div className='container'>
            <h2>GIỎ HÀNG CỦA BẠN</h2>
            <div className={styles.checkAll}>
              <input 
                type="checkbox"
                checked={checkedItems.length === cartItems.length}
                onChange={(e) => handleCheckAll(e.target.checked)}
              />
              <h3>Chọn tất cả</h3>
            </div>
            <div className={styles.cart}>
              <div className={styles.cartItems}>
                {cartItems.map(item => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                    onCheck={handleCheckItem}
                    isChecked={checkedItems.includes(item.id)}
                  />
                ))}
              </div>
            <OrderSummaryComponent totalAmount={totalAmount} discount={discount} />
            </div>
        </div>
      </div>
    );
}

export default MyCart