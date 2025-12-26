<template>
  <div id="container">
    <!-- bento风格个人卡片 -->
    <div id="bento">
      <!-- 个人名片 -->
      <div class="long-grid" id="namecard-grid">
        <NameCard />
      </div>
      <!-- 作品集 -->
      <div id="portfolio-grid">
        <PortfolioCard />
      </div>
      <!-- 关于 -->
      <div class="mobile-inline-grid" id="about-grid">
        <AboutCard />
      </div>
      <!-- 热力图 -->
      <div class="mobile-inline-grid" id="heatmap-grid">
        <HeatmapCard />
      </div>
      <!-- 文章 -->
      <div id="article-blog-grid">
        <ArticleBlogCard />
      </div>
      <!-- 作品展示 -->
      <div class="wide-grid" id="drawlist-grid">
        <DrawListCard />
      </div>
    </div>
    <!-- 页脚 -->
    <footer class="noto-serif"></footer>
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import AboutCard from '../components/AboutCard.vue'
import ArticleBlogCard from '../components/ArticleBlogCard.vue'
import DrawListCard from '../components/DrawListCard.vue'
import HeatmapCard from '../components/HeatmapCard.vue'

export default {
  name: 'Home',
  components: {
    NameCard,
    PortfolioCard,
    AboutCard,
    ArticleBlogCard,
    DrawListCard,
    HeatmapCard,
  },
}
</script>

<style scoped>
#container {
  margin: 1rem;
  /* background-color: aqua; */
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

#bento {
  --gap: 2rem;
  gap: var(--gap);
  flex-wrap: wrap;
  margin: 2rem 0;
  display: flex;
}

@media screen and (min-width: 768px) {
  #bento {
    gap: var(--gap);
    width: 100%; /* bento的border+padding+content宽度 = 其父元素container的content宽度 */
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* background-color: azure; */
  }

  #bento > div {
    aspect-ratio: 1; /* grid-template-columns将bento分成4列，bento中有6个div，所以至少需要2行，所以此处将bento划分出8个正方形 */
    /* border: 1px dashed rgba(0,0,0,0.3); */
  }

  .long-grid {
    /* 先让long-grid占据2行，此时其为正方形 */
    grid-row: 1 / span 2;
    /* 再将其调整为宽高比1/2的矩形 */
    aspect-ratio: 1/2 !important;
  }

  .wide-grid {
    grid-column: 3 / span 2;
    aspect-ratio: 2 !important;
  }
}

@media screen and (max-width: 767px) {
  .mobile-inline-grid {
    height: 15rem;
    /* background-color:blueviolet; */
  }
  #namecard-grid,
  #article-blog-grid,
  #portfolio-grid,
  #drawlist-grid {
    width: 100%;
  }
  #drawlist-grid {
    height: 15rem;
  }
  #about-grid,
  #heatmap-grid {
    width: calc(50% - var(--gap) / 2);
    /* background-color:blueviolet; */
  }
}
</style>
