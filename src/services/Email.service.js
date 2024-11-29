const API_URL = "http://localhost:3001/api/user";

export const sendOtp = async (email) => {
  try {
    const response = await fetch(`${API_URL}/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch send OTP");
    }

    const data = await response.json();
    console.log(data);
    return data; // Trả về dữ liệu nếu thành công
  } catch (error) {
    console.error("Error:", error.message || error);
    throw error; // Ném lỗi để component sử dụng tiếp tục xử lý
  }
};


export const verifyOtp = async (email, otp) => {
    try {
      const response = await fetch(`${API_URL}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch verify OTP");
      }
  
      const data = await response.json();
      console.log(data);
      return data; // Trả về dữ liệu nếu thành công
    } catch (error) {
      console.error("Error:", error.message || error);
      throw error; // Ném lỗi để component sử dụng tiếp tục xử lý
    }
  };
  