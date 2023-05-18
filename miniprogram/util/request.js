function request(params, isHeader = false) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '正在加载中',
    })
    wx.request({
      ...params,
      //  传的地址参数放在params里面 http://localhost:5000类似
      url: 'url' + params.url,
      success: (res) => {
        //   console.log(res.header["X-Total-Count"])
        if (isHeader) {
          resolve({
            list: res.data,
            total: res.header["X-Total-Count"]
          })
        } else {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        //隐藏loading
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
  })
}

export default request