const API_URL = "http://localhost:3001/api/user";

export const getAllNotification = async (_id, accessToken) => {
  try {
    const response = await fetch(`${API_URL}/notification/${_id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch notifications");
    }

    const data = await response.json();
    console.log(data);
    return data; // Trả về dữ liệu nếu thành công
  } catch (error) {
    console.error("Error in get all notification:", error.message || error);
    throw error; // Ném lỗi để component sử dụng tiếp tục xử lý
  }
};
