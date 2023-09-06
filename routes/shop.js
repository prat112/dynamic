const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//: -> this signals that it should not look for a route,it can be anything
router.get('/products/:productId',shopController.getProduct);
//router.get('/products/delete') -> this route should be above the dynamic route

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;