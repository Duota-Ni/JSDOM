const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')

const app = new Koa()
app.use(static(__dirname + "/static"))

const router = new Router()

router.options("/*", (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:3000")
  ctx.set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , mytest");
  // ctx.set("Access-Control-Max-Age",600);
  // ctx.body = ""
})

router.get("/", (ctx, next) => {
  ctx.body = "4000端口"
})

router.post("/getData", (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","http://localhost:3000");
  ctx.body = "4000端口的getData"
})

app.use(router.routes())
app.listen(4000)
