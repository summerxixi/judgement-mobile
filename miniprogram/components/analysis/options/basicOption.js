function getBasicOption() {
  return {
    legend: {
      data: [''],
      bottom: 10
    },

    xAxis:{
        name: 'x:标准化量刑偏移值',
        splitLine: {
          show: true,
        },
      
        axisLabel: { //设置x轴的字
          show:true
        },
        axisLine: {
          show: true,    // 是否显示坐标轴轴线
          symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
        },
      },
  
    yAxis: {
      name: '频率',
      splitLine: {
        show: false,
      },
      axisLabel: { //设置x轴的字
        show:true
      },
      axisLine: {
        show: true,    // 是否显示坐标轴轴线
        symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
      },
      axisTick: {
        length: 6,
        show:true,
        lineStyle: {
          type: 'dashed'
          // ...
        }
    },
  },
    series: [{
      name: '',
      type: 'line',
      data: [],
      showSymbol: false,
      smooth:true

    }],
  }
}

export default getBasicOption