const ejsMate = require('ejs-mate')
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require ('path')
const app = express();


// connect to mngodb
mongoose.connect('mongodb://127.0.0.1/motositefinder')
.then((result)=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})

app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

// middleware untuk mendapatkan data dari body 
app.use(express.urlencoded({extended:true}));
// mengubahmethod post menjadi method yang akan di pakai melalui query 
app.use(methodOverride('_method'))



app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/pages',require('./routes/motor'))
app.use('/pages/:motor_id/comments',require('./routes/comment'))


//melihat eror sementara 
app.all('*',(req,res,next)=>{
    next(new ErrorHandler('Page not Faund',404))
})

// middleware untuk menangani suatu error
app.use((err,req,res,next)=>{
    const {statusCode = 500 } = err;
    if(!err.message) err.message = "oh no, Something went wrong"
    res.status(statusCode).render('error',{err})

})
app.listen(5000,()=>{
    console.log(`server is running on http://127.0.0.1:5000`)
})

