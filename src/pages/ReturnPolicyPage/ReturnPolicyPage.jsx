import React from 'react'
import styles from './ReturnPolicyPage.module.scss'

const ReturnPolicyPage = () => {
  return (
    <div className='grid wide'>
        <div className={styles.guarantee}>
            <div>
                <div>
                    <h2>CHÍNH SÁCH ĐỔI - TRẢ HÀNG</h2>
                    <p>Chào mừng quý khách đến với Pawfect Petcare Center! Nhằm giúp bạn thấy thoải mái và an tâm hơn khi mua sắm tại Pawfect Petcare Center, khách hàng và thành viên Pawfect hoàn toàn có thể đổi hoặc trả sản phẩm sau khi mua hàng.</p>
                    <ul>
                        <li>
                            Đổi hàng – trả hàng miễn phí:   
                            <p>
                                - Bên mua sẽ được đổi hàng – trả hàng miễn phí trong thời gian 
                                07 (bảy) ngày kể từ khi nhận hàng hóa với điều kiện: 
                                hàng hóa chưa qua sử dụng còn nguyên tem mác, 
                                nguyên kiện và có đầy đủ hóa đơn mua hàng.
                            </p>
                        </li>
                        <li>
                            Đổi hàng – trả hàng tính phí:   
                            <p>- Đối với hàng hóa chưa qua sử dụng, còn nguyên tem mác, nguyên kiện và có đầy đủ hóa đơn mua hàng: từ ngày thứ 8 đến ngày thứ 15 sau khi nhận hàng hóa nếu bên mua có nhu cầu muốn đổi sản phẩm khác hoặc trả lại sản phẩm thì sẽ áp dụng mức phí là 15% giá trị sản phẩm.</p>
                            <p>- Đối với hàng hóa đã tháo vỏ bao bì, tem mác, trong vòng 15 ngày:</p>
                            <p className={styles.plus}>
                                + Bên mua đổi sản phẩm khác mất phí 15% giá trị sản phẩm.
                            </p>
                            <p className={styles.plus}>
                                + Bên mua Trả sản phẩm mất phí 30% giá trị sản phẩm.
                            </p>
                        </li>
                        <li>
                            Không áp dụng đổi – trả hàng:
                            <p>- Sản phẩm mua trong các chương trình khuyến mại, giảm giá, sử dụng phiếu mua hàng (voucher), điểm tích lũy.</p>
                            <p>- Sản phẩm bên mua đã nhận hàng vượt quá 15 ngày kể từ ngày ghi trên hóa đơn mua hàng.</p>
                            <p>- Sản phẩm đặt riêng theo yêu cầu (ví dụ: Thẻ tên).</p>
                        </li>
                        <li>
                            Điều khoản vận chuyển sản phẩm đổi – trả:
                            <p>- Bên mua phải tự vận chuyển sản phẩm đổi – trả đến nơi mua hàng hoặc chịu toàn bộ chi phí vận chuyển sản phẩm đổi hoặc trả theo quy định của bên bán.</p>
                        </li>
                        <li>
                            Xuất trả hóa đơn VAT:
                            <p>- Do bên bán sử dụng hoá đơn điện tử và xuất hoá đơn trong ngày bán hàng, chính vì vậy:</p>
                            <p>- Trong mọi trường hợp đổi hàng – trả hàng nếu bên mua đã lấy hóa đơn VAT (hóa đơn giá trị gia tăng) thì bên mua có trách nhiệm xuất hóa đơn VAT hoàn trả chính xác các sản phẩm cần đổi – trả cho bên bán. Nếu bên mua không xuất hóa đơn VAT lại cho bên bán của sản phẩm đổi – trả thì bên bán có quyền hủy hóa đơn có sản phẩm đổi – trả.</p>
                        </li>
                    </ul>
                </div>
                <div style={{paddingTop: "30px"}}>
                    <h2>CHÍNH SÁCH HOÀN TIỀN</h2>
                    <p>Chào mừng quý khách đến với Pawfect Petcare Center! Chúng tôi luôn mong muốn mang đến trải nghiệm mua sắm hài lòng cho quý khách. Nếu vì bất kỳ lý do nào quý khách không hài lòng với sản phẩm hoặc dịch vụ, vui lòng tham khảo các điều kiện hoàn tiền dưới đây.</p>
                    <ul>
                        <li>
                            Khách hàng được kiểm tra sản phẩm trước khi nhận hàng
                            <p>
                                - Pawfect khuyến khích khách hàng nên kiểm tra sản phẩm trước khi thanh toán, hoặc sau khi nhận được hàng nhằm giúp khách hàng an tâm và thoải mái hơn khi lựa chọn mua sắm.
                            </p>
                        </li>
                        <li>
                            Tình trạng sản phẩm được đổi hoặc trả    
                            <p>- Hàng hóa đổi/trả cần kèm theo hóa đơn mua hàng gốc từ Pawfect và còn hạn sử dụng kèm theo:</p>
                            <p className={styles.plus}>+ Còn nguyên tem, nhãn, bao bì, seal.</p>
                            <p className={styles.plus}>+ Bao bì sản phẩm không nhàu nát, xé rách, lủng lỗ.</p>
                            <p className={styles.plus}>+ Chưa qua sử dụng (mới 100%).</p>
                        </li>
                        <li>
                            Thời hạn đổi/trả sản phẩm
                            <p>- Đối với Hạt - thức ăn khô, Pate - thức ăn ướt, Xương - thức ăn vặt, Sữa bột - sữa nước, Vitamin - thuốc bổ, Thuốc xổ giun, Sữa tắm - nước hoa, Dung dịch đặc trị, Dung dịch chăm sóc, Dung dịch sát khuẩn - khử mùi, Đồ chơi các loại, Vật dụng chăm sóc:</p>
                            <p className={styles.plus}>+ Thời gian đổi/trả áp dụng: trong vòng 5 ngày kể từ khi bạn nhận được sản phẩm.</p>
                            <p className={styles.plus}>+ Các danh mục sản phẩm còn lại tuỳ thuộc vào chính sách của Pawfect.</p>
                        </li>
                        <li>
                            Phương thức đổi/trả và thời gian giải quyết
                            <p>- Khi nhận được yêu cầu đổi/trả sản phẩm, Paddy sẽ cố gắng giải quyết trong vòng 24h từ lúc nhận được yêu cầu. Khách hàng vui lòng lưu ý:</p>
                            <p className={styles.plus}>+ Bạn không tốn phí đổi/trả sản phẩm.</p>
                            <p className={styles.plus}>+ Bạn có thể đổi/trả sản phẩm tại cửa hàng (168 Trường Sa) hoặc yêu cầu dịch vụ chuyển phát, bạn thanh toán phí vận chuyển phát sinh.</p>
                            <p className={styles.plus}>+ Khi bạn yêu cầu đổi/trả sản phẩm sau thời gian đổi/trả tại, chúng tôi có thể từ chối giải quyết.</p>
                            <p>- Đơn hàng được xác nhận là lỗi sai sót (hàng hóa, số lượng, giao hàng…) từ phía Paddy, chúng tôi sẽ đổi sản phẩm cho bạn trong vòng 24-48h kể từ khi nhận được thông báo, áp dụng cho tất cả đơn hàng nội thành và các tỉnh thành khác. Chúng tôi khuyến khích bạn nên kiểm tra sản phẩm trước khi thanh toán.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <span>Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của Pawfect Petcare Center!</span>
        </div>
    </div>
  )
}

export default ReturnPolicyPage