const ejsMate = require('ejs-mate')
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require ('path')
const app = express();
const wrapAsync = require('./utils/wrapAsync')


// modelss
const Comment = require('./models/comment')
// schemas 
const {commentSchema} = require('./schemas/comment')

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



const validateComment = (req,res,next)=>{
    const {error} = commentSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        console.log(error)
        return next(new ErrorHandler(error.details[0].message,400))
    }else{
        next()
    }
}

app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/pages',require('./routes/motor'))


// searching and filtering
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  
  app.get('/pages/search', wrapAsync(async (req, res) => {
      let motors;
  
      // Handling search
      if (req.query.search) {
        const searchRegex = new RegExp(escapeRegex(req.query.search), 'gi');
        motors = await Motor.find({ title: searchRegex });
      } else {
        // Handling filter
        if (req.query.sortBy === 'terbaru') {
          motors = await Motor.find().sort({ dateTime: -1 });
        } else if (req.query.sortBy === 'terlama') {
          motors = await Motor.find().sort({ dateTime: 1 });
        } else {
          motors = await Motor.find();
        }
      }
  
      res.render('pages/index', { motors });
    })
  );


//bagian komentar
app.post('/pages/:id/comments',validateComment, wrapAsync(async( req,res)=>{
    const comment = new Comment(req.body.comment);
    const motor = await Motor.findById(req.params.id);
    motor.comments.push(comment);
    await comment.save();
    await motor.save()
    res.redirect(`/pages/${req.params.id}`)

}))

// menghapus komentar 
app.delete('/pages/:motor_id/comments/:comment_id', wrapAsync(async (req, res) => {
    const { motor_id, comment_id } = req.params;
    await Motor.findByIdAndUpdate(motor_id, { $pull: { comments: { _id: comment_id } } });
    await Comment.findByIdAndDelete(comment_id);
    res.redirect(`/pages/${motor_id}`);
}));



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

