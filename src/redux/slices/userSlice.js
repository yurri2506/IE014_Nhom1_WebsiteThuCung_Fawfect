import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Lưu thông tin người dùng (id, name, avatar, etc.)
  isAuthenticated: false, // Trạng thái đăng nhập
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Cập nhật thông tin người dùng sau khi đăng nhập
    updateUser: (state, action) => {
      state.user = action.payload; // Ghi nhận thông tin người dùng
      state.isAuthenticated = true; // Đánh dấu là đã đăng nhập
    },
    // Đăng xuất người dùng
    logoutUser: (state) => {
      state.user = null; // Xóa thông tin người dùng
      state.isAuthenticated = false; // Đánh dấu trạng thái chưa đăng nhập
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;