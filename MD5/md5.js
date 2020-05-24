import crypto from 'crypto'

// 创建hash，生成对应得hash
const hash = crypto.createHash('MD5')

// hash加密的内容
hash.update('hello world!');
hash.update('hello nodejs!');
// console.log(hash)
// 通过计算传入的hash值，以hex方式解码
console.log(hash.digest('hex'));