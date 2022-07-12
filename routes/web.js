const {createrealPizza,getrealPizza,cartrealpPizza,registerrealPizza,loginrealPizza,updateCart} = require('../controllers/pizzaController')
const express = require('express')
const router = express.Router()


router.post('/',createrealPizza)
router.get('/',getrealPizza)
router.get('/cart',cartrealpPizza)
router.get('/register',registerrealPizza)
router.get('/login',loginrealPizza)


router.post('/update-cart',updateCart)

module.exports = router