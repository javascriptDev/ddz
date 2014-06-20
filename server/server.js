/**
 * Created by a2014 on 14-6-20.
 */
var http = require('http');
var fs = require('fs');
var table = require('Table');
var Player = require('Player');
var Poker = require('Poker');


//所有斗地主的房间
var rooms = [
    {id: 1111, players: []}
];

//所有登陆的用户
var players = [];

function login(res) {
    if (rooms[0].players.length == 3) {
        var pokers = getPoker();

    } else {
        var player = JSON.parse(postDataChunk.toString());
        rooms[0].players.push();
        var uid = Math.random() * 19999,
            roomId = rooms[0].id;
        // 设置cookie
        res.setHeader("Set-Cookie", ['uid=' + Math.random() * 19999, 'roomid=' + roomId]);
        players.push({
            success: true,
            id: uid,
            roomId: roomId
        })
        res.write(JSON.stringify({
            success: true
        }));
        res.end();
    }
}
function getPoker(req, res) {

    return new table().poker;

}

http.createServer(function (req, res) {
    var url = req.url;
    req.on("data", function (postDataChunk) {
        if (url.indexOf('login') != -1) {
            login(res);
        } else if (url.indexOf('getPoker') != -1) {
            getPoker(req, res);
        }
    });


    if (url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readFile('client/index.html', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });

    } else if (url.indexOf('login') != -1) {

    } else {
        var a = url.split('.')[1] == 'js' ? 'application/x-javascript' : 'text/css';
        var u = url.replace('/', '');
        var head = a + ';charset=utf-8';
        res.writeHead(200, {'Content-Type': head});
        if (u != 'favicon.ico') {
            fs.readFile(url.replace('/', ''), 'utf8', function (err, data) {
                res.write(data);
                res.end();
            });
        }
    }


}).listen(8000, null);