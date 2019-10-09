const Router = require('koa-router')  //引入
const router = new Router() //实例化

router.get('/v1/book/latest',(ctx,next)=>{
    ctx.body={
        key:'book'
    }
})

module.exports = router