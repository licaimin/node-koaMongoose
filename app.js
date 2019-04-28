//引入 koa koa-router
const koa = require('koa');
const Router = require ('koa-router')
const bodyParser = require('koa-bodyparser')
const db = require( './db/db').mongoURI

//引入路由
const users = require('./router/api/user')

//实例化
const app = new koa();
const router = new Router()
  //解析前端信息
app.use(bodyParser())
//连接数据库
const mongoose = require('mongoose')
mongoose.connect(db,{ useNewUrlParser: true } ).then(()=>{
  console.log('mongodb connected')
}).catch((err)=>{
  console.log('dbERR',err)
})

// 路由配置
router.use('/api/users/',users)

//配置路由
app.use(router.routes()).use(router.allowedMethods());

//配置端口
const port = process.env.PORT || 5000

//启动
app.listen(port,()=>{
  console.log(`server started on ${port} `)
})
