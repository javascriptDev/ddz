/**
 * Created by a2014 on 14-6-20.
 */
var http = require('http');
var fs = require('fs');
var Poker = require('./Poker');


//所有斗地主的房间
var rooms = [
    {id: 1111, players: []}
];

//所有登陆的用户
var players = [];

function login(res, postDataChunk) {
    if (rooms[0].players.length == 3) {
        var pokers = getPoker();

    } else {
        var player = JSON.parse(postDataChunk.toString());
        var uid = Math.random() * 19999,
            roomId = rooms[0].id;
        // 设置cookie
        res.setHeader("Set-Cookie", ['uid=' + Math.random() * 19999, 'roomid=' + roomId]);
        res.write(JSON.stringify({
            uid: uid,
            roomId: roomId,
            success: true,
            uname: player.uname
        }));
        res.end();
    }
}
function getPoker(req, res) {

    return new table().poker;

}
var server = http.createServer(function (req, res) {
    var url = req.url;
    req.on("data", function (postDataChunk) {
        if (url.indexOf('login') != -1) {
            login(res, postDataChunk);
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


});
server.listen(8000, null);

var io = require('socket.io').listen(server);
io.on('connection', function (socket) {
    var event = {
        addPlayer: 'addPlayer',
        deal: 'deal',       //发牌
        dealEnd: 'dealEnd', //发牌完毕
        pillage: 'pillage'  //抢地主

    }


    socket.on('addPlayer', function (data) {
        socket.join(data.roomId);
        rooms.forEach(function (item, index) {
            if (item.id == data.roomId) {
                if (item.players.length == 3) {
                    console.log(1);
                    Poker.generatePoker(data.players);

                    io.socket.in(data.roomId).emit(event.deal, data.players);
                } else {
                    rooms[index].players.push(data);
                    io.sockets.in(data.roomId).emit(event.addPlayer, item.players);
                }

            }
        })

    });


});
