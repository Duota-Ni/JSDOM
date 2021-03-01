const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')

const app = new Koa()
app.use(static(__dirname+"/static"))

const router = new Router()

router.get("/",(ctx,next) => {
  ctx.body = "3000端口"
})

router.get("/getAjax", (ctx,next) => {
  ctx.body = "3000端口的getAjax"
})

router.post("/getData", (ctx, next) => {
  ctx.body = "3000端口的getData"
})

app.use(router.routes())
app.listen(3000)