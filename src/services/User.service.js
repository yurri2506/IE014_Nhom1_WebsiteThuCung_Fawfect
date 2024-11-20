
import axios from "axios";

export const axiosJWT = axios.create();
// // src/services/userService.js
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3001/api/user";

// Đăng nhập 
export const loginUser = async (phone, password) => {
  const response = await fetch(`${API_URL}/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Đăng nhập không thành công.");
  }

  return response.json();
};

// Lấy thông tin người dùng
export const getUserDetails = async (userId, token) => {
  const response = await fetch(`${API_URL}/getUser/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Không thể lấy thông tin người dùng.");
  }

  return response.json();
};

// // Làm mới Access Token
// export const refreshAccessToken = async () => {
//   const refreshToken = Cookies.get("refreshToken");

//   if (!refreshToken) {
//     throw new Error("Refresh token không tồn tại.");
//   }

//   const response = await fetch(`${API_URL}/refresh`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ refreshToken }),
//   });

//   if (!response.ok) {
//     throw new Error("Không thể làm mới Access Token.");
//   }

//   return response.json();
// };

// // Kiểm tra token đã hết hạn hay chưa
// export const isTokenExpired = (token) => {
//   try {
//     const decoded = jwtDecode(token);
//     const currentTime = Date.now() / 1000; // Thời gian hiện tại (giây)
//     return decoded.exp < currentTime; // Hết hạn nếu exp < currentTime
//   } catch (error) {
//     return true; // Nếu không giải mã được, coi như token đã hết hạn
//   }
// };

// export const loginUser = async (data) => {
//   const res = await axios.post(
//     `${process.env.REACT_APP_API_KEY}/user/signIn`,
//     data
//   );
//   return res.data;
// };

// export const loginUser = async (data) => {
//   const res = await axios.post(
//     `http://localhost:3001/api/user/signIn`,
//     data
//   );
//   return res.data;
// };

export const signupUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_KEY}/user/sign-up`,
    data
  );
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_KEY}/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteUser = async (id, access_token, data) => {
  const res = await axiosJWT.delete(
    `${process.env.REACT_APP_API_KEY}/user/delete-user/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllUser = async (access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_KEY}/user/getAll`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

// export const refreshToken = async () => {
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
//         withCredentials: true
//     })
//     return res.data
// }

export const refreshToken = async (refreshToken) => {
  console.log("refreshToken", refreshToken);
  const res = await axios.post(
    `${process.env.REACT_APP_API_KEY}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/log-out`);
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_KEY}/user/update-user/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteManyUser = async (data, access_token) => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_KEY}/user/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
