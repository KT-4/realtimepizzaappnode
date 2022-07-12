const axios = require('axios')
let addToCart = document.querySelectorAll('.add-to-cart')

 updateCart = (pizza)=>{
    axios.post('/update-cart',pizza).then(res =>{
        console.log(res)
    })
 }


addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        // console.log(pizza)
    })
})