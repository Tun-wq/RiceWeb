<template>
  <div class="card" id="draw-list-card" ref="drawListCard" @wheel="handleWheel">
    <div v-for="item in items" :key="item.id" class="item" :style="getItemStyle(item.id)">
    </div>
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
    }
  },
  methods: {
    getItemStyle(id) {
      const imageUrl = `src/assets/image/home/pic${id+1}.jpg`;
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
      }
    },

    handleWheel(event) {
      if (event.deltaY > 0) {
        this.moveNext();
      } else {
        this.movePrev();
      }
      event.preventDefault(); // 防止页面滚动
    },
    moveNext() {
      const firstItem = this.items.shift();
      this.items.push(firstItem);
    },
    movePrev() {
      const lastItem = this.items.pop();
      this.items.unshift(lastItem);
    },
  }
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/drawlistcard.css';
</style>