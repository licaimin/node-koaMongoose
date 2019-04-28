const Router = require("koa-router");
const router = new Router()
const mongoose = require('mongoose')

// const User = mongoose.model('User')
const User = require('../../db/schema/user')
//test路由
router.post('register', async ctx=>{
  const data = await User.find({email:ctx.request.body.email});
  if(data.length > 0 ){
    return
  }else{
    const user = new User({
      name:ctx.request.body.name,
      email:ctx.request.body.email
    })
    await user.save().then((user)=>{
      ctx.body = user
    }).catch(err=>{
      console.log(err)
    })
  }
  
})
module.exports = router.routes()