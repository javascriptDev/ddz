/**
 * Created by a2014 on 14-6-20.
 */


function Poker(o) {
    this.type = o.type;
    this.val = o.val;
    // this.init();
}


var pokerHelper = {
    type: ['spade', 'heart', 'diamond', 'club', 'king'], //黑红片花
    val: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', '大王', '小王'],
    generatePoker: function (players) {
        var poker = [];
        for (var j = 0; j < 13; j++) {
            for (var i = 0; i < 4; i++) {
                poker.push(
                    new Poker({
                        type: pokerHelper.type[i],
                        val: pokerHelper.val[j]
                    })
                )
            }
        }
        //生成大小王
        poker.push(new Poker({
            type: pokerHelper.type[4],
            val: pokerHelper.val[13]
        }));
        poker.push(new Poker({
            type: pokerHelper.type[4],
            val: pokerHelper.val[14]
        }))
        return   this.splitThree(poker, players);
    },
    splitThree: function (poker, player) {
        var index = Math.ceil(Math.random() * 1000) % poker.length;
        if (poker.length > 3) {
            player[poker.length % 3].addPoker(poker[index]);
            poker.splice(index, 1);
            splitThree(poker, player);
        }

    }
};


exports.Poker = pokerHelper;

