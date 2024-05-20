// const express = require('express');
// const router = express.Router();

// let cart = [];

// router.get('/', (req, res) => {
//   res.json(cart);
// });

// router.post('/add', (req, res) => {
//   const { id, name, price, quantity } = req.body;
//   const item = cart.find(i => i.id === id);
//   if (item) {
//     item.quantity += quantity;
//   } else {
//     cart.push({ id, name, price, quantity });
//   }
//   res.json(cart);
// });

// router.post('/remove', (req, res) => {
//   const { id } = req.body;
//   cart = cart.filter(item => item.id !== id);
//   res.json(cart);
// });

// router.post('/clear', (req, res) => {
//   cart = [];
//   res.json(cart);
// });

// module.exports = router;
