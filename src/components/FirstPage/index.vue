<template>
  <div class="cover-page">
    <!-- 封面标题 -->
    <h1 class="title">It Takes Three | 我们一起走过的肆叁年华</h1>
    <!-- 置顶推送 -->
    <p class="pin">自43班2024-2025年工作总结</p>
    <!-- 封面背景图，需将封面图放在 src/assets/report-images/cover.jpg -->
    <!-- <img class="cover-image" src="~@/assets/report-images/cover.jpg" alt="封面" /> -->
  </div>
</template>

<script>
export default {
  name: 'FirstPage'
};
</script>

<style scoped>
.cover-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.title {
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 2vw;
}
.pin {
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 5vw;
  color: #ffe58a;
}
.cover-image {
  width: 80vw;
  height: auto;
  border-radius: 1vw;
}
</style>