// const Product = require("../models/user");

// console.log(adminData.products);
// console.log(adminData.products.length);

exports.getIndex = (req, res, next) => {
    res.render("user/index");
};

// exports.getIndex = (req, res, next) => {
//     res.render("user/index", {
//       prods: products,
//       pageTitle: "",
//       path: "/"
//     });
// };