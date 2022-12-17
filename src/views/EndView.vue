<template>
  <div class="position-relative">
    <div class="position-absolute">
      <main>
        <div class="firework" v-for="(item, index) in 90" :key="index"></div>
      </main>
    </div>
    <div class="d-flex align-items-end justify-content-start ps-20">
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/" class="cursor-pointer btn-main">
          重新挑戰
        </router-link>
      </div>
    </div>
    <div class="POExplainBg position-absolute"></div>
    <div class="d-flex flex-column align-items-center justify-content-center ">
      <div class="pb-4">
        <img src="../assets/img/Congrats.png" alt="Congrats" class="h-20">
      </div>
      <div class="d-flex flex-column px-20 align-items-center text-white">
        <h1 class="pb-4">恭喜通過 Scrum 新手村！</h1>
        <h2>正式加入 TT 資訊 開發 A 組！</h2>
      </div>
      <div class="d-flex">
        <div class="pe-40">
          <img src="../assets/img/POx0.5.png" alt="POx0.5" class="pt-20 pe-10">
          <img src="../assets/img/Ticax0.5.png" alt="Ticax0.5">
        </div>
        <div>
          <img src="../assets/img/SMx0.5.png" alt="SMx0.5">
          <img src="../assets/img/RDx0.5.png" alt="RDx0.5" class="pt-20 ps-10">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
<style lang="scss">
.POExplainBg{
  background-image: url(../assets/img/table.png);
  width: 100vw;
  height: 24rem;
  z-index: -2;
  top: 5%;
}
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}
$colors: #eca3e3, #01cdfe, #05ffa1;
$numOfFireworks: 50;
@mixin create-path() {
  offset-path: path(
    "M 0, 0" +
      "q 0, #{randomNum(0, -50)}, #{randomNum(-300, 300)}, #{randomNum(-300, 300)} "
  );
}
main {
  position: absolute;
  height: 10px;
  width: 10px;
  animation: 5s position ease-out infinite;
}
.firework {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  offset-distance: 0;
  z-index: -1;
  @for $i from 0 through $numOfFireworks {
    &:nth-of-type(#{$i}) {
      @include create-path();
      animation: 1s scatter ease-out infinite;
      background: lighten(nth($colors, random(length($colors))), 20%);
    }
  }
}
@keyframes scatter {
  0% {
    offset-distance: 0%;
  }
  50% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}
@keyframes position {
  0%,
  19.9% {
    transform: translate(10vw, 40vh);
  }
  20%,
  39.9% {
    transform: translate(40vw, 30vh);
  }
  40%,
  59.9% {
    transform: translate(20vw, 90vh);
  }
  60%,
  79.9% {
    transform: translate(30vw, 20vh);
  }
  80%,
  99.9% {
    transform: translate(80vw, 50vh);
  }
}
</style>
