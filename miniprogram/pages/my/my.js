const app = getApp()
Page({
    data: {
      userInfo: {
        avatarUrl:'/static/images/default-avatar.png',
        nickName:'未登录',
        location:'请登陆后使用',
        useNum: '0'
      }
    },
    openSetting(){
      console.log('点击设置');
    },
    openHistory(){
      console.log('历史记录');
    },
    openFavorites(){
      console.log('我的收藏');
    },
    openAcheivement(){
      console.log('我的成就');
    },
    onLoad() {
      this.setData({
        isLogged: app.globalData.isLogged
      })
      if(this.data.isLogged){
        this.setData({
          userInfo: wx.getStorageSync('userInfo')
        })
        console.log(this.data.userInfo)
      }
  },
  onShow(){
    var tabBar = this.getTabBar()
    tabBar.setData({
      selected: 1
    })
  },
  onReady(){
  }
})
  