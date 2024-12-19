const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    discount_ids: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Discount', 
      required: false 
    }],
    user_id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    shipping_fee: { type: Number, required: true, default: 0 },
    shipping_address: {
      full_name: { type: String, required: true }, 
      phone: { type: String, required: true },
      address: {
        home_address: {type: String, require: true},
        province: { type: String, required: true }, 
        district: { type: String, required: true }, 
        commune: { type: String, required: true } 
      }
    },
    products: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
        quantity: { type: Number, required: true, default: 1},  
        variant: {type: mongoose.Schema.Types.ObjectId, required: true},
      }
    ],
    order_status: { 
      type: String, 
      enum: ['Chờ xác nhận','Đang chuẩn bị hàng', 'Đang giao', 'Giao hàng thành công', 'Hoàn hàng', 'Hủy hàng'], 
      default: 'Chờ xác nhận'
    },
    order_payment: { 
      type: String, 
      enum: ['credit_card', 'paypal', 'cod'], 
      required: true,  
      default: 'cod'
    },
    order_delivery_date: { 
      type: Date 
    },
    estimated_delivery_date: { 
      type: Date 
    },
    order_total_before: { 
      type: Number, 
      required: true  
    },
    order_total_after: { 
      type: Number, 
      required: true  
    },
    order_note: { type: String }
  },
  {
    timestamps: true, 
    collection: 'Order' 
  }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
