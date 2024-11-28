const API_URL = "http://localhost:3001/api";

export const getDetailsProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/product/get-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    console.log("Product Details:", data);
    return data;
  } catch (error) {
    console.error("Error in getDetailsProduct:", error);
    throw error;
  }
};

// Lấy sản phẩm liên quan
export const getRelatedProducts = async (id) => {
  try {
    // Sử dụng hàm getDetailsProduct để lấy thông tin chi tiết sản phẩm
    const productData = await getDetailsProduct(id);
    const product_category = String(productData.data.product_category); // Đảm bảo là chuỗi
    console.log("Product Data for Related Products:", product_category);

    // Tạo query string với filter
    const params = new URLSearchParams({
      "filter[product_category]": product_category, // Bộ lọc theo danh mục
      limit: "10", // Giới hạn số sản phẩm trả về
    });

    const response = await fetch(`${API_URL}/product/get-all-product?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const responseText = await response.text(); // Lấy phản hồi dạng chuỗi
      console.error("Error Response:", responseText); // Log phản hồi lỗi
      throw new Error(responseText);
    }

    const responseText = await response.text(); // Lấy phản hồi dưới dạng chuỗi
    const data = JSON.parse(responseText); // Thử parse thành JSON
    console.log("Related Products:", data);
    return data;
  } catch (error) {
    console.error("Error in getRelatedProducts:", error);
    throw error;
  }
};


// Lấy đánh giá sản phẩm
export const getProductFeedback = async (id) => {
  try {
    const response = await fetch(`${API_URL}/feedback/get-all/${id}`, {
      method: "GET",
      headers: {
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
    console.error("Error in getProductFeedback:", error);
    throw error;
  }
};

// Lấy danh sách sản phẩm
export const getAllProduct = async (params = {}) => {
  try {
    // Nếu params là một đối tượng rỗng, bỏ qua phần query string
    const queryString = params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}` 
      : ''; // Nếu không có tham số, query string sẽ là một chuỗi rỗng

    const url = `${API_URL}/product/get-all-product${queryString}`; // Thêm query string vào URL nếu có

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Kiểm tra mã trạng thái HTTP
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData); // Log thêm lỗi để dễ dàng debug
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    // Kiểm tra nếu dữ liệu trả về là JSON hợp lệ
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getProductsList:", error);
    throw error; // Ném lại lỗi để các nơi khác có thể xử lý
  }
};