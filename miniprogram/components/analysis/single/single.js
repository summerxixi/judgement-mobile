import getBasicOption from "../options/basicOption.js"

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
    topOption: null,
    downOption: null,
    downOptionle: null,
    downOptionti: null,
    chartOption: getBasicOption(),
    core3: 0,
    core4: 0,
    other3: 0,
    other4: 0,
    ylabel:'频率',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready() {
    // 计算正态分布函数y值和x轴数值
    // 计算正态分布函数y值和x轴数值
    // 获取数据：
    const res = {
      'personalBias': 1.46,
      'mutiCourtersBias': {
        'courterNum': 227,
        'oneLessNum': 1,
        'oneLessRatio': 0.44,
        'oneMoreNum': 10,
        'oneMoreRatio': 4.41,
        'doubleLessNum': 2,
        'doubleLessRatio': 0.88,
        'doubleMoreNum': 2,
        'doubleMoreRatio': 0.88,
        'lessNum': 3,
        'lessRatio': 1.32,
        'moreNum': 12,
        'moreRatio': 5.29
      },
      'localBias': {
        'xdata': [-9.58, -8.769, -7.958, -7.147, -6.336, -5.525, -4.714, -3.903, -3.092, -2.281, -1.47, -0.659, 0.152, 0.963, 1.774, 2.585, 3.396, 4.207, 5.018, 5.829, 6.64, 7.451, 8.262, 9.073, 9.884, 10.695, 11.506, 12.317, 13.128, 13.939],
        'ydata': [1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 31.0, 13.0, 6375.0, 241.0, 58.0, 18.0, 27.0, 3.0, 3.0, 3.0, 0.0, 7.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
        'bias': 0.0
      }
    }

    this.data.core3 = res.mutiCourtersBias.oneLessRatio + res.mutiCourtersBias.oneMoreRatio
    this.data.core4 = res.mutiCourtersBias.doubleLessRatio + res.mutiCourtersBias.doubleMoreRatio
    const xData = res.localBias.xdata
    const yData = res.localBias.ydata
    var isAbove = false
    console.log(yData)
    console.log(Math.max(...yData),0); // 输出除以1000之后的数组
    if(Math.max(...yData)>1000)  {
      isAbove = true
      for (var i = 0; i < yData.length; i++) {
        yData[i] /= 1000;
      }
      console.log(yData); // 输出除以1000之后的数组
    }
    var markLineIndex = 0 // 初始化标线索引
    // 设置图表数据
    this.setData({
      chartData: {
        xData,
        yData,
      },

    })
    setTimeout(() => {
      this.setData({
        chartOption: {
          ...this.data.chartOption,
          xAxis: {
            ...this.data.chartOption.xAxis,
            data: this.data.chartData.xData,
            name: '年'
          },
          yAxis:{
            ...this.data.chartOption.yAxis,
            name: isAbove?'频率/1000':'频率',
          },
          series: [{
            ...this.data.chartOption.series[0],
            data: this.data.chartData.yData,
            markLine: {
              symbol: 'none',//去掉箭头
              // 在x=1.2处添加标线
              label: { // 设置标注的样式
                formatter: '{b}', // 将原本的"x=1.2"改为"1.2"
                position: 'insideMiddleTop',
                color: 'red',
                fontSize: 8,
                fontWeight: 'bold',
              },

              data: [
                {
                  silent: false,
                  name: '本案法官偏移位置 ' +res.localBias.bias,
                  // yAxis: null,
                  itemStyle: { color: 'red' }, // 标线的样式
                  lineStyle: { type: 'dashed' }, // 标线的类
                  xAxis: res.localBias.bias+Math.abs(xData[0]), // 在x=1.2处添加标线
                  label: {
                    position: 'end',
                    formatter: '本案法官偏移位置 ' +res.localBias.bias,
                  },

                }
              ],
            },
          }],
        },
        topOption: {
          backgroundColor: "#ffffff",
          title: {
            text: res.personalBias + '%',
            left: 'center',
            top: "center"
          },
          series: [{
            label: {
              show: false,
              position: 'center'
            },
            type: 'pie',
            color: ['#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [{
              value: res.personalBias,
            }, {
              value: 100 - res.personalBias,
            }]
          }]
        },
        midTopOption: {

          title: {
            "text": res.mutiCourtersBias.courterNum,
            subtext: '主审法官数',
            itemGap: 3,
            "x": '49%',
            "y": '44%',
            textAlign: "center",
            "textStyle": {
              "fontWeight": 'bold',
              "fontSize": 12,

            },
            "subtextStyle": {
              "fontWeight": 'normal',
              "fontSize": 12,
              color: '#aaaaaa',
              lineHeight: 14
            },

          },
          legend: {
            orient: 'vertical',
            itemWidth: 16,  // 设置宽度
            itemHeight: 8, // 设置高度
            left: '70%',
            top: '45%',
            icon: "circle",
            itemGap: 10,
            data: ['量刑轻于集体经验', '量刑重于集体经验'],
            textStyle: {
              fontWeight: 400,
              fontSize: 8,
              color: '#666666',
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}: {c} ({d}%)",
            position: ['10%', '50%']
          },
          "color": ["#0696ff", "#7ed321", "#ffc31a", "transparent"],
          "startAngle": 180,
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['70%', '90%'],
              avoidLabelOverlap: false,
              startAngle: 180,
              center: ["50%", "70%"],
              color: ['#4D4D4D', '#6979F8', '#CDD2FD', 'pink'],
              label: {
                formatter: function (params) {
                  return '{a|' + params.value + '人  >' + ' }'
                },
                rich: {
                  a: {
                    fontSize: 6,
                    color: '#6979F8',
                    fontWeight:'bold',
                    padding: [100,  -10]
                  },
                },
              },

              data: [
                { value: res.mutiCourtersBias.lessNum, name: '量刑轻于集体经验' },
                { value: res.mutiCourtersBias.moreNum, name: '量刑重于集体经验' },
                { value: 227 - res.mutiCourtersBias.lessNum - res.mutiCourtersBias.moreNum, name: '' },
                {
                  value: 227, name: '', tooltip: { formatter: function (a) { return "" } },
                  itemStyle: {
                    color: "transparent",
                  },
                }]
            },

          ]
        },
        downOptionle: {
          backgroundColor: "#ffffff",
          title: {
            text: this.data.core3.toFixed(2) + '%',
            "textStyle": {
              "fontSize": 12,
            },
            left: 'center',
            top: "center"
          },
          series: [{
            label: {
              formatter: function (params) {
                return '{a|' + params.name +  ' }'
              },
              rich: {
                a: {
                  fontSize: 6,
                  color: '#6979F8',
                  fontWeight:'bold',
                  padding: [80,  -5]
                },
              },
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [
              {
                value: res.mutiCourtersBias.oneLessRatio,
                name: res.mutiCourtersBias.oneLessNum + '人  >'
              }, {
                value: res.mutiCourtersBias.oneMoreRatio,
                name: res.mutiCourtersBias.oneMoreNum + '人 >'
              }, { value: 100 - this.data.core3 }
            ]
          }]
        },
        downOptionri: {
          backgroundColor: "#ffffff",
          title: {
            text: this.data.core4.toFixed(2) + '%',
            "textStyle": {
              "fontSize": 12,
            },
            left: 'center',
            top: "center"
          },
          series: [{
            label: {
              formatter: function (params) {
                return '{a|' + params.name +'}'
              },
              rich: {
                a: {
                  fontSize: 6,
                  color: '#6979F8',
                  fontWeight:'bold',
                  padding: [80,  -5]
                },
              },
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [{
              value: res.mutiCourtersBias.doubleLessRatio,
              name: res.mutiCourtersBias.doubleLessNum + '人  >'
            }, {
              value: res.mutiCourtersBias.doubleMoreRatio,
              name: res.mutiCourtersBias.doubleMoreNum + '人 >'
            }, { value: 100 - this.data.core4 }
            ]
          }]
        }
      })
    }, 500)
  }


})
