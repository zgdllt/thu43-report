<template>
  <div class="page">
    <h2>Part Two 学风建设</h2>
    <p class="intro">
      我们班秉持着“信息共享，互通有无”的原则：通过建设班级云盘、组织小班辅导、自由答疑等多种方式，推动同学间互帮互助，打造良好学习氛围。在学业、科创方面均取得骄人成绩。
    </p>
    <!-- 云盘图片 -->
    <div class="images">
      <img src="~@/assets/report-images/cloudpan.jpg" alt="班级云盘" />
    </div>
    <!-- 项目获奖列表 -->
    <ul class="awards">
      <li>李孟涵、杨博尧（共同第一作者）的项目《片剂表面缺陷智能检测及剔除系统》获清华大学第四十三届“挑战杯”学生课外学术科技作品竞赛三等奖。</li>
      <li>多位同学参加第八届“拓竹杯”软件设计大赛、THUAI-8人工智能挑战赛、新生C语言大赛等赛事，取得优异成绩。</li>
    </ul>
  </div>
</template>
<script>
export default { name: 'ForthPage' };
</script>
<style scoped>
.page { padding: 5vw; }
h2 { font-size: 5vw; font-weight: bold; margin-bottom: 3vw; }
.intro { font-size: 3.5vw; line-height: 1.6; margin-bottom: 4vw; }
.images { text-align: center; margin-bottom: 4vw; }
.images img { width: 80vw; height: auto; border-radius: 0.5vw; }
.awards { font-size: 3.5vw; line-height: 1.6; list-style: disc inside; }
</style>