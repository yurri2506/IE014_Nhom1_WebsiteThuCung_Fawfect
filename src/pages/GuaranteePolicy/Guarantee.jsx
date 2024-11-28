import React from 'react';
import './Guarantee.css'; // Đảm bảo rằng bạn đã import file CSS

const GuaranteePolicy = () => {
  return (
    <main className="main-content">
      <section className="policy">
        <h1 className="policy__title">CHÍNH SÁCH BẢO HÀNH - PAWFECT PETCARE CENTER</h1>
        <div className="policy__content">
          <p>
            Chào mừng quý khách đến với Pawfect Petcare Center! Chúng tôi cam kết mang đến những sản phẩm và dịch vụ
            chất lượng cao nhất dành cho thú cưng của bạn. Chính sách bảo hành của chúng tôi được thiết lập để đảm bảo
            quyền lợi của khách hàng khi mua sắm tại website.
          </p>

          <h2 className="policy__heading">Sản phẩm được bảo hành</h2>
          <ul className="policy__list">
            <li>Phụ kiện và đồ dùng cho thú cưng (chuồng, lồng, đồ chơi, v.v.) được bảo hành theo chính sách của nhà sản xuất hoặc nhà cung cấp.</li>
            <li>Thức ăn, đồ ăn vặt và các sản phẩm tiêu hao không thuộc diện bảo hành, nhưng đảm bảo chất lượng và hạn sử dụng rõ ràng trên bao bì.</li>
          </ul>

          <h2 className="policy__heading">Điều kiện bảo hành</h2>
          <ul className="policy__list">
            <li>Sản phẩm còn nguyên tem bảo hành và chưa qua sửa chữa bởi bên thứ ba.</li>
            <li>Sản phẩm chỉ được bảo hành nếu gặp lỗi từ phía nhà sản xuất, bao gồm lỗi kỹ thuật hoặc lỗi chất lượng vật liệu.</li>
            <li>Thời gian bảo hành được quy định cụ thể theo từng sản phẩm và thông báo rõ ràng trên trang sản phẩm.</li>
          </ul>

          <h2 className="policy__heading">Quy trình bảo hành</h2>
          <ul className="policy__list">
            <li>Liên hệ đội ngũ chăm sóc khách hàng của Pawfect Petcare Center qua số điện thoại hoặc email để yêu cầu bảo hành.</li>
            <li>Đóng gói sản phẩm cẩn thận và gửi kèm đầy đủ chứng từ mua hàng (hóa đơn, phiếu bảo hành nếu có).</li>
            <li>Kiểm tra sản phẩm trong vòng 7-10 ngày làm việc và thông báo kết quả bảo hành qua số điện thoại hoặc email.</li>
          </ul>

          <h2 className="policy__heading">Hình thức bảo hành</h2>
          <ul className="policy__list">
            <li>Sản phẩm lỗi sẽ được sửa chữa hoặc thay thế miễn phí trong thời gian bảo hành.</li>
            <li>Nếu không thể sửa chữa hoặc thay thế, Pawfect Petcare Center sẽ hoàn tiền theo giá trị sản phẩm tại thời điểm mua.</li>
          </ul>

          <h2 className="policy__heading">Trường hợp không thuộc diện bảo hành</h2>
          <ul className="policy__list">
            <li>Sản phẩm bị hư hỏng do tác động từ bên ngoài như va đập, rơi vỡ, nước hoặc thú cưng cắn phá.</li>
            <li>Sản phẩm bị hư hỏng do sử dụng sai cách hoặc không tuân theo hướng dẫn của nhà sản xuất.</li>
            <li>Sản phẩm không còn tem bảo hành hoặc không có chứng từ mua hàng từ Pawfect Petcare Center.</li>
          </ul>

          <h2 className="policy__heading">Chính sách đổi trả</h2>
          <ul className="policy__list">
            <li>Đổi trả linh hoạt trong vòng 7 ngày kể từ khi nhận hàng nếu sản phẩm gặp lỗi hoặc không đúng với mô tả.</li>
            <li>Liên hệ để cung cấp thông tin về đơn hàng cùng lý do đổi trả.</li>
          </ul>

          <p>
            Chúng tôi cam kết luôn lắng nghe và hỗ trợ quý khách trong mọi vấn đề liên quan đến bảo hành sản phẩm. Hãy
            yên tâm mua sắm tại Pawfect Petcare Center, nơi chúng tôi luôn đặt lợi ích của bạn và thú cưng lên hàng đầu!
          </p>
          <p>Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của Pawfect Petcare Center!</p>
        </div>
      </section>
    </main>
  );
};

export default GuaranteePolicy;
