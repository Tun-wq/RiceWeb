<template>
  <a
    class="card article-blog-card"
    id="rice-article-card"
    :href="articleblogLink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div id="article-blog-card-text">
      <h4>Articles</h4>
      <p class="noto-serif">文字</p>
    </div>
    <div class="article-blog-card-image">
      <img src="/src/assets/image/cattype1.png" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'article-blogCard',
  computed: {
    articleblogLink() {
      const baseUrl = window.location.origin
      return `${baseUrl}/articles`
    },
  },
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/articleblogcard.css';
</style>
