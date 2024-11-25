import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_name: "",
  user_email: "",
  user_phone: "",
  user_address: "",
  user_avt_img: "",
  access_token: localStorage.getItem("access_token") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
  isAuthenticated: !!localStorage.getItem("access_token"), // Kiểm tra token có tồn tại
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const updatedState = {
        ...state,
        ...action.payload, // Cập nhật dữ liệu người dùng
        isAuthenticated: true,
      };

      // Lưu accessToken và refreshToken vào localStorage
      if (action.payload.access_token) {
        localStorage.setItem("access_token", action.payload.access_token);
      }
      if (action.payload.refreshToken) {
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      }

      return updatedState;
    },
    resetUser: (state) => {
      // Chỉ xóa thông tin người dùng, giữ lại token
      return {
        ...state,
        user_name: "",
        user_email: "",
        user_phone: "",
        user_address: "",
        user_avt_img: "",
        isAuthenticated: false,
      };
    },
    logout: () => {
      // Xóa toàn bộ thông tin và token khỏi state và localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refreshToken");
      return initialState;
    },
  },
});

export const { updateUser, resetUser, logout } = userSlice.actions;
export default userSlice.reducer;
