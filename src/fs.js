import fs from 'fs';
const fss = () => {
    fs.readFile('./txt/text.txt','utf-8',(err, data) => {
        //    路径文件名，encoding，callback
        if(err) {
            console.log(err);
        } else {
            console.log(data + '异步');
        }
    });

    fs.readFile('./img/test.png',(err, data) => {
        //    路径文件名，callback
        if(err) {
            console.log(err);
        } else {
            console.log('二进制图片为:');
            console.log(data);
            // 解析图片是二进制文件
        }
    });

    const data = fs.readFileSync('./txt/text.txt','utf-8'); // 这是同步读取文件
    console.log(data + '同步');

    const buf = Buffer.from('./txt/text.txt', 'utf-8');
    // 将string转换为一个buffer
    console.log(buf);

    fs.writeFile('./txt/text.txt','写入的string', 'utf-8', (err) => {
        // 写入文件的地址，写入的内容，encoding，callback
        if (err) {
            throw err;
        }
        console.log('文件已被保存');
    });

    // 获取文件信息
    fs.stat('./txt/text.txt',(err,data) => {
        if(err) {
            throw err;
        } else {
            console.log('-----------------');
            console.log('isFile: ' + data.isFile());
            // 是否是目录:
            console.log('isDirectory: ' + data.isDirectory());
            if(data.isFile()) {
                console.log('size:' + data.size);
                console.log('birth time:' + data.birthtime);
                console.log('modified time:' + data.mtime);
            }
        }
    });
    // 删除指定文件
    // fs.unlink('txt/test.txt', (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('文件删除成功');
    // });
    
    // 创建目录
    // { recursive: true }不管创建的目录是否存在
    fs.mkdir('txt/test', { recursive: true }, (err) => { // txt作为上一级目录，必须存在
        if (err) {
            throw err;
        }
        console.log('文件创建成功');
    });

    // rmdir 删除目录

    // 查看指定目录下的文件
    fs.readdir('txt/test', (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(e => console.log('该目录有以下文件' + e));
    });
};
export default fss;