// components/custom-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    app: getApp(),
    selected: 0,
    custom: true,
    selectedColor: "#8E8E93",
    color: "#8E8E93",
      list: [
        {
          "pagePath": "pages/analysis/uploadInfo/uploadInfo",
          "text": "量型有爱",
          "iconPath": "/static/images/analysis-default.png",
          "selectedIconPath": "/static/images/analysis-active.png"
      },
      {
          "pagePath": "pages/my/my",
          "text": "我的",
          "iconPath": "/static/images/my-default.png",
          "selectedIconPath": "/static/images/my-active.png"
      }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = '/' + data.path
      //切换tab时，改变路由地址
      wx.switchTab({url})
    }
  }
})
