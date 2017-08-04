const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const { uploadFile } = require('./util/upload')

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
    path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
    if ( ctx.url === '/' && ctx.method === 'GET' ) {
        // 当GET请求时候返回表单页面
        let html = `
      <h1>静态服务器</h1>
      <form method="POST" action="/upload.json" enctype="multipart/form-data">
        <p>文件上传</p>
        <span>picName:</span><input name="picName" type="text" /><br/>
        <input name="file" type="file" /><br/><br/>
        <button type="submit">提交</button>
      </form>
    `
        ctx.body = html

    } else if ( ctx.url === '/upload.json' && ctx.method === 'POST' ) {
        // 上传文件请求处理
        let result = { success: false }
        let serverFilePath = path.join( __dirname, 'static' )

        // 上传文件事件
        result = await uploadFile( ctx, {
            fileType: 'img', // common or album
            path: serverFilePath
        })

        ctx.body = result
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000)
console.log('[demo] static-use-middleware is starting at port 3000')