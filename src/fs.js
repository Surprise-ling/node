import fs from 'fs'
const fss = () => {
    fs.readFile('./txt/text.txt','utf-8',(err, data) => {
        //    路径文件名，encoding，callback
        if(err) {
            console.log(err)
        } else {
            console.log(data + '异步')
        }
    })

    fs.readFile('./img/test.png',(err, data) => {
        //    路径文件名，callback
        if(err) {
            console.log(err)
        } else {
            console.log(data)
            // 解析图片是二进制文件
        }
    })

    const data = fs.readFileSync('./txt/text.txt','utf-8')  // 这是同步读取文件
    console.log(data + '同步')

    const buf = Buffer.from('./txt/text.txt', 'utf-8')
    // 将string转换为一个buffer
    console.log(buf)

    fs.writeFile('./txt/text.txt','写入的string', 'utf-8', (err) => {
        // 写入文件的地址，写入的内容，encoding，callback
        if (err) {
            throw err;
        }
        console.log('文件已被保存')
    })

    fs.stat('./txt/text.txt',(err,data) => {
        if(err) {
            throw err;
        } else {
            console.log('-----------------')
            console.log('isFile: ' + data.isFile());
            // 是否是目录:
            console.log('isDirectory: ' + data.isDirectory());
            if(data.isFile()) {
                console.log('size:' + data.size)
                console.log('birth time:' + data.birthtime)
                console.log('modified time:' + data.mtime)
            }
        }
    })
}
export default fss;