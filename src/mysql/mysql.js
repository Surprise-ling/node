import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});
// 打开mysql的连接
connection.connect();

// 执行mysql的操作
connection.query('SELECT 1 + 1 AS solution', (err, result, fields) => {
    if (err) {
        throw err;
    }
    console.log(result)
    console.log('The solution is: ', result[0].solution);
});

// 查询表
connection.query('SELECT * FROM websites', (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// 插入数据
// const sql = `INSERT INTO websites(Id,name,url,alexa,country) VALUES (0,'菜鸟工具', 'https://c.runoob.com','23453', 'CN')`;
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// 更新数据
const sql1 = `UPDATE websites SET name = '菜鸟移动站1',url='https://m.runoob.com' WHERE Id = 6`;
connection.query(sql1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// 删除数据
const sql2 = `DELETE FROM websites WHERE id = 7`;
connection.query(sql2, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// 关闭mysql连接
connection.end();