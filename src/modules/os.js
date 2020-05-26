import os from 'os';
const Os = () => {
    console.log('CPU的字节序 ' + os.endianness());
    console.log('操作系统名 ' + os.type());
    console.log('操作系统名 ' + os.platform());
    console.log('系统内存总量 ' + os.totalmem() + 'bytes.');
    console.log('操作系统空闲内存量 ' + os.freemem() + 'bytes.');
};
Os();
module.exports = Os;