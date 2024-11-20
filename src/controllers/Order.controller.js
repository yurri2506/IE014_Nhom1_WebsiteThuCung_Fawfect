const OrderService = require("../services/Order.service");

const createOrder = async (req, res) => {
  try {
    const {
      discount_ids,
      user_id,
      shipping_fee,
      shipping_address,
      products,
      order_payment,
      order_delivery_date,
      estimated_delivery_date,
      order_note,
    } = req.body;

    const newOrderData = {
      discount_ids,
      user_id,
      shipping_fee,
      shipping_address,
      products,
      order_payment,
      order_delivery_date,
      estimated_delivery_date,
      order_note,
    };
    const response = await OrderService.createOrder(newOrderData);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Lỗi khi tạo đơn hàng" });
  }
};

const previewOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const response = await OrderService.previewOrder(newOrder);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Đã xảy ra lỗi khi xem trước đơn hàng",
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedData = req.body;
    const response = await OrderService.updateOrder(orderId, updatedData);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Đã xảy ra lỗi khi cập nhật đơn hàng",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.id;
    const response = await OrderService.getOrderDetails(orderId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Đã xảy ra lỗi khi lấy thông tin đơn hàng",
    });
  }
}

const getOrdersByStatus = async (req, res) => {
  try {
    const { orderStatus, userId } = req.query; // Lấy dữ liệu từ query parameters

    // Gọi service để lấy dữ liệu
    const result = await OrderService.getOrdersByStatus(orderStatus, userId);

    // Trả về thành công
    res.status(200).json(result);
  } catch (error) {
    // Xử lý lỗi và trả về phản hồi
    res.status(400).json({
      status: "ERR",
      message: error.message || "Đã xảy ra lỗi trong quá trình xử lý lấy đơn hàng",
    });
  }
};
module.exports = {
  createOrder,
  updateOrder,
  getOrderDetails,
  // getUserOrders,
  previewOrder,
  getOrdersByStatus,
};
