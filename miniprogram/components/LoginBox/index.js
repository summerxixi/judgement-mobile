// components/LoginBox/index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
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
      avatarUrl: defaultAvatarUrl,
    },
    options:{
      addGlobalClass: true,
      styleIsolation: 'shared'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        loginWithUserInfo: function (e) {
          console.log('登录')
          wx.redirectTo({
            url: '/pages/login/index',
          })
        },
    }
})
