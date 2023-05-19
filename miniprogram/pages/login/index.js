// index.js
import request from "../../util/request"
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,
    region: '请选择地区',
    nickName:" 用户昵称"
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
//   formSubmit(e) {

//     const nickName = e.detail.value.nickname
//     let avatarUrl = this.data.avatarUrl
//     const location = this.data.region
  
//     wx.login({
//       success: (res) => {
//         if (res.code) {
//           wx.request({
//             // 后台登录接口
//             url: '',
//             method: 'GET',
//             data: {
//               code: res.code
//             },
//             success: (res) => {
//               const token = res.data.sessionId
//               const useNum = res.data.useNum
//               wx.setStorageSync('token',  token)
//               wx.setStorageSync("userInfo", {
//                 nickName,
//                 avatarUrl,
//                 location,
//                 useNum
//               })
//               getApp().globalData.isLogged = true
//               wx.redirectTo({
//                 url: '/pages/analysis/uploadInfo/uploadInfo',
//               })
//             }
//           })
//         } else {
//           console.log('Fail to login')
//         }
//       },
//     })
//   },
  handleAuth(){
    wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
        this.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName :res.userInfo.nickName
        })
        console.log(res)
        wx.setStorageSync('userInfo',res.userInfo)
        wx.setStorageSync('token',  12345)
        getApp().globalData.isLogged = true
        console.log(app.globalData.isLogged)
        wx.showToast({
            title: '获取信息成功，等待登录',
          })
        },      
      })
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
                console.log("登录成功")
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
        }
      })
    
  },
  handleBack(){
  wx.redirectTo({
    url: '../my/my',
  })
  },
  handleTest(){
    request({
        url: "/comments"
    }).then(res => {
        console.log(res)
    })
  }
})