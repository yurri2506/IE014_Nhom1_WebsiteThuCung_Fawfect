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

      return updatedState;
    },
    resetUser: (state) => {
      return {
        initialState
      };
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
