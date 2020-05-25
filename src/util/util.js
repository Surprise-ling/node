const utilf = require('util');
function util() { 
    const fn = async() => {
        return 'hello world';
    };
    const callbackFunction = utilf.callbackify(fn);
    // callbackify将async(或者一个返回值为promise的函数)转换为回调风格的函数
    callbackFunction((err, ret) => {
        if (err) {
            throw err;
        }
        console.log(ret);
    });
 }
 module.exports = util;