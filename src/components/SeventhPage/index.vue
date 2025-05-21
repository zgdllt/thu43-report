<template>
  <div class="page">
    <h2>Part Five 支部事业</h2>
    <section class="section">
      <h3>团队训练营 & 班级风采展示会</h3>
      <img class="single-image" src="~@/assets/report-images/training-camp.jpg" alt="训练营展示" />
      <p>初聚于此，让我们用自己的方式说：“Hello ,Tsinghua!”</p>
    </section>
    <section class="section">
      <h3>我与清华的初见</h3>
      <img class="single-image" src="~@/assets/report-images/first-meet.jpg" alt="初见清华" />
      <p>原来你是这样的清华，原来你是这样的肆叁。</p>
    </section>
    <section class="section">
      <h3>KTV | 团建</h3>
      <img class="single-image" src="~@/assets/report-images/ktv.jpg" alt="KTV 团建" />
      <p>放飞自我，传递快乐，嗨起来！</p>
    </section>
    <section class="section">
      <h3>第一次生日会兼第一次班级团建</h3>
      <img class="single-image" src="~@/assets/report-images/birthday1.jpg" alt="生日会" />
      <p>后军训时代的第一次团建，“让我们对所有的烦恼都说拜拜”。</p>
    </section>
    <!-- 更多活动同理，示例省略 -->
  </div>
</template>
<script>
export default { name: 'SeventhPage' };
</script>
<style scoped>
.page { padding: 5vw; }
h2 { font-size: 5vw; font-weight: bold; margin-bottom: 3vw; }
.section { margin-bottom: 6vw; }
.single-image { width: 80vw; height: auto; margin: 2vw 0; border-radius: 0.5vw; }
h3 { font-size: 4vw; margin-bottom: 1vw; }
p { font-size: 3.5vw; line-height: 1.6; }
</style>