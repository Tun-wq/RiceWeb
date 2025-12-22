<template>
  <div class="card" id="draw-list-card" ref="drawListCard" @wheel="handleWheel">
    <div v-for="item in items" :key="item.id" class="item">
      <!-- <img :src="item.imageUrl" :alt="'图片' + (index + 1)" class="item-image"> -->
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
        value: i + 1,
      })),
      // items: [
      //   { id: 0, imageUrl: require('../assets/image/pic1.jpg') },
      //   { id: 1, imageUrl: require('../assets/image/pic1.jpg') },
      //   { id: 2, imageUrl: require('../assets/image/pic1.jpg') },
      //   { id: 3, imageUrl: require('../assets/image/pic1.jpg') },
      //   { id: 4, imageUrl: require('../assets/image/pic1.jpg') },
      // ]
    }
  },
  methods: {
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
