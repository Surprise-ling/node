import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const app = express();

var data = {
    name: "网站",
    num: 3,
    sites: [
        {
            name: "Google",
            info: [
                "Android",
                "Google 搜索",
                "Google 翻译"
            ]
        },
        {
            name: "Runoob",
            info: [
                "菜鸟教程",
                "菜鸟工具",
                "菜鸟微信"
            ]
        },
        {
            name: "Taobao",
            info: [
                "淘宝",
                "网购"
            ]
        }
    ]
};
// 允许跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', (request, response) => {
    response.send(data);
});
app.get('/git', (request, response) => {
    response.cookie('123123', 'qweqweqwe');
    response.send('Hello git');
});
// app.get('/process', (request, response) => {
//     response.send(request.query);
// });

// 创建 application/x-www-form-urlencoded 编码解析
// extended：false 表示使用系统模块的querystring来处理（post方法）
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// array是上传file类型input标签的name名称,number为最多上传个数
app.use(multer({ dest: '/tmp/' }).array('image', 2));

app.post('/process', urlencodedParser, (request, response) => {
    const name = request.body.name;
    const password = request.body.password;
    response.cookie('name', name);
    response.cookie('password', password);
    response.send(name + password);
});

// 上传文件
app.post('/file', (request, response) => {
    console.log(request.files[0]);

    const des_file = path.join(__dirname + '/img/') + request.files[0].originalname;
    console.log(des_file);
    fs.readFile(request.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            const res = {
                message: 'success'
            };
            response.send(JSON.stringify(res));
        });
    });
});
const server = app.listen(8082, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`应用访问地址为http://127.0.0.1:${port}`);
});