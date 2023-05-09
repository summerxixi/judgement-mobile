Page({
    data: {
      option: {}
    },
    onLoad() {
     
  },
  onShow(){
    var tabBar = this.getTabBar()
    tabBar.setData({
      selected: 1
    })
  }
})
  