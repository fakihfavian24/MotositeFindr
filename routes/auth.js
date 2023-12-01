const express = require('express')
const router = express();
const User = require ('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const { route } = require('./motor');
const passport = require('passport')


// register
router.get('/register', async(req,res)=>{
    res.render('auth/register')
    })

router.post('/register',wrapAsync(async(req,res)=>{
    try{
        const {email,username,password} = req.body;
        const user = new User({email,username});
        await User.register(user, password)
        req.flash('success_msg','register berhasil')
        res.redirect('/login')
    }catch(error){
        req.flash('error_msg',error.message)
        res.redirect('/register')

    }
}))


router.get ('/login',(req,res)=>{
    res.render('auth/login')
} )

router.post('/login',passport.authenticate('local',{
    failureRedirect:'/login',
    failureFlash: {
        type: 'error_msg',
        msg: 'masukan password atau Usrename dengan benar'
    }
}),(req,res)=>{
   req.flash('success_msg', 'Selamat! Anda berhasil Login');
   res.redirect('/pages')
}

)

router.post('/logout',(req,res)=>{
    req.logout(function(err){
        if (err){return next(err)}
        req.flash('success_msg','anda berhasil logout')
        res.redirect('pages')
    })
})

    module.exports = router