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
    chartOption:getBasicOption(),
    top:{
      core: '40%',
      val1:20,
      val2:80
    },
    downtop:{
      prop:[],
      core:'23.6%',
      val1:10,
      val2:20,
      val3:30
    },
    downle:{
      prop:[],
      core:'23.6%',
      val1:10,
      val2:20,
      val3:30
    },
    downri:{
      prop:[],
      core:'23.6%',
      val1:10,
      val2:20,
      val3:30
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready() {
    // 计算正态分布函数y值和x轴数值
    // 计算正态分布函数y值和x轴数值
    const xData = []
    const yData = []
    var markLineIndex = -1 // 初始化标线索引
    for (let i = -4; i <= 4; i += 0.1) {
      xData.push(i.toFixed(1))
      yData.push(Number((Math.exp(-i * i / 2) / Math.sqrt(2 * Math.PI)).toFixed(2)))
    
      // 找到x值为1.2的点所在的索引
      if (i.toFixed(1) === '1.2') {
        markLineIndex = 4
      }
    }
    

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
          },
        
          series: [{
            ...this.data.chartOption.series[0],
            data: this.data.chartData.yData,
            markLine: {
              symbol:'none',//去掉箭头
              // 在x=1.2处添加标线
              data: [
                { 
                  name: '本案法官偏移位置', 
                  yAxis: null, 
                  itemStyle: { color: 'red' }, // 标线的样式
                  lineStyle: { type: 'dashed' }, // 标线的类
                  xAxis: '1.2', // 在x=1.2处添加标线
                  label: { // 设置标注的样式
                    formatter: '{b}', // 将原本的"x=1.2"改为"1.2"
                    position: 'insideMiddleTop',
                    color: 'red',
                    fontSize: 8,
                    fontWeight: 'bold',
                  }
                }
              ],
            },
          }],
        },
        topOption: {
          backgroundColor: "#ffffff",
          title: {
            text: this.data.top.core,
            textStyle: {
              rich: {
                b: {
                  fontSize: "28"
                }
              }
            },
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
              value: this.data.top.val1,
            }, {
              value: this.data.top.val2,
            }]
          }]
        },
        midTopOption: {

          title: {
            "text": '275',
            subtext: '主审法官数',
            itemGap: 3,
            "x": '49%',
            "y": '44%',
            textAlign: "center",
            "textStyle": {
              "fontWeight": 'normal',
              "fontSize": 12,
              color: '#aaaaaa',

            },
            "subtextStyle": {
              "fontWeight": 'normal',
              "fontSize": 12,
              color: '#aaaaaa',
              lineHeight: 14
            },

          },

          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}: {c} ({d}%)",
            position: ['10%', '50%']
          },
          /*legend: {
              x: 'left',
              data:['视频','影院','直播']
          },*/
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

                normal: {
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 16.3, name: '45人' },
                { value: 14.5, name: '40人' },
                { value: 19.2, name: '' },
                {
                  value: 50, name: '', tooltip: { formatter: function (a) { return "" } },
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
            text: `{b|23.6%}`,
            textStyle: {
              rich: {
                b: {
                  fontSize: "15"
                }
              }
            },
            left: 'center',
            top: "center"
          },
          series: [{
            label: {
              show: false,
              position: 'center'
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [{
              value: 12.4,
            }, {
              value: 11.3,
            }, { value: 76.3 }
            ]
          }]
        },
        downOptionri: {
          backgroundColor: "#ffffff",
          title: {
            text: `{b|23.6%}`,
            textStyle: {
              rich: {
                b: {
                  fontSize: "15"
                }
              }
            },
            left: 'center',
            top: "center"
          },
          series: [{
            label: {
              normal: {
                fontSize: 8
              }
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [{
              value: 4,
              name: '11人'
            }, {
              value: 3.2,
              name: '9人'
            }, { value: 92.8 }
            ]
          }]
        }
      })
    }, 500)
  }


})
