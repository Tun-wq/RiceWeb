<template>
  <div
    class="card"
    id="draw-list-card"
    ref="drawListCard"
    @wheel="handleWheel"
    @mouseenter="showButtons = true"
    @mouseleave="showButtons = false"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div v-for="item in items" :key="item.id" class="item" :style="getItemStyle(item.id)"></div>
    <button
      class="nav-button nav-button-left"
      :class="{ show: showButtons || isMobile }"
      @click="movePrev"
    >
      <span class="arrow">‹</span>
    </button>
    <button
      class="nav-button nav-button-right"
      :class="{ show: showButtons || isMobile }"
      @click="moveNext"
    >
      <span class="arrow">›</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DrawlistCard',
  data() {
    return {
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i,
      })),
      showButtons: false,
      touchStartX: 0,
      isMobile: window.innerWidth <= 767,
    }
  },
  methods: {
    getItemStyle(id) {
      const imageUrl = `src/assets/image/home/pic${id + 1}.jpg`
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
      }
    },

    handleWheel(event) {
      if (event.deltaY > 0) {
        this.moveNext()
      } else {
        this.movePrev()
      }
      event.preventDefault() // 防止页面滚动
    },
    moveNext() {
      const firstItem = this.items.shift()
      this.items.push(firstItem)
    },
    movePrev() {
      const lastItem = this.items.pop()
      this.items.unshift(lastItem)
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX
    },
    handleTouchEnd(event) {
      const touchEndX = event.changedTouches[0].clientX
      const diff = this.touchStartX - touchEndX

      // 如果滑动距离超过50px，则触发切换
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // 左滑，对应鼠标滚轮下移，显示下一张
          this.moveNext()
        } else {
          // 右滑，对应鼠标滚轮上移，显示上一张
          this.movePrev()
        }
      }
    },
  },
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/drawlistcard.css';
</style>
