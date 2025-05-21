<template>
  <div class="page">
    <h2>党课小组活动</h2>
    <!-- 读书会 -->
    <section class="section">
      <h3>读书会</h3>
      <p>本学年自43班党课小组共举办3次读书会，分别围绕《关于若干历史问题的决议》、《论持久战》、《实践论》与《矛盾论》展开讨论。在读与思中，深化党课小组成员对于辩证唯物主义的认识，筑牢思想之基。</p>
      <div class="images">
        <img src="~@/assets/report-images/dushu1.jpg" alt="读书会1" />
        <img src="~@/assets/report-images/dushu2.jpg" alt="读书会2" />
        <img src="~@/assets/report-images/dushu3.jpg" alt="读书会3" />
      </div>
    </section>
    <!-- 深根计划 -->
    <section class="section">
      <h3>深根计划</h3>
      <p>“劫灰飞尽 笃行致远”圆明园深根计划：党课小组共同参观圆明园纪念馆，身临其境感悟近代中国历史，以史为鉴，砥砺奋进。</p>
      <img class="single-image" src="~@/assets/report-images/shengeng-yuanmingyuan.jpg" alt="圆明园深根" />
      <p>赴香山实践：党课小组踏上了一场特别的旅程——参观北京香山革命纪念馆和香山公园。在春光的映照下，穿梭于历史与自然之间，感受红色文化的磅礴力量。</p>
      <img class="single-image" src="~@/assets/report-images/shengeng-xiangshan.jpg" alt="香山实践" />
    </section>
  </div>
</template>
<script>
export default { name: 'ThirdPage' };
</script>
<style scoped>
.page { padding: 5vw; }
h2 { font-size: 5vw; font-weight: bold; margin-bottom: 3vw; }
.section { margin-bottom: 6vw; }
.images { display: flex; gap: 2vw; flex-wrap: wrap; margin: 2vw 0; }
.images img { width: 30vw; height: auto; border-radius: 0.5vw; }
.single-image { width: 80vw; height: auto; margin: 2vw 0; border-radius: 0.5vw; }
h3 { font-size: 4vw; margin-bottom: 1vw; }
p { font-size: 3.5vw; line-height: 1.4; }
</style>