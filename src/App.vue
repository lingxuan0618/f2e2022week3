<template>
  <div class="d-none d-xl-flex flex-column" style="min-height:100vh">
    <router-view style="flex-grow: 1;"/>
    <ScrumFooter/>
  </div>
  <div class="d-flex d-md-none justify-content-center align-items-center" style="min-height:100vh">
    <h1 class="text-white text-center">請使用桌機版瀏覽以獲得更好的使用者體驗</h1>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import ScrumFooter from '@/components/ScrumFooter.vue';

export default {
  components: {
    ScrumFooter,
  },
};
</script>
<style lang="scss">
@font-face{
  font-family: custom-pixel;
  src: url(./assets/font/Cubic_11_1.013_R.ttf);
}
body {
  font-family: custom-pixel;
}
</style>
