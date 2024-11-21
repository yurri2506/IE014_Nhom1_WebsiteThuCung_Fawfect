const API_URL = "http://localhost:3001/api/product";

// Lấy thông tin sản phẩm
export const getDetailsProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-details/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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