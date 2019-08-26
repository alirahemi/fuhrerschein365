const Database = require("../models/db");

// console.log(adminData.products);
// console.log(adminData.products.length);

exports.getIndex = (req, res, next) => {
    Database.fetchAll()
    .then(([rows, fieldData]) => {
        res.render("user/index", {
            prods: rows,
            pageTitle: 'صفحه اصلی گواهینامه',
            path: '/'
        });
    })
    .catch(err => console.log(err));
};

exports.getDB = (req, res, next) => {
    Database.fetchAll()
    .then(([rows, fieldData]) => {
        res.render("user/dbFetchAll", {
            prods: rows,
            pageTitle: 'نمایش تمام اطلاعات بانک اطلاعاتی',
            path: '/user/dbFetchAll'
        });
    })
    .catch(err => console.log(err));
};

// exports.getIndex = (req, res, next) => {
//     res.render("user/index", {
//       prods: products,
//       pageTitle: "",
//       path: "/"
//     });
// };