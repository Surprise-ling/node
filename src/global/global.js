const global = () => {
    console.log(__filename); // 指向当前执行的脚本文件名
    console.log(__dirname); // 指向当前执行脚本所在的目录
    console.log(process.env); // global全局对象的属性，有多个属性和方法
    console.log(process.memoryUsage()); // 内存使用情况
    console.log(process.version); // 当前版本
    console.log(process.cwd()); // 当前目录

};
export default global;