const Menu  = require('../app/models/menues')
     



        const createrealPizza = async (req,res)=>{
             try{
                const menu = await Menu.insertMany(req.body)
                res.send(menu)
             }catch(err){
                 res.send(err)
             }
        }
 
        const getrealPizza = async (req,res)=>{
            try{
                const pizzas = await Menu.find()
                res.render('home',{pizzas:pizzas})
                console.log(pizzas)
            }catch(err){
                res.send(err)
            }
        }


        const cartrealpPizza = ((req,res)=>{
        res.render('customer/cart')
     
 })

 const updateCart = ((req,res)=>{
  
    //check if item does not exist in car  
     return res.json({data:'All Okk'})
 })

 const registerrealPizza = ((req,res)=>{
     res.render('auth/register')
 })

 const loginrealPizza = ((req,res)=>{
     res.render('auth/login')
 })


    module.exports = {createrealPizza,getrealPizza,cartrealpPizza,registerrealPizza,loginrealPizza,updateCart}


