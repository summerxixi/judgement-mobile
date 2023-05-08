// pages/analysis/uploadInfo/uploadInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      help_show_flag : false,
      area : '',
      time_start : '',
      time_end : '',
      file : ''
    },

    showUploadHelp:function(){
      this.setData({
        help_show_flag: true
      })
    },

    closeHelp:function(){
      this.setData({
        help_show_flag: false
      })
    },

    startAnalysis:function(){
      console.log('开始分析')
    },

    selectSTime: function(e) {
      this.setData({
        time_start: e.detail.value
      })
    },

    selectETime: function(e) {
      this.setData({
        time_end: e.detail.value
      })
    },

    selectRegion: function(e) {
      this.setData({
        area: e.detail.value
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

   
})