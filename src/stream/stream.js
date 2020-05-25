import fs from 'fs';
const streamm = () => {
    // 创建可读流
    const rs = fs.createReadStream('../../txt/output.txt', 'utf-8');
    // 文件流打开
    rs.on('open', (e) => {    
        console.log('文件已打开');
        console.log(e);
    });
    
    // 文件已就位，可用于读取时间
    rs.on('ready', () => {
        console.log('文件已经准备好');
    });
    
    // 文件流读取
    rs.on('data', (chunk) => { // 读取执行，data事件可能执行多次，每次传递的是一部分流
        console.log('读取文件数据:', chunk);
    });

    rs.on('end', function () { // 结束执行
        console.log('END___');
    });
    
    rs.on('error', function (err) { // 报错执行
        console.log('ERROR: ' + err);
    });

    // 创建写入流
    // const ws = fs.createWriteStream('./txt/text.txt', 'utf-8');
    // ws.write('use Stream edit 12\n');
    // ws.write('END.');
    // ws.end() // 写入成功，关闭
    
    // var ws2 = fs.createWriteStream('./txt/output2.txt');
    // ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
    // ws2.write(new Buffer('END.', 'utf-8'));
    // ws2.end();
    
    // rs.pipe(ws2)
};
export default streamm;