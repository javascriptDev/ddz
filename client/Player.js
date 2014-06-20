/**
 * Created by a2014 on 14-6-20.
 */

var role = {
    landlord: 'landlord', //地主
    peasants: 'peasants'      //贫民
}

var state = {
    trusteeship: 'trusteeship',
    normal: 'normal',
    offLine: 'offLine'
}

playerHelper = {
    role: role,
    state: state
}


function Player(o) {
    //用户名
    this.uname = o.uname || 'player';
    //头像
    this.head = o.head || '';
    //角色
    this.role = o.role||playerHelper.role.peasants;
    //得分
    this.score = o.score || 0;
    //拥有的牌
    this.poker = o.poker || [];
    //状态
    this.state = o.state || state.normal
}

Player.prototype = {

    /**
     * 抢地主
     *
     * @method pillage
     */
    pillage: function () {

    },
    /**
     * 加一张牌
     *
     * @method addPoker
     * @param { Poker } poker - 一张牌
     * */
    addPoker: function (poker) {
        this.poker.push(poker);
    },

    /**
     * 托管
     * @method trusteeship
     *
     */
    setTrusteeship: function () {
    },

    /**
     * 名牌
     *
     */
    setLuckyNumber: function () {

    },
    //出牌
    attack: function () {

    }
}