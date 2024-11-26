import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './CartItemComponent.module.scss'

const CartItemComponent = ({ item, onQuantityChange, onRemove, onCheck, isChecked, isInMobile }) => {
    return (
      <div className={styles.carts}>
        <input 
          type="checkbox" 
          onChange={() => onCheck(item.id)} 
          checked={isChecked} 
        />
        <div className={styles.img}>
          <img src={item.img} alt={item.name} />
        </div>
        <div className={styles.details}>
          <p>{item.name}</p>
          <div className={styles.price}>
            <p>{isInMobile ? 'đ' : ''}{item.oldPrice.toLocaleString()}{isInMobile ? '' : 'VNĐ'}</p>
            <p>{isInMobile ? 'đ' : ''}{item.price.toLocaleString()}{isInMobile ? '' : 'VNĐ'}</p>
          </div>
        </div>
        <div className={styles.changeItem}>
          <button onClick={() => onRemove(item.id)}>
            <FaRegTrashAlt />
          </button>
          <div className={styles.quantity}>
            <button onClick={() => onQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
          </div>
        </div>
    </div>
      );
}

export default CartItemComponent