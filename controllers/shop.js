const Product = require('../models/product');
const Cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req,res)=>{
  //productId in the params because we are using productId in shop.js route
  const prodId = req.params.productId;
  Product.findById(prodId,product =>{
    res.render('shop/product-detail',{
      //left product indicates the parameter used by html and right one 
      //is the actual product details
      product:product,
      pageTitle:product.title,
      path:'/products'
    })
  })
  
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart =(req,res)=>{
  const prodId = req.body.productId;
  Product.findById(prodId,(product)=>{
    //console.log(product);
    Cart.addProduct(prodId,product.price); 
  })
  res.redirect('/cart')
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};