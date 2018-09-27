var echarst1 = echarts.init(document.querySelector('.echarst-1'));

// 第一个图标配置
var option1 = {
  title: {
    // 标题
    text: '2017注册人数'
    // 标题文本
  },
  tooltip: {},
  // 提示框
  legend: {
    data: ['人数']
  },
  xAxis: {
    data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    // x轴提示信息
  },
  yAxis: {},
  series: [{
    name: '人数',
    type: 'bar',
    data: [500, 2000, 3600, 1000, 1000, 2000]
    // 与上面信息相对应
  }]
};
echarst1.setOption(option1);

// 这里对应的名字需要写对.option,声明的echarst 需要注意

var echarst2 = echarts.init(document.querySelector('.echarst-2'));

// 指定图表的配置项和数据
var option2 = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};
echarst2.setOption(option2);