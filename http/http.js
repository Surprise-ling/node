import http from 'http';
// 创建http server ，并传入callback
const server = http.createServer((request, response) => {
    // 请求方式get/post，请求得url
    console.log(request.method + ' :' + request.url)
    // 设置相应头，200，响应类型
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 相应的数据
    response.end('./hello.html');
})
// 开启服务器监听
server.listen(8100);
console.log('Server is running at http://127.0.0.1:8100/')

