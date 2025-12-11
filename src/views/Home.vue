<template>
  <div id="container">
    <div id="bento">
      <!-- 左侧name card -->
      <div class="long-grid"></div>
      <!-- 作品集 -->
      <div id="portfolio-grid"></div>
      <!-- 关于 -->
      <div class="mobile-inline-grid" id="about-grid"></div>
      <!-- 热力图 -->
      <div class="mobile-inline-grid" id="heatmap-grid"></div>
      <!-- 文章 -->
      <div id="articalblog-grid"></div>
      <!-- 作品展示 -->
      <div class="wide-grid" id="drawlist-grid"></div>
    </div>
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import AboutCard from '../components/AboutCard.vue'
import ArticalBlogCard from '../components/ArticalBlogCard.vue'
import DrawListCard from '../components/DrawListCard.vue'
import HeatmapCard from '../components/HeatmapCard.vue'

export default {
  name: 'Home',
  components: {
    NameCard,
    PortfolioCard,
    AboutCard,
    ArticalBlogCard,
    DrawListCard,
    HeatmapCard,
  },
}
</script>

<style scoped>
#container {
  margin: 1rem;
  background-color: aqua;
}

@media screen and (min-width: 768px) {
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    max-width: 1000px; /* padding+content宽度最大为max-width(因为设置为了border-box)，视口中剩余的宽度会被分配给margin */
    min-height: 100svh; /* 至少占满整个视口，当内容超出时会自动扩展 */
    margin: 0 auto;
    padding: 3rem 1rem;
  }
}
</style>
