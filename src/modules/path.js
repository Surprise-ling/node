import path from 'path';
const Path = () => {
    console.log('格式化路径 ' + path.normalize('/test/test1/qweweq/qweqwe/tab'));
    console.log('连接路径 ' + path.join(__dirname,'/test1/qweweq','/qweqwe/tab'));
    console.log('转换为绝对路径（resolve） ' + path.resolve('main.js'));
    console.log('路径中文件的后缀名 ' + path.extname('main.js'));
};
Path();
module.exports = Path;