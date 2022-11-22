<template>
  <div class="d-flex flex-column" style="min-height:100vh">
    <router-view style="flex-grow: 1;"/>
    <ScrumFooter/>
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
