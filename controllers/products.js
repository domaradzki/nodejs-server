const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Shop"
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/"
  });
};
