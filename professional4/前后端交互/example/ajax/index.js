const Koa = require("koa")
const static1 = require("koa-static")
const Router = require("koa-router")
const koaBody = require("koa-body")
const fs = require("fs")
const userData = require("./data/users.json")
const app = new Koa()
app.use(static1(__dirname + "/static"))
app.use(koaBody({
  multipart:true
}))
const router = new Router()

router.get("/", (ctx, next) => {
  ctx.body = "hello cc"
})

router.get("/checkUserName", (ctx, next) => {
  // console.log(ctx.query.username)
  let res = userData.find(v => v.username == ctx.query.username)
  if(res) {
    ctx.body = {
      status:1,
      info:"用户名正确"
    }
  } else {
    ctx.body = {
      status:2,
      info:"用户名错误"
    }
  }
  // ctx.body = "hahh"
})

router.post("/upload", (ctx, next) => {
  console.log(ctx.request.body)
  console.log(ctx.request.files.img)
  let fileData =  fs.readFileSync(ctx.request.files.img.path);
  fs.writeFileSync("static/imgs/"+ctx.request.files.img.name,fileData);
  ctx.body = "请求成功";
})

router.post("/fileUpload", (ctx, next) =>{
  let fileData = fs.readFileSync(ctx.request.files.myfile.path)
  fs.writeFileSync("static/imgs/"+ctx.request.files.myfile.name, fileData)
  ctx.body = "请求成功"
})
app.use(router.routes())
app.listen(3000)