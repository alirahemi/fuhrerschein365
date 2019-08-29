const Database = require("../models/db");

// console.log(adminData.products);
// console.log(adminData.products.length);

exports.getAdminPanel = (req, res, next) => {
  res.render("admin/adminPanel", {
    // prods: rows,
    pageTitle: "پنل مدیریت"
    // path: '/admin/adminPanel'
  });
};

exports.postAddRecord = (req, res, next) => {
    const deword = req.body.deword;
    const pos = req.body.pos;
    const faword = req.body.faword;
    const imgsrc = req.body.imgsrc;

  Database.findByWord(deword)
    .then(([result]) => {
      if (result[0]) {
        res.render("admin/adminPanel", {
          result: "واژه از قبل ذخیره شده است",
          pageTitle: "ذخیره سازی ناموفق"
        });
      } else {
        const database = new Database(null, pos, deword, faword, imgsrc);
        database
          .save()
          .then(() => {
            res.render("admin/adminPanel", {
              result: "رکورد با موفقیت ثبت شد",
              pageTitle: "ذخیره سازی موفق"
            });
          })
          .catch(err => {
            res.render("admin/adminPanel", {
              pageTitle: "خطا در ثبت اطلاعات"
            });
            console.log(err);
          });
      }
    })
    .catch();
};
