<template>
  <div class="page">
    <h2>Part FOUR 实践 & 志愿</h2>
    <!-- 实践活动 -->
    <section class="section">
      <h3>实践活动</h3>
      <ul class="activities">
        <li>2025年寒假：5人参加“A星探行·通韵杭城”赴杭州社会实践支队，获实践二等奖及最佳实践宣传奖；3人参加“数行长安”赴西安实践，获实践三等奖及新秀之星奖；1人参加“清鸟营勤”赴辽宁营口实践，获实践二等奖。</li>
        <li>2025年春季学期：“A星探行·雄安新梦”实践，19人参队。</li>
      </ul>
      <div class="images">
        <img src="~@/assets/report-images/practice1.jpg" alt="社会实践1" />
        <img src="~@/assets/report-images/practice2.jpg" alt="社会实践2" />
      </div>
    </section>
    <!-- 志愿公益 -->
    <section class="section">
      <h3>志愿公益</h3>
      <p>支部人均志愿工时 25.6h，累计33人次参加“清”年爱劳动、“尺素传情”、“笔墨守望”等班级集体性志愿服务活动。</p>
      <ul class="awards">
        <li>杨博尧：紫荆四星级志愿者，总志愿时长185小时。</li>
        <li>周圣策：总志愿时长80小时。</li>
      </ul>
      <div class="images">
        <img src="~@/assets/report-images/volunteer1.jpg" alt="志愿服务1" />
      </div>
    </section>
  </div>
</template>
<script>
export default { name: 'SixthPage' };
</script>
<style scoped>
.page { padding: 5vw; }
h2 { font-size: 5vw; font-weight: bold; margin-bottom: 3vw; }
.section { margin-bottom: 6vw; }
.activities, .awards { font-size: 3.5vw; line-height: 1.6; list-style: disc inside; margin-bottom: 2vw; }
.images { display: flex; gap: 2vw; flex-wrap: wrap; }
.images img { width: 38vw; height: auto; border-radius: 0.5vw; }
h3 { font-size: 4vw; margin-bottom: 1vw; }
p { font-size: 3.5vw; line-height: 1.6; }
</style>