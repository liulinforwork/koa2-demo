//
// const Koa = require('koa');
// const fs = require('fs')
// const app = new Koa();
// const Router = require('koa-router');
//
// let home = new Router();
// home.get('/', async ( ctx )=>{
//     let html = `
//     <ul>
//       <li><a href="/page/helloworld">/page/helloworld</a></li>
//       <li><a href="/page/404">/page/404</a></li>
//     </ul>
//   `
//     ctx.body = html
// })
//
// // 子路由2
// let page = new Router()
// page.get('/404', async ( ctx )=>{
//     ctx.body = '404 page!'
// }).get('/helloworld', async ( ctx )=>{
//     ctx.body = 'helloworld page!'
// })
//
// // 装载所有子路由
// let router = new Router()
// router.use('/', home.routes(), home.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())
//
// // 加载路由中间件
// app.use(router.routes()).use(router.allowedMethods())
//
// // let page = new Router();
// // page.get('/list',async (ctx) => {
// //     console.log(ctx);
// //     ctx.body =  "listsdhakDSF";
// // }).get('/hello',async (ctx) => {
// //     ctx.body = "hellosds";
// // });
// //
// // let router = new Router();
// // router.use('/', home.routes(), home.allowedMethods())
// // router.use('/page', page.routes(), page.allowedMethods())
// // app.use(router.routes()).use(router.allowedMethods())
//
// app.listen(3000)
//
//
// // /**
// //  * 用Promise封装异步读取文件方法
// //  * @param  {string} page html文件名称
// //  * @return {promise}
// //  */
// // function render( page ) {
// //     return new Promise(( resolve, reject ) => {
// //         let viewUrl = `./view/${page}`
// //         fs.readFile(viewUrl, "binary", ( err, data ) => {
// //             if ( err ) {
// //                 reject( err )
// //             } else {
// //                 resolve( data )
// //             }
// //         })
// //     })
// // }
// //
// // /**
// //  * 根据URL获取HTML内容
// //  * @param  {string} url koa2上下文的url，ctx.url
// //  * @return {string}     获取HTML文件内容
// //  */
// // // async function route( url ) {
// // //     let view = '404.html'
// // //     switch ( url ) {
// // //         case '/':
// // //             view = 'index.html'
// // //             break
// // //         case '/index':
// // //             view = 'index.html'
// // //             break
// // //         case '/todo':
// // //             view = 'todo.html'
// // //             break
// // //         case '/404':
// // //             view = '404.html'
// // //             break
// // //         default:
// // //             break
// // //     }
// // //     let html = await render( view )
// // //     return html
// // // }
// //
// // async function route(url) {
// //     let view = '404.html';
// //     switch (url){
// //         case '/':
// //             view = 'index.html'
// //             break;
// //         case '/index':
// //             view = 'index.html'
// //             break;
// //         case '/list':
// //             view = 'list.html'
// //             break;
// //         case '/detail':
// //             view = 'detail.html'
// //             break;
// //         default:
// //             break;
// //     }
// //     return await render(view)
// // }
// //
// //
// // app.use(async (ctx) => {
// //     let url = ctx.request.url;
// //     ctx.body = await route(url);
// //     // ctx.body = "hello"
// // });
// //
// // // // response
// // // app.use(ctx => {
// // //     ctx.body = 'Hello Koa';
// // // });
//
// // app.listen(3000);
// console.log("服务器已启动...");


// const Koa = require('koa')
// const app = new Koa()
//
// app.use( async ( ctx ) => {
//     let url = ctx.url
//     // 从上下文的request对象中获取
//     let request = ctx.request
//     let req_query = request.query
//     let req_querystring = request.querystring
//
//     // 从上下文中直接获取
//     let ctx_query = ctx.query
//     let ctx_querystring = ctx.querystring
//
//     ctx.body = {
//         url,
//         req_query,
//         req_querystring,
//         ctx_query,
//         ctx_querystring
//     }
// })
//
// app.listen(3000)
// console.log('[demo] request get is starting at port 3000')



// const Koa = require('koa')
// const app = new Koa()

// app.use( async ( ctx ) => {
//
//     if ( ctx.url === '/' && ctx.method === 'GET' ) {
//         // 当GET请求时候返回表单页面
//         let html = `
//       <h1>koa2 request post demo</h1>
//       <form method="POST" action="/">
//         <p>userName</p>
//         <input name="userName" /><br/>
//         <p>nickName</p>
//         <input name="nickName" /><br/>
//         <p>email</p>
//         <input name="email" /><br/>
//         <button type="submit">submit</button>
//       </form>
//     `
//         ctx.body = html
//     } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
//         // 当POST请求的时候，解析POST表单里的数据，并显示出来
//         let postData = await parsePostData( ctx )
//         ctx.body = postData
//     } else {
//         // 其他请求显示404
//         ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//     }
// })
//
// // 解析上下文里node原生请求的POST参数
// function parsePostData( ctx ) {
//     return new Promise((resolve, reject) => {
//         try {
//             let postdata = "";
//             ctx.req.addListener('data', (data) => {
//                 postdata += data
//             })
//             ctx.req.addListener("end",function(){
//                 let parseData = parseQueryStr( postdata )
//                 resolve( parseData )
//             })
//         } catch ( err ) {
//             reject(err)
//         }
//     })
// }
//
// // 将POST请求参数字符串解析成JSON
// function parseQueryStr( queryStr ) {
//     console.log( queryStr )
//     let queryData = {}
//     let queryStrList = queryStr.split('&')
//     console.log( queryStrList )
//     for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//         let itemList = queryStr.split('=')
//         queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//     }
//     return queryData
// }
//
// app.listen(3000)
// console.log('[demo] request post is starting at port 3000')


// 使用ctx.body解析中间件
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use( async ( ctx ) => {

    if ( ctx.url === '/' && ctx.method === 'GET' ) {
        // 当GET请求时候返回表单页面
        let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
        ctx.body = html
    } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
        // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000)
console.log('[demo] request post is starting at port 3000')