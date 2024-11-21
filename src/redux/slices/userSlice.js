import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_name: "",
  user_email: "",
  user_phone: "",
  user_address: "",
  user_avt_img: "",
  access_token: "",
  refreshToken: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload, // Ghi đè dữ liệu người dùng
        isAuthenticated: true, // Đặt trạng thái đăng nhập thành `true`
      };
    },
    resetUser: () => initialState, // Reset thông tin người dùng
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;