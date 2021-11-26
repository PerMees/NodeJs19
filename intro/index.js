// console.log('Hello Nodejs')

// === 1. Những biến global trong Nodejs ===

// Global: Gần tương tự với window trên browser nhưng cho nodejs
// console.log(global)

// __dirname: là 1 chuỗi cung cấp đường dẫn tới thư mục làm việc của tệp
// console.log(__dirname)

// __filename: tương tự __dirname nhưng trả ra thêm tên file
// console.log(__filename)

// process
// console.log(process)
// console.log(process.argv.splice(2))

// === 2. Modules ===

// commonjs: require exports
// let { getName, getScore } = require("./demo.js");

// ES Module: import export
// Để sử dụng được ES module ta đổi đuôi file thành .mjs
// import getScore from './demo.mjs'

// let name = getName()
// console.log(name)

// let score = getScore();
// console.log(score);

// === 3. File system ===
// commonjs
// let fs = require("fs");

// Nếu sử dụng ES module, không sử dụng được __dirname ta sử dụng import.meta.url thay thế
// import * as fs from 'fs'
// console.log(import.meta.url)
// console.log(fs);

// Chạy đồng bộ, code bị block cho tới khi tạo file xong
// fs.appendFileSync(`${__dirname}/message.txt`, "Hello NodeJS")
// console.log('Thêm file sync thành công')

// Chạy bất đồng bộ, sử dụng callback ở tham số thứ 3
// fs.appendFile(`${__dirname}/message.txt`, "Hello worlds", () => {
//   console.log("Thêm file async thành công");
// });

// fs.writeFile(`${__dirname}/message.txt`, "Xin chào cybersoft", () => {
//   console.log("Write file async thành công");
// });

// fs.readFile(`${__dirname}/message.txt`, { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     // Nếu không set encoding: "utf-8" thì data là Buffer => dùng data.toString() để chuyển thành string
//   }
// });

// Thử thách: Tìm cách thêm nội dung vào file chứ không ghi đè

// === 4. Error handling ===
// const fs = require("fs/promises");

// Tạo ra 1 trình lắng nghe lỗi global, tất cả những lỗi không được xử lý sẽ tự động nhảy vào đây
// process
//   .on("uncaughtException", (err) => {
//     console.log("uncaughtException");
//     console.log(err);
//   })
//   .on("unhandledRejection", (err) => {
//     console.log("unhandledRejection");
//     console.log(err);
//   });

// const readText = async () => {
//   try {
//     const result = await fs.readFile(`${__dirname}/messag.txt`, "utf-8");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

//   // Nếu không tự xử lý lỗi, lỗi sẽ được ném vào unhandledRejection của process.on
//   // const result = await fs.readFile(`${__dirname}/messag.txt`, "utf-8");
//   // console.log(result);
// };

// readText();

// === 5. Packages ===
// let { isEmpty } = require("lodash");

// console.log(isEmpty({}));










