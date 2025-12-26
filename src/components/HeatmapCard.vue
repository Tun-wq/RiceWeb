<template>
  <div class="card noto-sans" id="heatmap-card">
    <h4>向腱鞘炎进发</h4>
    <div id="cal-heatmap"></div>
  </div>
</template>

<script>
import CalHeatmap from 'cal-heatmap'
import 'cal-heatmap/cal-heatmap.css'
import Tooltip from 'cal-heatmap/plugins/Tooltip'

export default {
  name: 'HeatmapCard',
  mounted() {
    // 初始化cal-heatmap
    const cal = new CalHeatmap()

    // 获取今天的日期，设置为最近三个月的时间范围
    const now = new Date()
    const startDate = new Date(now.getFullYear(), now.getMonth()-2, 2)
    console.log('startDate:'+startDate)

    // 创建一些模拟数据 - 近三个月的绘画数据
    const data = this.generateMockData()
    console.log('data:')
    console.log(data)
    // 创建一个映射对象，方便根据日期快速查找content
    const contentMap = {}
    data.forEach(item => {
      contentMap[item.date] = item.content
    })

    // 配置热力图
    cal.paint({
      date: { start: startDate },
      itemSelector: '#cal-heatmap',
      range: 3, // 显示3个月
      domain: { type: 'month' },
      subDomain: { 
        type: 'day',
        width: 8,
        height: 8,
      },
      data: {
        source: data,
        x: 'date',
        y: 'count',
      },
      // 设置颜色映射
      scale: {
        color: {
          type: 'linear',
          scheme: 'Greens',
          // domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          domain: [0, 1],
        }
      },
    },
    [
      [
        Tooltip,
        {
          text: function (date, value, dayjsDate) {
            const dateStr = dayjsDate.format('YYYY-MM-DD')
            const content = contentMap[dateStr] || '啥也没画的一天'
            return [
              '<div style="white-space: pre-line; text-align: left;">',
              `在${dayjsDate.format('YYYY年MM月DD日')}画了${value ? value : '0'}张画<br>`,
              content,
              '</div>'
            ].join('')
          },
        },
      ],
    ]
    )
  },
  methods: {
    generateMockData() {
      const data = []
      const today = new Date()
      const threeMonthsAgo = new Date(today.getTime() - (90 * 24 * 60 * 60 * 1000))

      // 生成每天的数据点
      for (let d = new Date(threeMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const count = Math.floor(Math.random() * 100) / 100 // 0-1张画
        data.push({
          date: d.toISOString().split('T')[0], // YYYY-MM-DD格式
          count: count,
          content: '完成了稿件的上色工作'
        })
      }

      return data
    }
  }
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/heatmapcard.css';
</style>
