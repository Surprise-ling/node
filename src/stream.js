import fs from 'fs'
const streamm = () => {
    const rs = fs.createReadStream('./txt/text.txt', 'utf-8')
    // 文件流读取
    rs.on('data', (e) => {    // 读取执行，data事件可能执行多次，每次传递的是一部分流
        console.log('DATA')
        console.log(e)
    })
    rs.on('end', function () {   // 结束执行
        console.log('END');
    });
    
    rs.on('error', function (err) {  // 报错执行
        console.log('ERROR: ' + err);
    });

    // 写入流
    const ws = fs.createWriteStream('./txt/text.txt', 'utf-8');
    ws.write('使用Stream写入文本数据...\n');
    ws.write('END.');
    ws.end() // 写入成功，关闭
    
    var ws2 = fs.createWriteStream('./txt/output2.txt');
    ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
    ws2.write(new Buffer('END.', 'utf-8'));
    ws2.end();
    
    rs.pipe(ws2)
}
export default streamm;