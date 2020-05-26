import path from 'path';
const Path = () => {
    console.log('格式化路径 ' + path.normalize('/test/test1/qweweq/qweqwe/tab'));
    console.log('连接路径 ' + path.join(__dirname,'/test1/qweweq','/qweqwe/tab'));
    console.log('转换为绝对路径（resolve） ' + path.resolve());
    console.log('格式化路径 ' + path.normalize('/test/test1/qweweq/qweqwe/tab'));
};
Path();
module.exports = Path;