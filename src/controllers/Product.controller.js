const ProductService = require("../services/Product.service");
const multer = require("multer");
const slugify = require("slugify");
const crypto = require("crypto");

// Cấu hình Multer để lưu file vào bộ nhớ tạm
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFields = upload.fields([
  { name: "product_images", maxCount: 10 },
  { name: "variant_img_0", maxCount: 1 },
]);

const createProduct = async (req, res) => {
  try {
    const {
      product_title,
      product_category,
      product_description,
      product_display,
      product_famous,
      product_rate = 0,
      product_selled,
      product_brand,
      product_percent_discount,
      variants,
    } = req.body;

    const slug = product_title
      ? slugify(product_title, { lower: true, strict: true })
      : crypto.randomBytes(6).toString("hex");

    // Chuyển đổi `product_images` từ file sang chuỗi Base64
    const product_images =
      req.files["product_images"]?.map((file) => {
        return file.buffer.toString("base64");
      }) || [];

    // Chuyển đổi `variant_img` cho từng biến thể
    const parsedVariants = JSON.parse(variants);
    const updatedVariants = parsedVariants.map((variant, index) => {
      const variantFile = req.files[`variant_img_${index}`]?.[0];
      if (variantFile) {
        variant.variant_img = variantFile.buffer.toString("base64");
      }
      return variant;
    });

    const newProductData = {
      product_title,
      product_category,
      product_images,
      product_description,
      product_display,
      product_famous,
      product_rate,
      product_selled,
      product_brand,
      product_percent_discount,
      variants: updatedVariants,
      slug,
    };

    const response = await ProductService.createProduct(newProductData);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Lỗi khi tạo sản phẩm" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }

    // Xử lý ảnh sản phẩm mới nếu có
    let product_images = req.files["product_images"]?.map((file) => {
      return file.buffer.toString("base64");
    });

    // Nếu không có ảnh mới, giữ nguyên ảnh cũ từ cơ sở dữ liệu
    if (!product_images || product_images.length === 0) {
      const existingProduct = await ProductService.getProductById(productId);
      product_images = existingProduct.product_images;
    }

    // Xử lý cập nhật ảnh cho các biến thể nếu có
    const parsedVariants = data.variants ? JSON.parse(data.variants) : [];
    const updatedVariants = parsedVariants.map((variant, index) => {
      const variantFile = req.files[`variant_img_${index}`]?.[0];
      if (variantFile) {
        variant.variant_img = variantFile.buffer.toString("base64");
      }
      return variant;
    });

    // Xây dựng dữ liệu cập nhật
    const updateData = {
      ...req.body,
      product_images,
      variants: updatedVariants
    };

    const response = await ProductService.updateProduct(productId, updateData);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({
      status: "ERR",
      message: e.message || "Lỗi khi cập nhật sản phẩm",
    });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({
        status: "ERR",
        message: "The productId is required",
      });
    }

    // Lấy `user.id` từ `res.locals` và truyền xuống service
    // const userId = res.locals.user.id;
    const response = await ProductService.deleteProduct(productId);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({
      status: "ERR",
      message: e.message || "An error occurred while deleting the product.",
    });
  }
};

const deleteManyProduct = async (req, res) => {
  try {
    const ids = req.body.ids;
    if (!ids) {
      return res.status(200).json({
        status: "ERR",
        message: "The ids is required",
      });
    }
    const response = await ProductService.deleteManyProduct(ids);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }
    const response = await ProductService.getDetailsProduct(productId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const { limit, page, sort, filter, search } = req.query;

    // Parse filter nếu có filter
    const parsedFilter = filter ? JSON.parse(filter) : {};

    // Truyền thêm search (từ khóa tìm kiếm)
    const response = await ProductService.getAllProduct(
      Number(limit) || null,
      Number(page) || 0,
      sort,
      parsedFilter,
      search
    );

    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e.message,
    });
  }
};


module.exports = {
  createProduct,
  uploadFields,
  updateProduct,
  deleteProduct,
  deleteManyProduct,
  getDetailsProduct,
  getAllProduct,
};