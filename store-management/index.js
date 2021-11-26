const yargs = require("yargs");

// Tạo ra các function, tương tác với file data.json
// - Get products
// - Get product by id
// - Update product
// - Delete product

const getProducts = () => {
  // Đọc file data.json để load danh sách sản phẩm
  console.log("Fetching products...");
};

// Setup gọi hàm từ terminal thông qua yargs
// Eg: node index.js get-products
yargs.command({
  command: "get-products",
  handler: getProducts,
});

// Lưu lại các câu lệnh command ở trên
yargs.parse();
