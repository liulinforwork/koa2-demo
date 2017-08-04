const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = `
        <p>hello koa2!</p>
    `
})

app.listen(3000, (err) => {
    if(err) throw err
    console.log("服务器启动中...")
});

// 文件操作模块 fs模块
// const fs = require('fs');
// app.use((ctx) => {
//     const static = './text'
//
//     //去除favicon.ico干扰
//     if(ctx.url == "/"){
//
//         // 读取文件
//         fs.readFile(static + "/a.txt","utf8",(err, data) => {
//             if(err) throw err;
//             console.log("1------------"+data);
//         });
//
//         // 删除文件
//         fs.unlink(static + '/b.txt', (err) => {
//             if(err) throw err;
//             console.log("2------------"+"成功删除")
//         }) ;
//
//         // 修改文件名称
//         fs.rename(static + '/c.txt',static+'/c_set.txt',(err) => {
//             if(err) throw err;
//             console.log("3------------"+"重命名成功")
//         });
//
//         // 查看文件状态
//         fs.stat(static + '/d.txt', (err,st) => {
//             if(err) throw err;
//             console.log("4------------"+st);
//         });
//
//         // 判断文件是否存在
//         fs.exists('e.txt', (exists) => {
//             console.log("5------------"+ exists ) ;
//         }) ;
//
//         ctx.body = "欢迎来到koa2."
//     }
// })
// // get请求数据获取
// app.use(async (ctx) => {
//     console.log(ctx.request);
//     let request = ctx.request
//
//     console.log(ctx.request.query);
//     console.log(ctx.query);
//     let query1 = ctx.request.query
//     let query = ctx.query
//
//     console.log(ctx.request.querystring);
//     console.log(ctx.querystring);
//
//     let string1 = ctx.request.querystring
//     let string = ctx.querystring
//
//     ctx.body = {
//         query1,
//         query,
//         string1,
//         string
//     }
// })
// // post请求数据获取
// app.use(async (ctx) => {
//     if(ctx.url =="/" && ctx.method == "GET"){
//         console.log("初次请求，返回前端一个表单");
//         let html = `
//             <h1>post请求发送数据验证</h1>
//
//             <form action="/" method="POST">
//                 <p>用户名</p>
//                 <input type="text" name="userName" placeholder="请输入你的用户名">
//                 <p>密码</p>
//                 <input type="password" name="pwd" placeholder="请输入你的密码">
//                 <p>邮箱</p>
//                 <input type="text" name="email" placeholder="请输入你的电子邮箱">
//                 <br/>
//                 <button type="submit">提交</button>
//             </form>
//         `
//         ctx.body = html;
//     }else if(ctx.url === '/' && ctx.method=="POST"){
//
//         let postDate = await parsePostDate(ctx);
//         console.log(postDate)
//         ctx.body = postDate;
//     }else{
//         let html = `
//             <h3>404</h3>
//         `
//
//         ctx.body = html;
//     }
// })
//
// function parsePostDate(ctx) {
//
//
//     return new Promise((resolve, reject)=>{
//         try{
//             let postDate = "";
//
//             ctx.req.addListener('data', (data) => {
//                 postDate += data;
//             });
//             ctx.req.addListener('end', () => {
//                 // console.log(postDate);
//                 console.log(parseQueryStr(postDate));
//                 // resolve(postDate)
//                 resolve(parseQueryStr(postDate))
//             })
//         }catch (e){
//             reject(e);
//         }
//     })
// }
// // 将POST请求参数字符串解析成JSON
// function parseQueryStr( queryStr ) {
//     let queryData = {}
//     let queryStrList = queryStr.split('&')
//     // console.log( queryStrList )
//     for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//         let itemList = queryStr.split('=')
//         queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//     }
//     return queryData
// }
// const bodyParser = require('koa-bodyparser')
// app.use(bodyParser());
// // bodyparse
// app.use(async (ctx) => {
//     if(ctx.url =="/" && ctx.method == "GET"){
//         console.log("初次请求，返回前端一个表单");
//         let html = `
//             <h1>post请求发送数据验证</h1>
//
//             <form action="/" method="POST">
//                 <p>用户名</p>
//                 <input type="text" name="userName" placeholder="请输入你的用户名">
//                 <p>密码</p>
//                 <input type="password" name="pwd" placeholder="请输入你的密码">
//                 <p>邮箱</p>
//                 <input type="text" name="email" placeholder="请输入你的电子邮箱">
//                 <br/>
//                 <button type="submit">提交</button>
//             </form>
//         `
//         ctx.body = html;
//     }else if(ctx.url === '/' && ctx.method=="POST"){
//         console.log(ctx.request.body);
//         let postDate = ctx.request.body;
//         // console.log(postDate)
//         ctx.body = postDate;
//     }else{
//         let html = `
//             <h3>404</h3>
//         `
//
//         ctx.body = html;
//     }
// })
