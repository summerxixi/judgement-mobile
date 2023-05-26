function getBasicOption() {
  return {
    legend: {
      data: [''],
      bottom: 10
    },
    xAxis: {
      name: 'x:标准化量刑偏移值',
      splitLine: {
        show: true,
      },
      nameLocation:'middle',
      nameGap: 25, // 设置名称与x轴之间的距离
  
    },
    yAxis: {
      name: '频率',
      splitLine: {
        show: false,
      },
    },
    series: [{
      name: '',
      type: 'line',
      data: [],
      showSymbol: false,
    }],
  }
}

export default getBasicOption