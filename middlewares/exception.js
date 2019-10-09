 // 全局异常处理
const {HttpException} = require('../core/http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        //判断开发生产环境 不是HttpException
        const isHttpException = error instanceof HttpException
        const isDev = global.config.environment === 'dev'

        if(isDev && !isHttpException){
            throw error
        }

        //判断是已知还是未知异常
        if (isHttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
        else{
            ctx.body={
                msg:'we made a mistake 0(n_n)0 ~~',
                error_code:999,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }

    }
}

module.exports = catchError