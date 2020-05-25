const greet = (s) => {
    const arr = '小明';
    const hello = `你好啊，${arr}`;
    console.log(hello);
    console.log(s);
    process.on('exit',() => {
        console.log('about to exit with code');
    });
    process.nextTick(() => {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');
    if(typeof window === 'undefined') {
        console.log('node.js');
    } else {
        console.log('browser');
    }
};
module.exports = greet; // es5
// export default greet;