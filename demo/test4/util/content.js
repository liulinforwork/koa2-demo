const path = require('path');
const fs = require('fs');

const dir = require('./dir')
const file = require('./file')

/**
 * 获取静态资源内容
 * @param  {object} ctx koa上下文
 * @param  {string} 静态资源目录在本地的绝对路径
 * @return  {string} 请求获取到的本地内容
 */
async function content(ctx, fullStaticPath) {
    // 封装请求资源的完绝对路径
    let reqPath = path.join(fullStaticPath, ctx.url)

    let exist = fs.existsSync(reqPath)

    let content = '';

    if(!exist){
        //如果请求路径不存在，返回404
        content = '404!'
    }else{
        let stat = fs.statSync(reqPath);

        if(stat.isDirectory()){
            content = dir(ctx.url,reqPath)
        }else{
            content = await file(reqPath);
        }
    }


    return content;
}

module.exports = content;