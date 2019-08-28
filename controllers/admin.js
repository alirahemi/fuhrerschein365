const Database = require("../models/db");

// console.log(adminData.products);
// console.log(adminData.products.length);

exports.getAdminPanel = (req, res, next) => {
    
        res.render("admin/adminPanel", {
            // prods: rows,
            pageTitle: 'پنل مدیریت',
            // path: '/admin/adminPanel'
        });
    
};

exports.postAddRecord = (req, res, next) => {
    // const id = req.body.id;
    const pos = req.body.pos;
    const deword = req.body.deword;
    const faword = req.body.faword;
    const imgsrc = req.body.imgsrc;
    const database = new Database (null, pos, deword, faword, imgsrc);
    database.save()
    .then(()=>{
        res.render("admin/adminPanel", {
            pageTitle : 'رکورد با موفقیت ثبت شد'
        });
    })
    .catch(err => {
        res.render("admin/adminPanel", {
            pageTitle : 'خطا در ثبت اطلاعات'
        });
        console.log(err)});
}

