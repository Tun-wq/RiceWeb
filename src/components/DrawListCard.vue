<template>
  <div class="card">
    <ul class="card-stack" id="cardStack">
      <li class="piece">
        <img src="../assets/image/pic1.jpg" alt="Card image">
      </li>
      <li class="piece">
        <img src="../assets/image/pic2.jpg" alt="Card image">
      </li>
      <li class="piece">
        <img src="../assets/image/pic4.png" alt="Card image">
      </li>
      <!-- <li class="piece">
        <img src="../assets/image/pic2.jpg" alt="Card image">
      </li>
      <li class="piece">
        <img src="../assets/image/pic3.jpg" alt="Card image">
      </li>
      <li class="piece">
        <img src="../assets/image/pic4.png" alt="Card image">
      </li>
      <li class="piece">
        <img src="../assets/image/pic5.jpg" alt="Card image">
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DrawlistCard',
  props: {
    photos: {
      type: Array,
      default: () => [
        'src/assets/image/pic1.jpg',
        'src/assets/image/pic2.jpg',
        'src/assets/image/pic3.jpg',
        'src/assets/image/pic4.jpg',
      ],
    },
  },
  data() {
    return {
      CARD_OFFSET: 4,
      ROTATION_FACTOR: 6,
      cards: [],
      dragState: {
        isDragging: false,
        startY: 0,
        currentY: 0,
        draggedIndex: -1,
      },
    }
  },
  methods: {},
}
</script>

<style scoped>
@import '../assets/style/components/card/card.css';
@import '../assets/style/components/card/drawlistcard.css';
</style>
