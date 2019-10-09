const Router = require('koa-router')  //引入
const router = new Router() //实例化
// const {HttpException,ParameterException} = require('../../../core/http-exception')

const {PositiveIntegerValidator} = require('../../validators/validator')

//abc 
router.post('/v1/:id/classic/latest',(ctx,next)=>{   
   
    //User (账号 密码 昵名 email 手机)



    //获取参数 校验参数 防止非法参数 给客户端明确提示错在什么地方
    const path = ctx.params //获取到id
    const query = ctx.request.query //获取到？后面参数
    const headers = ctx.request.header  
    const body = ctx.request.body    
    
    const v = new PositiveIntegerValidator().validate(ctx)
    const id = v.get('path.id')
    ctx.body='success'

    // //校验器 TP5 Python WTForms LinValidator
    // if(true){
    //     const error = new global.errs.ParameterException()
    //     throw error
    // }
    // ctx.body={ 
    //     key:'classic'  
    // }
}) 
 
module.exports = router

