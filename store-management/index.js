const yargs = require("yargs");
const fs = require("fs");
// Tạo ra các function, tương tác với file data.json
// - Get products
// - Get product by id
// - Update product
// - Delete product
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product");

/**
const getProducts = () => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const products = JSON.parse(data);
  return products;
};
const getProductById = (args) => {
  const products = getProducts();
  const product = products.find((product) => product.id === args.id);
  console.log(product);
  return product;
};
const addProduct = async (args) => {
  try {
    const products = await getProducts();
    const product = {
      id: products.length + 1,
      name: args.name,
    };
    products.push(product);
    await fs.writeFileSync("./data.json", JSON.stringify(products));
    console.log("Thêm sản phẩm thành công");
  } catch (err) {
    console.log(err);
  }
};
const updateProduct = async (args) => {
  try {
    const products = await getProducts();
    const product = products.find((product) => product.id === args.id);
    product.name = args.name;
    await fs.writeFileSync("./data.json", JSON.stringify(products));
    console.log("Cập nhật sản phẩm thành công");
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async (args) => {
  try {
    const products = await getProducts();
    const newProducts = products.filter((product) => product.id !== args.id);
    await fs.writeFileSync("./data.json", JSON.stringify(newProducts));
    console.log("Xóa sản phẩm thành công");
  } catch (err) {
    console.log(err);
  }
};
*/

// Setup gọi hàm từ terminal thông qua yargs
// Eg: node index.js get-products
yargs.command({
  command: "get-products",
  builder: {},
  handler: (arg) => {
    getProducts();
  },
});

yargs.command({
  command: "get-product-by-id",
  builder: {
    id: {
      type: String,
      demandOption: true,
    },
  },
  handler: getProductById,
});

yargs.command({
  command: "add-product",
  builder: {
    name: {
      type: String,
      demandOption: true,
    },
  },
  handler: addProduct,
});

yargs.command({
  command: "update-product",
  builder: {
    id: {
      type: String,
      demandOption: true,
    },
    name: {
      type: String,
      demandOption: true,
    },
  },
  handler: updateProduct,
});

yargs.command({
  command: "delete-product",
  builder: {
    id: {
      type: String,
      demandOption: true,
    },
  },
  handler: deleteProduct,
});

// Lưu lại các câu lệnh command ở trên
yargs.parse();
