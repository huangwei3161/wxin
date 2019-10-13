const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSelect: 0,
    indexSelecttwo: 0,
    indexSelectthree: 0,
    indexSelectfour: 0,
    topics: [{
      id: 0,
      title: "运营"
    }, {
      id: 1,
      title: "行业"
    }, {
      id: 2,
      title: "基础"
    }, {
      id: 3,
      title: "无敌"
    }],
    topicstwo: [{
      em: 0,
      title: "运营"
    }, {
      em: 1,
      title: "行业"
    }, {
      em: 2,
      title: "来吗"
    }, {
      em: 3,
      title: "自修"
    }, {
      em: 4,
      title: "矿坑"
    }, {
      em: 5,
      title: "趋势"
    }, {
      em: 6,
      title: "技能"
    }],
    topicsthree: [{
      em: 0,
      title: "杀毒"
    }, {
      em: 1,
      title: "暗香"
    }, {
      em: 2,
      title: "黑镜"
    }, {
      em: 3,
      title: "编写"
    }, {
      em: 4,
      title: "前期"
    }],
    topicsfour: [{
      em: 0,
      title: "气球"
    }, {
      em: 1,
      title: "开了"
    }, {
      em: 2,
      title: "哈哈"
    }, {
      em: 3,
      title: "方程"
    }, {
      em: 4,
      title: "按时"
    }]
  },

  clickTopItem: function(res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  clickTopItemtwo: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelecttwo: em
    });
  },
  clickTopItemthree: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelectthree: em
    });
  },
  clickTopItemfour: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelectfour: em
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})