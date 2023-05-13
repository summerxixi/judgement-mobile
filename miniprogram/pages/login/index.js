// index.js
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,
    region: '请选择地区'
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
    // let useNum = 1
    // wx.setStorageSync("userInfo", {
    //   nickName,
    //   avatarUrl,
    //   location,
    //   useNum
    // }, )
    // getApp().globalData.isLogged = true
    // wx.redirectTo({
    //   url: '/pages/analysis/uploadInfo/uploadInfo',
    // })
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            // 后台登录接口
            url: '',
            method: 'GET',
            data: {
              code: res.code
            },
            success: (res) => {
              const token = res.data.sessionId
              const useNum = res.data.useNum
              wx.setStorageSync('token',  token)
              wx.setStorageSync("userInfo", {
                nickName,
                avatarUrl,
                location,
                useNum
              })
              getApp().globalData.isLogged = true
              wx.redirectTo({
                url: '/pages/analysis/uploadInfo/uploadInfo',
              })
            }
          })
        } else {
          console.log('Fail to login')
        }
      },
    })
  }
})