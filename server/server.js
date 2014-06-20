/**
 * Created by a2014 on 14-6-20.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    var rooms = [];
    var players = [];

    req.addListener("data", function (postDataChunk) {
        if (url.indexOf('server') != -1) {

        }
    });
    // 数据接收完毕，执行回调函数
    req.addListener("end", function () {
        if (url.indexOf('AA') != -1) {


        }
    });

    var url = req.url;

    if (url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readFile('index.html', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });

    } else if (url.indexOf('server') != -1) {
//
    } else {
        var a = url.split('.')[1] == 'js' ? 'application/x-javascript' : 'text/css';
        var u = url.replace('/', '');
        res.writeHead(200, {'Content-Type': +a + ';charset=utf-8'});
        if (u != 'favicon.ico') {
            fs.readFile(url.replace('/', ''), 'utf8', function (err, data) {
                res.write(data);
                res.end();
            });
        }
    }


}).listen(8000, null);