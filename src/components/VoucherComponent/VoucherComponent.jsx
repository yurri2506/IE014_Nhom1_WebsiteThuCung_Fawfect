import React, { useState } from "react";
import styles from "./VoucherComponent.module.scss";
import clsx from "clsx";
import { RiCoupon3Line } from "react-icons/ri";

const VoucherComponent = ({ coupon, onChange, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("shipping");
    const [selectedVouchers, setSelectedVouchers] = useState({
        shipping: null,
        product: null,
    });

    const vouchers = {
        shipping: [
            {
                id: 1,
                code: "SHIPFREE20",
                description: "Miễn phí vận chuyển cho đơn trên 100k",
                expiration: "2024-12-31",
                minOrder: 100000,
                productRequirement: null,
            },
            {
                id: 2,
                code: "SHIP30K",
                description: "Giảm 30k phí vận chuyển",
                expiration: "2024-12-25",
                minOrder: 200000,
                productRequirement: null,
            },
        ],
        product: [
            {
                id: 3,
                code: "SAVE10",
                description: "Giảm 10% giá trị đơn hàng",
                expiration: "2024-12-20",
                minOrder: 150000,
                productRequirement: "Áp dụng cho sản phẩm điện tử",
            },
            {
                id: 4,
                code: "DISCOUNT50",
                description: "Giảm 50k cho đơn hàng trên 300k",
                expiration: "2024-12-15",
                minOrder: 300000,
                productRequirement: "Áp dụng cho sản phẩm thời trang",
            },
        ],
    };

    const toggleVoucherSelection = (voucher, type) => {
        setSelectedVouchers((prev) => ({
            ...prev,
            [type]: prev[type]?.id === voucher.id ? null : voucher,
        }));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button className={styles.openModalBtn} onClick={openModal}>
                Chọn Voucher
            </button>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>Chọn Voucher</h2>
                            <button className={styles.closeModalBtn} onClick={closeModal}>
                                ×
                            </button>
                        </div>

                        <div className={styles.voucherInput}>
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá..."
                                value={coupon}
                                onChange={onChange}
                            />
                            <span><RiCoupon3Line /></span>
                            <button className={styles.btn} onClick={onClick}>Áp dụng</button>
                        </div>
                        <div className={styles.tabs}>
                            <button
                                className={clsx(styles.tabBtn, {
                                    [styles.active]: activeTab === "shipping",
                                })}
                                onClick={() => setActiveTab("shipping")}
                            >
                                Vận chuyển
                            </button>
                            <button
                                className={clsx(styles.tabBtn, {
                                    [styles.active]: activeTab === "product",
                                })}
                                onClick={() => setActiveTab("product")}
                            >
                                Sản phẩm
                            </button>
                        </div>

                        <div className={styles.tabContent}>
                            {vouchers[activeTab].map((voucher) => (
                                <div
                                    key={voucher.id}
                                    className={clsx(styles.voucherCard, {
                                        [styles.selected]:
                                            selectedVouchers[activeTab]?.id === voucher.id,
                                    })}
                                    onClick={() => toggleVoucherSelection(voucher, activeTab)}
                                >
                                    <h3>{voucher.code}</h3>
                                    <p>{voucher.description}</p>
                                    <p>{voucher.expiration}</p>
                                    <p>Đơn tối thiểu {voucher.minOrder.toLocaleString()} VNĐ</p>
                                    <p>{voucher.productRequirement}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            className={styles.applyBtn}
                            onClick={closeModal}
                        >
                            Áp dụng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoucherComponent;
