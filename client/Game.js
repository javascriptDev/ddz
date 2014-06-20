/**
 * Created by a2014 on 14-6-20.
 */
var game = {
    players: [],
    begin: function () {
        var me = this;
        var heads = ['http://pic.cnitblog.com/face/488581/20140416133107.png', 'http://pic.cnitblog.com/face/430690/20140531110854.png', 'http://pic.cnitblog.com/face/598355/20140120112523.png'];
        for (var i = 0; i < 3; i++) {
            this.players.push(new Player({
                uname: 'p' + i,
                head: heads[i],
                role: playerHelper.role.peasants,
                score: 0,
                poker: [],
                state: playerHelper.state.normal
            }))
        }

        table = new Table({
            player: me.players
        });

    }
}
