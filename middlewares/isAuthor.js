const Motor = require ("../models/motor")
const Comment = require("../models/comment")

module.exports.isAuthorMotor = async(req,res,next)=>{
    const {id} = req.params

    let motor = await Motor.findById(id);

    if (!motor.author.equals(req.user._id)){
      req.flash('error_msg', 'Not authorized');
      return (res.redirect('/pages'))
    }
    next();
}
module.exports.isAuthorComment = async (req, res, next) => {
  const { comment_id } = req.params;
  try {
    const comment = await Comment.findById(comment_id);
    if (!comment) {
      return res.status(404).json({ error: 'Komentar tidak ditemukan' });
    }
    if (!comment.author || !comment.author.equals(req.user._id)) {
      return res.status(403).json({ error: 'Anda tidak diizinkan untuk melakukan ini' });
    }
    next();
  } catch (error) {
    console.error('Error pada middleware isAuthorComment:', error.message);
    res.status(500).json({ error: 'Error Server Internal' });
  }
};