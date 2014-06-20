/**
 * Created by a2014 on 14-6-20.
 */

var pokerHelper = {
    type: ['spade', 'heart', 'diamond', 'club', 'king'], //黑红片花
    val: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', '大王', '小王']
};

function Poker(o) {
    this.type = o.type;
    this.val = o.val;
    this.init();
}

Poker.prototype = {
    init: function () {
        var div = document.createElement('div');
        div.className = 'poker';
        div.innerHTML = '<div class="top ' + this.type + '">' + this.val + '</div>' +
            '<div class="middle"></div>' +
            '<div class="bottom ' + this.type + '">' + this.val + '</div>';
        this.el = div;
    },
    render: function (c) {
        c.appendChild(this.el);
    }


}
exports.Poker = Poker;
exports.PokerHelper = pokerHelper;

