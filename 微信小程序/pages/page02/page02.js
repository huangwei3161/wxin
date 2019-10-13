// pages/page02/page02.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    currentData: 0,
    height: '500',
    indexSelect: 0,
    topics: []
  ,
    imgUrls: []
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    wx.request({
      url: 'http://localhost:8888/index',
      success: function (res) {
        if (res.statusCode == 200) {
          let topics = res.data;
          let imgs = res.data;
          console.log(imgs )
          that.setData({ topics: topics, imgUrls:imgs});
        }
        
      }
    })
  },
  bindchange: function (e) {
    const that = this;
    that.setData({
      indexSelect: e.detail.current
    })
  },
  
  clickTopItem: function (res) {
    //获得传递过来的数据
    const that = this;
    let id = res.currentTarget.dataset.id;
    //把index换成id
    this.setData({
      indexSelect: id
    });
    if (that.data.currentData === id) {
      return false;
    } else {
      that.setData({
        currentData:id
      })
    }
  }, 
  seach:function(){
    wx.navigateTo({
      url: '../seach/seach',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})