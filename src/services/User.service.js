
// // src/services/userService.js
// import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3001/api/user";

// Đăng nhập 
export const loginUser = async (identifier, password) => {
  try {
    const response = await fetch(`${API_URL}/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    // Kiểm tra nếu response không OK (status không phải 2xx)
    if (!response.ok) {
      const errorData = await response.json(); // Lấy nội dung lỗi từ body
      throw errorData; // Ném lỗi để xử lý ở phần `catch`
    }

    // Nếu thành công, trả về dữ liệu
    const data = await response.json();
    return data;
  } catch (error) {
    // Lỗi sẽ được xử lý ở đây
    console.error("Error in loginUser:", error);
    throw error; // Ném lỗi để component phía trên tiếp tục xử lý
  }
};

export const refreshTokenn = async (refreshToken) => {
  try {
    const response = await fetch(`${API_URL}/refresh-token`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    console.log(data);
    return data.ACCESS_TOKEN; // Trả về accessToken mới
  } catch (error) {
    console.error("Error in refreshToken:", error);
    throw error;
  }
};

export const ensureValidToken = async (dispatch, resetUser, refreshToken) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      dispatch(resetUser());
      throw new Error("Access token not found.");
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Access token hết hạn, làm mới token
      const data = await refreshTokenn(refreshToken);
      localStorage.setItem("accessToken", data);
      return data;
    }

    return accessToken; // Trả về accessToken hợp lệ
};


export const getUserDetails = async (userId, token) => {
  try {
    const response = await fetch(`${API_URL}/getUser/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getUserDetails:", error);
    throw error;
  }
};

// dang ky bang so dien thoai
export const signUpPhone = async ( phone, name, password, confirmPassword) => {
  try {
    const response = await fetch(`${API_URL}/signUpPhone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, name, password, confirmPassword }),
    });

    // Kiểm tra nếu response không OK (status không phải 2xx)
    if (!response.ok) {
      const errorData = await response.json(); // Lấy nội dung lỗi từ body
      throw errorData; // Ném lỗi để xử lý ở phần `catch`
    }

    // Nếu thành công, trả về dữ liệu
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    // Lỗi sẽ được xử lý ở đây
    console.error("Error in loginUser:", error);
    throw error; // Ném lỗi để component phía trên tiếp tục xử lý
  }
};



export const signInGoogle = async (googleToken) => {
  try {
    const response = await fetch(`${API_URL}/sign-in-google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({googleToken}),
    });

    //console.log(response)
    // Kiểm tra nếu response không OK (status không phải 2xx)
    if (!response.ok) {
      const errorData = await response.json(); // Lấy nội dung lỗi từ body
      throw errorData; // Ném lỗi để xử lý ở phần `catch`
    }

    // Nếu thành công, trả về dữ liệu
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    // Lỗi sẽ được xử lý ở đây
    console.error("Error in loginUser:", error);
    throw error; // Ném lỗi để component phía trên tiếp tục xử lý
  }
};

