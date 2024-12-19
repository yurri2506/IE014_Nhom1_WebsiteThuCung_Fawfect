import React from 'react';
import styles from './FQAPage.module.scss';

const FQAPage = () => {
  return (
    <div className="grid wide">
      <div className={styles.fqa}>
        <h2 className={styles.header}>CÂU HỎI THƯỜNG GẶP</h2>
        <p className={styles.intro}>
          Chào mừng quý khách đến với **Pawfect Petcare Center**! Dưới đây là những câu hỏi thường gặp và câu trả lời chi tiết. Nếu cần thêm thông tin, hãy liên hệ ngay với chúng tôi qua các kênh hỗ trợ.
        </p>

        <div className={styles.questions}>
          {/* Question 1 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              1. Làm thế nào để đặt hàng trên Pawfect?
            </h3>
            <p className={styles.answer}>
              Để đặt hàng, quý khách chỉ cần thực hiện theo các bước sau:
            </p>
            <ul className={styles.answerList}>
              <li>Truy cập vào trang web <a href="/">pawfect.com.vn</a>.</li>
              <li>Chọn sản phẩm yêu thích và thêm vào giỏ hàng.</li>
              <li>Điền thông tin giao hàng và thanh toán để hoàn tất đơn hàng.</li>
            </ul>
          </div>

          {/* Question 2 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              2. Tôi có thể hủy đơn hàng đã đặt không?
            </h3>
            <p className={styles.answer}>
              Có, bạn có thể hủy đơn hàng nếu đơn hàng chưa được giao đi. Vui lòng liên hệ:
            </p>
            <ul className={styles.contactList}>
              <li>Hotline: <a href="tel:0382868383">0382.868.383</a></li>
              <li>Email: <a href="mailto:support@pawfect.vn">support@pawfect.vn</a></li>
            </ul>
          </div>

          {/* Question 3 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              3. Thời gian giao hàng dự kiến là bao lâu?
            </h3>
            <p className={styles.answer}>
              Thời gian giao hàng thường là từ 2-5 ngày làm việc, tùy vào địa chỉ giao hàng. Để biết thời gian chính xác, bạn có thể kiểm tra trong email xác nhận đơn hàng.
            </p>
          </div>

          {/* Question 4 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              4. Chính sách đổi trả hàng của Pawfect như thế nào?
            </h3>
            <p className={styles.answer}>
              Pawfect hỗ trợ đổi trả trong vòng 7 ngày nếu sản phẩm gặp lỗi hoặc không đúng với mô tả. Quy trình:
            </p>
            <ul className={styles.answerList}>
              <li>Giữ nguyên bao bì và tem mác sản phẩm.</li>
              <li>Liên hệ đội ngũ hỗ trợ qua hotline hoặc email.</li>
              <li>Gửi sản phẩm về địa chỉ được cung cấp để kiểm tra.</li>
            </ul>
          </div>

          {/* Question 5 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              5. Làm thế nào để theo dõi đơn hàng?
            </h3>
            <p className={styles.answer}>
              Sau khi đặt hàng, bạn sẽ nhận được mã theo dõi qua email. Hãy nhập mã này tại mục "Theo dõi đơn hàng" trên trang web của chúng tôi để xem trạng thái đơn hàng.
            </p>
          </div>

          {/* Question 6 */}
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              6. Làm sao để cập nhật thông tin cá nhân?
            </h3>
            <p className={styles.answer}>
              Bạn có thể cập nhật thông tin trong mục "Tài khoản của tôi" trên website. Nếu cần hỗ trợ, hãy liên hệ chúng tôi qua:
            </p>
            <ul className={styles.contactList}>
              <li>Hotline: <a href="tel:0382868383">0382.868.383</a></li>
              <li>Email: <a href="mailto:support@pawfect.vn">support@pawfect.vn</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <span>
            Cảm ơn bạn đã lựa chọn Pawfect Petcare Center! Hãy để chúng tôi đồng hành cùng bạn trong hành trình chăm sóc thú cưng.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FQAPage;
