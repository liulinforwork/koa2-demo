const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const {uploadFile} =  require('./util/upload')

const app = new Koa();

const staticPath = './static';
app.use(static(
    path.join(__dirname, staticPath)
))

app.use(async (ctx) => {
    ctx.body = '<h1>hello,koa3</h1>'
})

app.listen(3000, (err) => {
    if(err) throw err
    console.log("服务器启动中...")
});
