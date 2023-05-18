// pages/analysis/uploadInfo/uploadInfo.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName: '用户名',
    help_show_flag: false,
    area: [],
    time_start: '',
    time_end: '',
    file: '',
    isLogged: false
  },
  startAnalysis: function () {
    if (this.data.isLogged) {
      if (this.data.file === '') {
        wx.showToast({
          title: '请上传文书',
          icon: 'error',
          duration: 1000,
          mask: true
        })
      } else {
        let that = this
        // 加载框
        wx.showLoading({
          title: "文书分析中...",
          mask: true
        })
        // 上传文书
        const fileName = this.data.file.name
        const filePath = this.data.file.path
        const token = wx.getStorageSync('token')
        wx.cloud.uploadFile({
          cloudPath: fileName,
          filePath: filePath,
        }).then((res) => {
          wx.hideLoading()
          var app = getApp()
          console.log(res)
          that.uploadFileDetail(token, fileName, res.fileID)
          app.globalData.afterAnalysis = true
          wx.navigateTo({
            url: '/pages/analysis/result/result',
          })
        }).catch(err => {
          console.error(err)
        })
      }
    } else {
      wx.showToast({
        title: '请登录后使用',
        icon: 'error',
        duration: 1000,
        mask: true
      })
    }
  },

  uploadFileDetail(token, fileName, fileId) {
    wx.cloud.callContainer({
      path: '/api/pdf/pdf_upload',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'X-WX-SERVICE': 'ai',
        'token':token
      },
      data: {
        pdf_name: fileName,
        file_id: fileId
      }
    }).then(res => {
      console.log(res)
    })
  },

  showUploadHelp: function () {
    this.setData({
      help_show_flag: true
    })
  },

  closeHelp: function () {
    this.setData({
      help_show_flag: false
    })
  },

  selectSTime: function (e) {
    this.setData({
      time_start: e.detail.value
    })
  },

  selectETime: function (e) {
    this.setData({
      time_end: e.detail.value
    })
    wx.hideTabBar()
  },

  selectRegion: function (e) {
    this.setData({
      area: e.detail.value
    })
  },

  selectFile: function (e) {
    if (this.data.isLogged) {
      var that = this
      wx.chooseMessageFile({
        count: 1,
        type: 'file',
        success(res) {
          // 预览文件
          const tempFile = res.tempFiles[0]
          that.setData({
            file: tempFile
          })
        }
      })
    } else {
      wx.showToast({
        title: '请登录后使用',
        icon: 'error',
        duration: 1000,
        mask: true
      })
    }
  },

  previewFile: function () {
    var that = this
    wx.downloadFile({
      url: that.data.file.path,
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          showMenu: false,
          success(res) {
            console.log('预览文件成功')
          }
        })
      }
    })
  },

  cancelFileSelect: function () {
    this.setData({
      file: ''
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
    // 检测登录状态
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      isLogged: app.globalData.isLogged
    })
    if (app.globalData.isLogged) {
      this.setData({
        nickName: wx.getStorageSync('userInfo').nickName
      })
    }
    var tabBar = this.getTabBar()
    tabBar.setData({
      selected: 0
    })

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