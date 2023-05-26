import getBasicOption from "../options/basicOption.js"

Component({
  data: {
    // 数据源
    chartData: {
      xData: [], // x轴数据
      yData: [], // y轴数据
    },
    // 图表参数配置
    chartOption:getBasicOption()
  },

  ready() {

    // 计算正态分布函数y值和x轴数值
    // 计算正态分布函数y值和x轴数值
    const xData = []
    const yData = []
    for (let i = -4; i <= 4; i += 0.1) {
      xData.push(i.toFixed(1))
      yData.push(Number((Math.exp(-i * i / 2) / Math.sqrt(2 * Math.PI)).toFixed(2)))
    }

    // 设置图表数据
    this.setData({
      chartData: {
        xData,
        yData,
      }
    })
    // 设置图表option
    this.setData({
      chartOption: {
        ...this.data.chartOption,
        xAxis: {
          ...this.data.chartOption.xAxis,
          data: this.data.chartData.xData,
        },
      
        series: [{
          ...this.data.chartOption.series[0],
          data: this.data.chartData.yData,
        }],
      },
    })
    // 绘制图表
    console.log(this.data.chartOption)
    // myChart.setOption(this.data.chartOption)
  },
})
