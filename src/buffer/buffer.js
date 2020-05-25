const buffer = () => {
    // 创建一个buffer类，返回一个被string的值初始化的新的buffer实例
    const buf = Buffer.from('this is build', 'ascii');
    console.log(buf.toString('hex')); // 将每个字节编码为两个十六进制字符
    console.log(buf.toString('base64')); // base64编码

    // 创建buffer，用0填充
    const buf1 = Buffer.alloc(10, 1);
    console.log(buf1);

    const buf2 = Buffer.from([1,2,3]);
    console.log(buf2);

    const buf3 = buf.write('this is surprise');
    console.log(buf3); // 写入buffer缓存区的字节数

    const buf4 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
    const json = JSON.stringify(buf4); // 转换为json对象
    console.log(json);

    // buffer合并
    const buff = Buffer.from('one ');
    const buff1 = Buffer.from('two ');
    const buff2 = Buffer.concat([buff, buff1]);
    console.log(buff2.toString());
    // buffer比较
    const buff3 = buff.compare(buff1);
    console.log(buff3); // -1表示之前，0表示相同，否则表示之后
    // buffer copy
    const buff4 = Buffer.from('three ');
    buff4.copy(buff1, 2);
    // 在buff2的第二个字符后插入buff4
    console.log(buff1.toString());

    // buffer 裁剪(截取)
    const buffer1 = Buffer.from('this is buffer');
    const buffer2 = buffer1.slice(0,2);
    console.log(buffer2.toString());
};
export default buffer;