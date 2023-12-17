const mongoose = require('mongoose')
const Comment = require("./comment")
const Schema = mongoose.Schema;

const motorSchema = new Schema ({
    title: String,
    licensePlate: String,
    model:String,
    description: String,
    missingDate: {
      type: String,
      default: () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      },
      },
      imageURL: [{
        type: String}],

    author : {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
    comments:[{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
  postDate:
    
  {
    type: String,
    default: () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    },

});

motorSchema.post(`findOneAndDelete`, async function(doc) {
  if(doc){
    await Comment.deleteMany({_id:{$in:doc.comments}})
  }
})
module.exports = mongoose.model ('Motor',motorSchema)