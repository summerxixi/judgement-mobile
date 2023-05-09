// components/LoginBox/index.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        login: function () {
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
                                wx.setStorage({
                                    key: 'sessionId',
                                    data: res.data.sessionId
                                })
                            }
                        })
                    } else {
                        console.log('Fail to login')
                    }
                },
            })
        },
        loginWithUserInfo: function (e) {
            let detail = e.detail
            if (detail.errMsg === "getUserInfo:ok") {
                console.log('用户同意授权');
                wx.setStorage({
                    key: 'userInfo',
                    data: {
                        'nickName': detail.userInfo.nickName,
                        'avatarUrl': detail.userInfo.avatarUrl
                    }
                })
                wx.getStorage({
                    key: 'sessionId',
                    success: (res) => {
                        console.log(res)
                    },
                    fail: (res) => {
                        this.login()
                    }
                })
            } else {
                console.log('用户拒绝授权');
            }
        },
    }
})
