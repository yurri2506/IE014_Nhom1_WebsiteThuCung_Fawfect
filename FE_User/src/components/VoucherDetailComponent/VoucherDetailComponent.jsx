import React from 'react';
import styles from './VoucherDetailComponent.module.scss';
import clsx from 'clsx';

const VoucherDetailComponent = ({ voucher, type }) => {
  if (!voucher) return null;

  return (
    <div className={styles.voucherDetail}>
      <div >
        <div
          className={clsx(
            styles.content,
            type === 'shipping' ? styles.shipping : styles.product
          )}
        >
          {type === 'shipping'
            ? 'Miễn phí vận chuyển'
            : `- ${voucher.minOrder.toLocaleString()}đ`}
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailComponent;
