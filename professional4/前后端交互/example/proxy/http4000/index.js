const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')

const app = new Koa()
app.use(static(__dirname + "/static"))

const router = new Router()

router.get("/", (ctx, next) => {
  ctx.body = "4000端口"
})

router.get("/proxy",(ctx,next) => {
  ctx.body = "4000端口proxy返回的数据"
})


app.use(router.routes())
app.listen(4000)
