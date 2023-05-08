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
        core: '40%',
        topOption: null,
        downOption: null,
        downOptionle: null,
        downOptionti: null
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    ready() {
        setTimeout(() => {
            this.setData({
                topOption: {
                    backgroundColor: "#ffffff",
                    title: {
                        text: `{b|40%}`,
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
                            value: 40,
                        }, {
                            value: 60,
                        }]
                    }]
                },
                midTopOption: {
                  
                    title: {
                        "text": '275',
                        subtext:'主审法官数',
                        itemGap:3,
                        "x": '49%',
                        "y": '44%',
                        textAlign: "center",
                        "textStyle": {
                            "fontWeight": 'normal',
                            "fontSize": 12,
                            color:'#aaaaaa',
         
                        },
                        "subtextStyle": {
                            "fontWeight": 'normal',
                            "fontSize": 12,
                            color:'#aaaaaa',
                            lineHeight:14
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
                    "color": ["#0696ff","#7ed321","#ffc31a", "transparent"],
                    "startAngle": 180,
                    series: [
                        {
                            name:'',
                            type:'pie',
                            radius: ['70%', '90%'],
                            avoidLabelOverlap: false,
                            startAngle: 180,
                            center:["50%","70%"],
                            color: ['#4D4D4D', '#6979F8', '#CDD2FD','pink'],
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
                            data:[
                                {value:16.3, name:'45人'},
                                {value:14.5, name:'40人'},
                                {value:19.2, name:''},
                                {value:50, name:'',tooltip:{formatter:function(a){return ""}},
                                itemStyle: {
                                    color: "transparent",
                                },}]
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
