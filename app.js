/**
 * 好的代码：便于他人阅读 利于维护 提高编程效率
 * //http 动词 GET（查询） POST(新增) PUT(更新) delete(删除)
 * 根据数据类型划分主题 渐进式 核心主题 
 * 抽象概念 思考 model
 * api 版本变更 客户端兼容性
 * nodemon 自动重启(npm i nodemon -g)
 * 如何自动加载v1目录下模块
 */
const Koa = require('koa')
const parser = require('koa-bodyparser') //引入获取body参数的中间件
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

// require('./app/models/user')

const app = new Koa()
 
app.use(catchError)
app.use(parser()) 

// const path =  process.cwd()
// console.log('path',path)

InitManager.initCore(app)

app.listen(3000)
   