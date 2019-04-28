const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//定义user的模型
const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
})
module.exports = User = mongoose.model('User',userSchema)
// mongoose.model('User', userSchema)
