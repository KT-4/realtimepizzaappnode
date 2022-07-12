require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const database = require('./serverconnection/db')
const pizzaRoute = require('./routes/web');
const session = require('express-session');
const flash = require('express-flash')
const MongoStore  = require('connect-mongo')







//jason
app.use(express.json());


//assets
app.use(express.static('public'))
//database connection
const url = 'mongodb://localhost:27017/pizzaDB';
mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true

});
mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });


 
app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:1000 * 60 * 60 * 24},//24 hours
  
  store:MongoStore.create({
      mongoUrl:url,
      stringify:false,
  })
  
 
}))

//flash use session
app.use(flash())


//set templae engine

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))

app.set('view engine','ejs')


//require router file
app.use('/',pizzaRoute)






app.listen(port,()=>{
    console.log(`server is running ${port}`)
})