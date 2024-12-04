import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  orderItemsSlected: [],
  shippingAddress: {},
  paymentMethod: "",
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0, 
  totalPrice: 0,
  user: "",
  isPaid: false,
  paidAt: "",
  isDelivered: false,
  deliveredAt: "",
  isSucessOrder: false,
};

export const orderSlide = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      const { orderItem } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === orderItem.product
      );
      if (itemOrder) {
        if (itemOrder.amount <= itemOrder.countInstock) {
          itemOrder.amount += orderItem?.amount;
          state.isSucessOrder = true;
          state.isErrorOrder = false;
        }
      } else {
        state.orderItems.push(orderItem);
      }
    },
    resetOrder: (state) => {
      state.isSucessOrder = false;
    },
    increaseAmount: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === idProduct
      );
      const itemOrderSelected = state?.orderItemsSlected?.find(
        (item) => item?.product === idProduct
      );
      itemOrder.amount++;
      if (itemOrderSelected) {
        itemOrderSelected.amount++;
      }
    },
    decreaseAmount: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === idProduct
      );
      const itemOrderSelected = state?.orderItemsSlected?.find(
        (item) => item?.product === idProduct
      );
      itemOrder.amount--;
      if (itemOrderSelected) {
        itemOrderSelected.amount--;
      }
    },
    removeOrderProduct: (state, action) => {
      const { idProduct } = action.payload;

      const itemOrder = state?.orderItems?.filter(
        (item) => item?.product !== idProduct
      );
      const itemOrderSeleted = state?.orderItemsSlected?.filter(
        (item) => item?.product !== idProduct
      );

      state.orderItems = itemOrder;
      state.orderItemsSlected = itemOrderSeleted;
    },
    removeAllOrderProduct: (state, action) => {
      const { listChecked } = action.payload;

      const itemOrders = state?.orderItems?.filter(
        (item) => !listChecked.includes(item.product)
      );
      const itemOrdersSelected = state?.orderItems?.filter(
        (item) => !listChecked.includes(item.product)
      );
      state.orderItems = itemOrders;
      state.orderItemsSlected = itemOrdersSelected;
    },
    selectedOrder: (state, action) => {
      const { listChecked } = action.payload;
      const orderSelected = [];
      state.orderItems.forEach((order) => {
        if (listChecked.includes(order.product)) {
          orderSelected.push(order);
        }
      });
      state.orderItemsSlected = orderSelected;
    },
    addToCart: (state, action) => {
      const { productId, variantId, quantity, variantDetails } = action.payload;

      // Kiểm tra sản phẩm và biến thể đã tồn tại trong giỏ hàng chưa
      const existingOrderItem = state.orderItems.find(
        (item) => item.product === productId && item.variant === variantId
      );

      if (existingOrderItem) {
        // Nếu đã tồn tại, tăng số lượng lên nhưng không vượt quá số lượng tồn kho
        const maxStock = variantDetails.product_countInStock;
        existingOrderItem.amount = Math.min(
          existingOrderItem.amount + quantity,
          maxStock
        );
      } else {
        // Nếu chưa tồn tại, thêm mới vào giỏ hàng
        state.orderItems.push({
          product: productId,
          variant: variantId,
          amount: quantity,
          ...variantDetails, // Bao gồm thông tin biến thể (màu sắc, kích cỡ, v.v.)
        });
      }

      state.isSucessOrder = true;
      state.isErrorOrder = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addOrderProduct,
  increaseAmount,
  decreaseAmount,
  removeOrderProduct,
  removeAllOrderProduct,
  selectedOrder,
  resetOrder,
  addToCart,
} = orderSlide.actions;

export default orderSlide.reducer;
