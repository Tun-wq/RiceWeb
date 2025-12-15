<template>
  <div class="card" id="name-card">
    <div id="noise-image" style="background-image: url('src/assets/image/noise.png')"></div>
    <div id="profile">
      <div class="profile-image">
        <img src="/src/assets/image/avatar.jpg" />
      </div>
      <div class="profile-name">
        <h2 class="noto-serif">木合鸟</h2>
        <h3 class="noto-serif"><small>有趣很好，无聊也行</small></h3>
      </div>
    </div>

    <div id="contact-info">
      <a
        href="https://www.mihuashi.com/profiles/4289290?role=painter&relayId=mj5k0c4h-ts7zzxqihr"
        target="_blank"
        rel="noopener noreferrer"
        class="noto-serif"
        >米画师</a
      >
      <a href="mailto:3031508518@qq.com" class="lora">Email</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NameCard',
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/namecard.css';
</style>
