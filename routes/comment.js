const express = require('express');
const wrapAsync = require('../utils/wrapAsync')
const controllersComment = require('../controllers/comment')
const isValidObjectId = require('../middlewares/isValidObjectId')
const {authenticate} = require('../middlewares/isAuth')
const {isAuthorComment} = require('../middlewares/isAuthor')
const {validateComment} = require('../middlewares/validator')
const router = express.Router({mergeParams : true});

router.post('/comments',authenticate, isValidObjectId('/motors'),validateComment, wrapAsync(controllersComment.store));
router.delete('/comments/:comment_id',authenticate,isAuthorComment,isValidObjectId('/motors'),wrapAsync(controllersComment.destroy));

module.exports= router;