const fs = require("fs");
const getProducts = () => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const products = JSON.parse(data);
  console.log(products);
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
    getProducts();
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
    getProducts();
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
    getProducts();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
