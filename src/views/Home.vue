<template>
  <div class="bento-container">
    <div class="bento-grid">
      <!-- 左侧name card -->
      <div class="left-section">
        <NameCard />
      </div>

      <!-- 右侧部分 -->
      <div class="right-section">
        <!-- 右上部分 -->
        <div class="right-top">
          <div class="draws-container">
            <DrawsCard />
          </div>
          <div class="mbti-container">
            <MbtiCard />
          </div>
        </div>

        <!-- 右下部分 -->
        <div class="right-bottom">
          <div class="bottom-card">
            <ArticalBlogCard />
          </div>
          <div class="bottom-card">
            <DrawBlogCard />
          </div>
          <div class="bottom-card">
            <HeatmapCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'
import DrawsCard from '../components/DrawsCard.vue'
import MbtiCard from '../components/MbtiCard.vue'
import ArticalBlogCard from '../components/ArticalBlogCard.vue'
import DrawBlogCard from '../components/DrawBlogCard.vue'
import HeatmapCard from '../components/HeatmapCard.vue'

export default {
  name: 'Home',
  components: {
    NameCard,
    DrawsCard,
    MbtiCard,
    ArticalBlogCard,
    DrawBlogCard,
    HeatmapCard,
  },
}
</script>

<style scoped>
.bento-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: aquamarine;
}

.bento-grid {
  width: 1010px;
  height: 504px;
  display: flex;
  gap: 30px;
  background-color: blueviolet;
}

.left-section {
  width: 24%;
  height: 96%;
}

.right-section {
  width: 76%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.right-top {
  flex: 1;
  display: flex;
  gap: 30px;
}

.draws-container {
  flex: 2;
}

.mbti-container {
  flex: 1;
}

.right-bottom {
  flex: 1;
  display: flex;
  gap: 30px;
}

.bottom-card {
  flex: 1;
}
</style>
