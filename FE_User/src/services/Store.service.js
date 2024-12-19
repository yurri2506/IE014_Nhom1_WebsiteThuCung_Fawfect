const API_URL = "http://localhost:3001/api/store";

export const getDetailStore = async () => {
    try {
      const response = await fetch(`${API_URL}/get-detail`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch detail store");
      }
  
      const data = await response.json();
      //console.log(data.data);
      return data.data; // Trả về dữ liệu nếu thành công
    } catch (error) {
      console.error("Error in get detail store:", error.message || error);
      throw error; // Ném lỗi để component sử dụng tiếp tục xử lý
    }
  };
  
