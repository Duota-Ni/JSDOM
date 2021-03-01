const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const koaServerHttpProxy = require("koa-server-http-proxy");

const app = new Koa()
app.use(static(__dirname + "/static"))
app.use(koaServerHttpProxy("/api", {
  target: "http://localhost:4000",
  pathRewrite: {'^/api': ""}
}))
const router = new Router()

router.get("/", (ctx, next) => {
  ctx.body = "proxy代理"
})

router.get("/proxy",(ctx,next) => {
  ctx.body = "proxy返回的数据"
})

app.use(router.routes())
app.listen(5000)
