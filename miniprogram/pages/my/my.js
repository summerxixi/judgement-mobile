const app = getApp()
// var getSetData = require('../../util/getData')
import getPrivacy from "../../util/getSetData/getPrivacy.js"
import getAboutMe from "../../util/getSetData/getAboutMe.js"
const htmlSnipPrivacy =getPrivacy()
const  htmlSnipAboutMe = getAboutMe()
// console.log(htmlSnip)
Page({
  data: {
    userInfo: {
      avatarUrl: '/static/images/default-avatar.png',
      nickName: '未登录',
      location: '请登陆后使用',
      useNum: '0'
    },
    isLogged: false,
    htmlSnipPrivacy, 
    htmlSnipAboutMe
  },
  openSetting() {
    console.log('点击设置');
  },
  openHistory() {
    console.log('历史记录');
  },
  openFavorites() {
    console.log('我的收藏');
  },
  openAcheivement() {
    console.log('我的成就');
  },
  handleLogout() {
    wx.setStorageSync('token', null)
    app.globalData.isLogged = false //以防万一，一块设置了
    wx.redirectTo({
      url: '../my/my',
    })
    // wx.setStorageSync('key', data)
  },
  onLoad() {
  },
  onShow() {
    this.setData({
      isLogged: app.globalData.isLogged
    })
    if (this.data.isLogged) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
    var tabBar = this.getTabBar()
    tabBar.setData({
      selected: 1
    })
  },
  onReady() {
    this.popup1 = this.selectComponent("#popupPrivacy");
    this.popup2 = this.selectComponent("#popupAboutMe");
    this.popup3 = this.selectComponent("#popupFeedback");
    console.log("lll")
    console.log(this.popup1)
  },
  showPopupPrivacy() {
    console.log("pop")
    this.popup1.showPopup();
  },
  showPopupAboutMe() {
    console.log("pop")
    this.popup2.showPopup();
  },
  showPopupFeedback() {
    console.log("pop")
    this.popup3.showPopup();
  },
  //取消事件
  _error1() {
    this.popup1.hidePopup();
  },
  _success1() {
    this.popup1.hidePopup();
  },
  _error2() {
    this.popup2.hidePopup();
  },
  _success2() {
    this.popup2.hidePopup();
  },
  _error3() {
    this.popup3.hidePopup();
  },
  _success3() {
    this.popup3.hidePopup();
  },
  handleBack(){
      console.log("kkk")
      wx.redirectTo({
        url: '/pages/analysis/uploadInfo/uploadInfo',
      })
  }
})
