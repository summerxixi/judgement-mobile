// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    isImgs: true,
    serverUrl: 'https://example.com/upload_image',
    promptMessage: '提供问题画面截图',
    imgs: [],//上传图片列表
    imgPath: [],//已上传成功的图片路径
    suggestions: '',
    textLength: 0,
    complaint: '',
    consult: ''
  },

  bindTextInput(e) {
    let input = e.detail.value
    this.setData({
      suggestions: input,
      textLength: input.length
    })
  },
  bindConsultInput(e) {
    let input = e.detail.value
    this.setData({
      consult: input,
    })
  },
  bindComplainInput(e) {
    let input = e.detail.value
    this.setData({
      complaint: input,
    })
  },
  handleBack() {
    wx.navigateBack({
      delta: 1,
    })
  },
  // 上传照片
  chooseImage(e) {
    console.log("开始")
    const _this = this;
    var images = this.data.imgs;
    let imgNumber = this.data.imgs.length;//当前已上传的图片张数
    if (imgNumber >= 3) {
      wx.showToast({
        title: '要超出三张啦',
        icon: 'error',
        duration: 1000,
        mask: true
      })
      return false;
    } else {
      imgNumber = 3 - imgNumber;
    };
    if (this.data.imgs.length > 0) {
      this.setData({
        isImgs: false
      })
    }
    wx.chooseImage({//打开本地相册选择图片
      count: imgNumber,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        for (let i = 0; i < tempFilePaths.length; i++) {
          images.push(tempFilePaths[i]);
        }
        _this.setData({//赋值，回显照片
          imgs: images
        });
        console.log("选择成功")
        let successUp = 0; //成功
        let failUp = 0; //失败
        let count = 0; //第几张
        let length = tempFilePaths.length; //总数

        // _this.recursionUploading(tempFilePaths, successUp, failUp, count, length);//调用上传方法
      }
    }),
      this.setData({
        imgs: images
      })
    console.log("llll")
    console.log(this.data.imgs)

  },

  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.popup1 = this.selectComponent("#popupConsult");
    this.popup2 = this.selectComponent("#popupComplaint");
  },

  handleBar1() {
    this.setData({ current: 1 })
    this.popup1.showPopup();
  },

  handleBar2() {
    this.setData({ current: 2 })
  },

  handleBar3() {
    this.setData({ current: 3 })
    this.popup2.showPopup();
  },
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
    wx.cloud.callContainer({
      path: '/api/customer_service/complain',
      method: "POST",
      // header: {
      //   'content-type': 'application/json',
      //   'X-WX-SERVICE': 'ai',
      // },
      data: {
        consult:this.data.complain
      }
    }).then(res => {
      console.log(res)
    })
    this.popup2.hidePopup();
  },
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

  }
})