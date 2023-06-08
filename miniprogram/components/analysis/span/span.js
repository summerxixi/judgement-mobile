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
    core3: 0,
    core4: 0,
    other3: 0,
    other4: 0,
    top: {
      core: '40%',
      val1: 20,
      val2: 80
    },
    downtop: {
      prop: [],
      core: '23.6%',
      val1: 10,
      val2: 20,
      val3: 30
    },
    downle: {
      prop: [],
      core: '23.6%',
      val1: 10,
      val2: 20,
      val3: 30
    },
    downri: {
      prop: [],
      core: '23.6%',
      val1: 10,
      val2: 20,
      val3: 30
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
    // 获取数据：
    const mutiCases = {
      'personalBias': {
        'briefOne': 27.74,
        'briefTwo': 27.74,
        'briefThree': 24.66,
        'briefFour': 19.87
      },
      'mutiCourterBias': {
        'courterNum': 368,
        'oneNum': 75,
        'oneRatio': 20.38,
        'twoNum': 55,
        'twoRatio': 14.95,
        'threeNum': 45,
        'threeRatio': 12.23,
        'fourNum': 78,
        'fourRatio': 21.2,
        'oneMoreNum': 85,
        'oneMoreRatio': 23.1,
        'twoMoreNum': 67,
        'twoMoreRatio': 18.21,
        'threeMoreNum': 32,
        'threeMoreRatio': 8.7,
        'fourMoreNum': 37,
        'fourMoreRatio': 10.05,
        'oneLessNum': 103,
        'oneLessRatio': 27.99,
        'twoLessNum': 33,
        'twoLessRatio': 8.97,
        'threeLessNum': 14,
        'threeLessRatio': 3.8,
        'fourLessNum': 8,
        'fourLessRatio': 2.17
      }
    }

    const leg1 = '罪名一  ' + mutiCases.personalBias.briefOne + '%'
    const leg2 = '罪名二  ' + mutiCases.personalBias.briefTwo + '%'
    const leg3 = '罪名三  ' + mutiCases.personalBias.briefThree + '%'
    const leg4 = '罪名四  ' + mutiCases.personalBias.briefFour + '%'

    this.data.core3 = mutiCases.mutiCourterBias.oneMoreRatio + mutiCases.mutiCourterBias.twoMoreRatio + mutiCases.mutiCourterBias.threeMoreRatio + mutiCases.mutiCourterBias.fourMoreRatio
    this.data.core4 = mutiCases.mutiCourterBias.oneLessRatio + mutiCases.mutiCourterBias.twoLessRatio + mutiCases.mutiCourterBias.threeLessRatio + mutiCases.mutiCourterBias.fourLessRatio
    const half = mutiCases.mutiCourterBias.oneNum + mutiCases.mutiCourterBias.twoNum + mutiCases.mutiCourterBias.threeNum + mutiCases.mutiCourterBias.fourNum
    console.log(mutiCases.mutiCourterBias.oneNum)
    setTimeout(() => {
      this.setData({
        topOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: '65%',
            top: '10%',
            icon: "circle",
            itemWidth: 16,  // 设置宽度
            itemHeight: 8, // 设置高度
            itemGap: 24,
            data: [leg1, leg2, leg3, leg4],
            textStyle: {
              fontFamily: 'PingFang SC',
              fontWeight: 600,
              fontSize: 10,
            },
          },
          series: [
            {
              label: {
                show: false,
                position: 'center',
              },
              color: ['#6979F8', '#9BA6FA', '#CDD2FD', '#4D4D4D'],
              name: '访问来源',
              type: 'pie',
              radius: ['70%', '90%'],
              center: ['30%', '50%'],
              data: [
                { value: mutiCases.personalBias.briefOne, name: leg1 },
                { value: mutiCases.personalBias.briefTwo, name: leg2 },
                { value: mutiCases.personalBias.briefThree, name: leg3 },
                { value: mutiCases.personalBias.briefFour, name: leg4 },
              ],
            }
          ]
        },
        midTopOption: {

          title: {
            "text": mutiCases.mutiCourterBias.courterNum,
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
            top: '18%',
            icon: "circle",
            itemGap: 10,
            data: ['仅有一个', '两个以上', '三个以上', '四个以上'],
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
          "startAngle": 180,
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['70%', '90%'],
              avoidLabelOverlap: false,
              startAngle: 180,
              center: ["50%", "70%"],
              color: ['#5750CF', " #6979F8", '#9BA6FA', '#4D4D4D', '#CDD2FD'],
              label: {
                color: '#6979F8',
                borderColor: '#555',
                show: true,
                // position: [1, 20],
                formatter: function (params) {
                  return '{a|' + params.value + '人  >' + ' }'
                },
                rich: {
                  a: {
                    fontSize: 8,
                    align: 'left',
                    fontWeight:'bold',
                    padding: [20,  -30]
                  },
                }
              },
              // labelLine:{
              // // normal:{show:false}
              // },
              data: [
                { value: mutiCases.mutiCourterBias.oneNum, name: '仅有一个' },
                { value: mutiCases.mutiCourterBias.twoNum, name: '两个以上' },
                { value: mutiCases.mutiCourterBias.threeNum, name: '三个以上' },
                { value: mutiCases.mutiCourterBias.fourNum, name: '四个以上' },
                {
                  value: half, name: '', tooltip: { formatter: function (a) { return "" } },
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
                return '{a|' + params.name + ' }'
              },
              rich: {
                a: {
                  fontSize: 6,
                  color: '#6979F8',
                  fontWeight:'bold',
                  padding: [40,  -25]
                },
              },
            },
            labelLine:{
              show:false
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [
              { value: mutiCases.mutiCourterBias.onemoreRatio, name: mutiCases.mutiCourterBias.oneMoreNum + '人 >' },
              { value: mutiCases.mutiCourterBias.twoMoreRatio, name: mutiCases.mutiCourterBias.twoMoreNum + '人 >' },
              { value: mutiCases.mutiCourterBias.threeMoreRatio, name: mutiCases.mutiCourterBias.threeMoreNum + '人 >' },
              { value: mutiCases.mutiCourterBias.fourMoreRatio, name: mutiCases.mutiCourterBias.fourMoreNum + '人 >' },
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
                return '{a|' + params.name +' }'
              },
              rich: {
                a: {
                  fontSize: 6,
                  color: '#6979F8',
                  fontWeight:'bold',
                  padding: [100,  -25]
                },
              },
            },
            labelLine:{
              show:false
            },
            type: 'pie',
            color: ['#4D4D4D', '#6979F8', '#CDD2FD'],
            center: ['50%', '50%'],
            radius: ['70%', '90%'],
            data: [
              { value: mutiCases.mutiCourterBias.oneLessRatio, name: mutiCases.mutiCourterBias.oneLessNum + '人 >' },
              { value: mutiCases.mutiCourterBias.twoLessRatio, name: mutiCases.mutiCourterBias.twoLessNum + '人 >' },
              { value: mutiCases.mutiCourterBias.threeLessRatio, name: mutiCases.mutiCourterBias.threeLessNum + '人 >' },
              { value: mutiCases.mutiCourterBias.fourLessRatio, name: mutiCases.mutiCourterBias.fourLessNum + '人 >' },
            ]
          }]
        }

      })
    }, 500)
  }


})
