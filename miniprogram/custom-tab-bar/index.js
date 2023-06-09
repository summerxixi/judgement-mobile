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
    list: [{
        "pagePath": "pages/analysis/uploadInfo/uploadInfo",
        "text": "分析",
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
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const currentPath = `/${currentPage.route}`;

      let url = '/' + data.path
      if (data.path === 'pages/analysis/uploadInfo/uploadInfo' && getApp().globalData.afterAnalysis && currentPath !== '/pages/analysis/result/result') {
          wx.redirectTo({
            url: '/pages/analysis/result/result'
          })
      } else {
        if (currentPath !== url) {
          wx.switchTab({
            url
          })
        }
      }
    }
  }
})