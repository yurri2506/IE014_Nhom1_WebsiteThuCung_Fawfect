import axios from "axios";

// Lấy danh sách tỉnh/thành phố
export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("https://vapi.vnappmob.com/api/province/");
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });

// Lấy danh sách quận/huyện theo tỉnh/thành phố
export const apiGetDistricts = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${provinceId}`
      );
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });

// Lấy danh sách phường/xã theo quận/huyện
export const apiGetWards = (districtId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/ward/${districtId}`
      );
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
