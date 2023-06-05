// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    isImgs:true,
    serverUrl: 'https://example.com/upload_image',
    promptMessage: '提供问题画面截图',
    imgs: [],//上传图片列表
    imgPath: [],//已上传成功的图片路径
    suggestions:'',
    textLength:0
  },

  bindTextInput(e){
    let input  = e.detail.value
    this.setData({
      suggestions:input,
      textLength:input.length
    })
    console.log(e.detail.value.length)
},
  // 上传照片
  chooseImage(e) {
    const _this = this;
    let imgs = this.data.imgs;
    let imgNumber = this.data.imgs.length;//当前已上传的图片张数
    if (imgNumber >= 3) {
      console.log("超出上传个数");
      return false;
    } else {
      imgNumber = 3- imgNumber;
    };
    if(this.data.imgs.length>0) {
      this.setData({
        isImgs:false
      })
    }
    wx.chooseImage({//打开本地相册选择图片
      count: imgNumber,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        for (let i = 0; i < tempFilePaths.length; i++) {
          imgs.push(tempFilePaths[i]);
        }
        _this.setData({//赋值，回显照片
          imgs: imgs
        });
        let successUp = 0; //成功
        let failUp = 0; //失败
        let count = 0; //第几张
        let length = tempFilePaths.length; //总数
        console.log(imgs)
        // _this.recursionUploading(tempFilePaths, successUp, failUp, count, length);//调用上传方法
      }
    }),
    console.log(imgNumber)
  
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