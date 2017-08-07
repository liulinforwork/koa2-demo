const fs = require('fs')

/**
 * 读取文件方法
 * @param  {string} 文件本地的绝对路径
 * @return {string|binary}
 */
function file ( filePath ) {
    let content;
    console.log(filePath)
    console.log(filePath.indexOf('image') >= 0)
    if(filePath.indexOf('image') >= 0){
        content = fs.readFileSync(filePath, 'binary' )

    }else{
        content = fs.readFileSync(filePath, 'utf-8' )
    }
    
    
    
    return content
}

module.exports = file