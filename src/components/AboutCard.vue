<template>
  <a class="card" id="about-card" :href="aboutLink" target="_blank" rel="noopener noreferrer">
    <div id="about-image">
      <img src="/src/assets/image/lime.svg" />
    </div>
    <div id="about-card-content">
      <h4>About Me</h4>
      <p class="noto-serif">关于我</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AboutCard',
  computed: {
    // 动态构建完整的about页面链接
    aboutLink() {
      const baseUrl = window.location.origin // 获取当前域名和端口
      return `${baseUrl}/about`
    },
  },
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/aboutcard.css';
</style>
