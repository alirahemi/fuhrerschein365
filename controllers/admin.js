// const Database = require("../models/db");

// console.log(adminData.products);
// console.log(adminData.products.length);

exports.getAdminPanel = (req, res, next) => {
    
        res.render("admin/adminPanel", {
            // prods: rows,
            pageTitle: 'پنل مدیریت',
            // path: '/admin/adminPanel'
        });
    
};

