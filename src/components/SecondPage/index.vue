<template>
  <div class="page">
    <h2>Part One 思想引领</h2>
    <!-- 主题团日 秋季学期 -->
    <section class="section">
      <h3>主题团日 - 秋季学期 “双减政策不‘减’认同”</h3>
      <p>参与人数：23/24</p>
      <div class="images">
        <!-- 替换为实际图片文件名 -->
        <img src="~@/assets/report-images/tuanri-autumn1.jpg" alt="秋季活动图1" />
        <img src="~@/assets/report-images/tuanri-autumn2.jpg" alt="秋季活动图2" />
        <img src="~@/assets/report-images/tuanri-autumn3.jpg" alt="海报照片" />
      </div>
      <p class="text">
        本次团日选题立足同学们熟悉的领域——教育，探讨宏观政策的实施对微观个体的影响。主题团日通过增强同学对于双减政策的认同，进一步树立其正确的教育观念，鼓励提升综合素质；有助于初步建立教育公平意识。同时，能够提高辩证思考能力，理性看待社会现象，合理提出解决问题。
      </p>
    </section>
    <!-- 主题团日 春季学期 -->
    <section class="section">
      <h3>主题团日 - 春季学期 “网络平台下的身份裂变”</h3>
      <p>参与人数：23/24</p>
      <p class="text">
        自 43 支部开展党团日活动，围绕 “网络平台下的身份裂变”，经情景剧、讨论等形式，剖析影响、成因并探索应对策略。对“数字公民”的能力培养：从认知自我、管理关系、抵抗异化到预见未来，为大学生在虚实交织的生存环境中提供行动参考。
      </p>
      <div class="images">
        <img src="~@/assets/report-images/tuanri-spring1.jpg" alt="春季活动图1" />
        <img src="~@/assets/report-images/tuanri-spring2.jpg" alt="春季活动图2" />
        <img src="~@/assets/report-images/tuanri-spring3.jpg" alt="春季活动图3" />
      </div>
    </section>
  </div>
</template>
<script>
export default { name: 'SecondPage' };
</script>
<style scoped>
.page { padding: 5vw; }
.section { margin-bottom: 6vw; }
.images { display: flex; gap: 2vw; flex-wrap: wrap; margin: 2vw 0; }
.images img { width: 75vw; height: auto; border-radius: 0.5vw; }
.text { font-size: 3.5vw; line-height: 1.4; }
h2 { font-size: 5vw; font-weight: bold; margin-bottom: 3vw; }
h3 { font-size: 4vw; margin-bottom: 1vw; }
</style>