const express = require('express')
const wrapAsync = require('../utils/wrapAsync')
const ErrorHandler = require('../utils/ErrorHandler')
// model
const Motor = require('../models/motor')
// schema 
const {motorSchema} = require('../schemas/motor')

const router = express.Router();

const validateMotor = (req,res,next)=>{
    const {error} = motorSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        console.log(error)
        return next(new ErrorHandler(error.details[0].message,400))
    }else{
        next()
    }
}


router.get('/', wrapAsync(async(req,res)=>{
    const motors = await Motor.find()
    res.render('pages/index', {motors})
}))

// create/form 
router.get('/post', (req,res)=>{
    res.render('pages/post')
})

// submit post
router.post('/', validateMotor, wrapAsync(async(req,res,next)=>{
    const motor = new Motor(req.body.motor)
    await motor.save()
    res.redirect('/pages')
    
}))

// details
router.get('/:id', wrapAsync(async (req,res)=>{
    const {id} = req.params
    const motor = await Motor.findById(id).populate('comments')
    res.render('pages/detail',{motor})

}))

// menuju ke halaman edit 
router.get('/:id/editForm',wrapAsync(async(req,res)=>{
    const motor = await Motor.findById(req.params.id);
    res.render('pages/editForm', {motor})
}))
// mengirim dari halaman edit
router.put('/:id',validateMotor,wrapAsync(async(req,res)=>{
    const {id} = req.params
    const motor = await Motor.findByIdAndUpdate(id,{...req.body.motor})
    res.redirect('/pages')

}))

// delete motor 
router.delete('/:id',wrapAsync(async(req,res)=>{
    await Motor.findByIdAndDelete(req.params.id)
    res.redirect('/pages')
}))

module.exports= router;