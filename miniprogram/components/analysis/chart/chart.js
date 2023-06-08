// com-chart/index.js
import * as echarts from '../../ec-canvas/echarts'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String
    },
    width:{type:String},
    option: {
      type: Object,
      observer(val) {
        if (Object.keys(val).length) {
          this.initChart(val)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    chartId: '',
    canvasId: '',
    ec: {
      lazyload: true
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        chartId: `chart_${this.__wxExparserNodeId__}`,
        canvasId: `canvas_${this.__wxExparserNodeId__}`
      })
      this.chart = this.selectComponent('#' + this.data.chartId)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initChart(option) {
      this.chart.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr
        })
        chart.setOption(option)
        this.chart = chart
        return chart
      })
    }
  }
})
