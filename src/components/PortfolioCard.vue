<template>
  <a
    class="card portfolio-card"
    id="rice-portfolio-card"
    :href="portfolioLink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div id="portfolio-card-text">
      <h4>Portfolios</h4>
      <p class="noto-serif">作品</p>
    </div>
    <div class="portfolio-card-image">
      <img src="/src/assets/image/cateat1.png" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'PortfolioCard',
  computed: {
    portfolioLink() {
      const baseUrl = window.location.origin
      return `${baseUrl}/portfolios`
    },
  },
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/portfoliocard.css';
</style>
