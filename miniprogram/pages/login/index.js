// index.js
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,
    region: '请选择地区',
    nickName: " 用户昵称"
  },
  onLoad() {
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme
      })
    })
  },
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  selectRegion: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit(e) {

    const nickName = e.detail.value.nickname
    let avatarUrl = this.data.avatarUrl
    const location = this.data.region
    const useNum = 1
    const token = "123123123"
    wx.setStorageSync('token',  token)
    wx.setStorageSync("userInfo", {
      nickName,
      avatarUrl,
      location,
      useNum
    })
    getApp().globalData.isLogged = true
    wx.navigateBack()
    // wx.login({
    //   success: (res) => {
    //     if (res.code) {
    //       const code = res.code
    //       wx.cloud.callContainer({
    //         path: '/api/auth/login',
    //         method: "POST",
    //         header:{
    //           'content-type' : 'multipart/form-data',
    //           'X-WX-SERVICE': 'new',
    //         },
    //         data: {
    //           code
    //         },
    //         success(res){
    //           console.log(res)
    //           const token = res.data.token
    //           // const useNum = res.data.useNum
    //           const useNum = 1
    //           wx.setStorageSync('token',  token)
    //           wx.setStorageSync("userInfo", {
    //             nickName,
    //             avatarUrl,
    //             location,
    //             useNum
    //           })
    //           getApp().globalData.isLogged = true
    //           wx.navigateBack()
    //         }
    //       })
    //     //   wx.request({
    //     //     // 后台登录接口
    //     //     url: 'https://new-49732-9-1318259313.sh.run.tcloudbase.com/api/auth/login',
    //     //     method: 'POST',
            
    //     //     header:{
    //     //       'content-type' : 'multipart/form-data'
    //     //     },
    //     //     success: (res) => {
    //     //       console.log('get code succ' + res.code)
    //     //       const token = res.data.sessionId
    //     //       const useNum = res.data.useNum
    //     //       wx.setStorageSync('token',  token)
    //     //       wx.setStorageSync("userInfo", {
    //     //         nickName,
    //     //         avatarUrl,
    //     //         location,
    //     //         useNum
    //     //       })
    //     //       getApp().globalData.isLogged = true
    //     //       // wx.redirectTo({
    //     //       //   url: '/pages/analysis/uploadInfo/uploadInfo',
    //     //       // })
    //     //       wx.navigateBack()
    //     //     }
    //     //   })
    //     // } else {
    //     //   console.log('Fail to login')
    //     }
    //   },
    // })
  },
  handleBack() {
    wx.navigateBack({
      delta: -1,
      success: (res) => {},
      fail: (res) => {},
    })
  },
})