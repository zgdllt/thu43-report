<template>
  <div id="app"
    @touchstart.native="handleTouchStart"
    @touchend.native="handleTouchEnd"
    @click.capture.stop="handleTap"
  >
    <FirstPage class="delay box" v-if="step === 1" @start="next" @wheel.native="handleWheel"></FirstPage>
    <SecondPage
      class="delay box"
      v-if="step === 2"
      @wheel.native="handleWheel"
    ></SecondPage>
    <ThirdPage class="delay box" v-if="step === 3" @next="next" @wheel.native="handleWheel"></ThirdPage>
    <ForthPage class="delay box" v-if="step === 4" @next="next" @wheel.native="handleWheel"></ForthPage>
    <FifthPage class="delay box" v-if="step === 5" @next="next" @wheel.native="handleWheel"></FifthPage>
    <SixthPage class="delay box" v-if="step === 6" @next="next" @wheel.native="handleWheel"></SixthPage>
    <SeventhPage
      class="delay box"
      v-if="step === 7"
      @next="next"
      @wheel.native="handleWheel"
    ></SeventhPage>
    <EighthPage class="delay box" v-if="step === 8" @next="next" @wheel.native="handleWheel"></EighthPage>
    <NinthPage class="delay box" v-if="step === 9"
      @next="next"
      @wheel.native="handleWheel"
      @restart="goStart"
    ></NinthPage>
    <div v-if="step !== 9" class="footer"></div>
    <div :class="handleMask"></div>
  </div>
</template>


<script>
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import ForthPage from "./components/ForthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import EighthPage from "./components/EighthPage";
import NinthPage from "./components/NinthPage";
export default {
  name: "App",
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    FifthPage,
    SixthPage,
    SeventhPage,
    EighthPage,
    NinthPage,
  },
  data() {
    return {
      step: 1,
      mask: true,
      touchStartY: 0,
    };
  },
  computed: {
    handleMask() {
      return {
        mask: this.mask,
      };
    },
    isMobile() {
      return (
        /AppleWebKit.*Mobile/i.test(navigator.userAgent) ||
        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
          navigator.userAgent
        )
      );
    },
  },
  watch: {
    step() {
      this.mask = false;
      setTimeout(() => {
        this.mask = true;
      });
    },
  },
  methods: {
    handleTouchStart(e) {
      this.touchStartY = e.touches[0].clientY;
    },
    handleTouchEnd(e) {
      const endY = e.changedTouches[0].clientY;
      const deltaY = this.touchStartY - endY;
      const threshold = 50;
      if (deltaY > threshold) {
        this.next();
      } else if (deltaY < -threshold) {
        this.prev();
      }
    },
    // 点击翻页（仅限未到最后一页）
    handleTap() {
      if (this.step < 9) this.next();
    },
    // 回到开头
    goStart() {
      this.step = 1;
    },
    prev() {
      if (this.step > 1) this.step--;
    },
    handleWheel(e) {
      const box = e.currentTarget;
      if (e.deltaY > 0) {
        if (box.scrollTop + box.clientHeight >= box.scrollHeight - 1) {
          this.next();
        }
      } else if (e.deltaY < 0) {
        if (box.scrollTop <= 0) {
          this.prev();
        }
      }
    },
    next() {
      if (this.step === 9) {
        return;
      }
      this.step++;
    },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  color: white;
  overflow-y: auto;
}
#app {
  background-image: linear-gradient(#1f9ef4, #a1e1ff);
  height: 100vh;
  overflow-y: auto;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti, MingLiu;
  font-size: 4vw;
}
.box {
  padding: 5vw;
  padding-top: 10vw;
  height: 100vh;
  overflow-y: auto;
}

.delay {
  animation-name: delay-display;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
}
@keyframes delay-display {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-top {
  0% {
    opacity: 0;
    transform: translateY(10vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0vh);
  }
}
.value {
  display: inline-block;
  padding: 5px;
  transform: scaleY(1.1) translateY(-5.2%);
  font-weight: bolder;
  color: #ebf45f;
}
</style>
<style scoped>
.footer {
  background-image: url("~@/assets/images/foot.png");
  background-size: cover;
  width: 100vw;
  height: 20vh;
  position: absolute;
  bottom: 0vh;
  overflow: hidden;
}
.mask {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  animation: up-move 1s;
  background-image: url("~@/assets/images/mask.png");
  background-repeat: repeat-x;
  background-size: contain;
}
@keyframes up-move {
  0% {
    transform: translateY(0);
    z-index: -1;
  }
  100% {
    transform: translateY(-100vh);
    z-index: 2;
  }
}
</style>
