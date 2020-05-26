import http from 'http';
import url from 'url';
import util from 'util';
import querystring from 'querystring';
// 创建http server ，并传入callback
const server = http.createServer((request, response) => {
    // 请求方式get/post，请求得url
    console.log(request.method + ' :' + request.url);
    // 设置相应头，200，响应类型
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // 相应的数据
    // response.end(util.inspect(url.parse(request.url, true)));
    // response.end('hello world');

    // 用url解析请求的url参数
    const parmes = url.parse(request.url, true).query;
    response.write(JSON.stringify(parmes));
    response.write('网站名：' + parmes.name + '\n');
    response.write('网站url：' + parmes.url);
    response.end();

    // querystring解析
    // eslint-disable-next-line no-unused-vars
    // let body = '';
    // console.log(request)
    // request.on('data', (e) => {
    //     // body += e;
    //     console.log(111)
    //     body = 'foo=bar&abc=xyz&abc=123';
    // });
    // request.on('end', () => {
    //     // 解析参数为JavaScript对象格式
    //     body = querystring.parse(body);
    //     console.log(body)
    //     response.write('网站名：' + body.foo + '\n');
    //     // response.write('网站url：' + body.url);
    //     response.end();
    // });
});
// 开启服务器监听
server.listen(8100);
console.log('Server is running at http://127.0.0.1:8100/?name=json');
// console.log('Server is running at http://127.0.0.1:8100/');

