<template>
  <div class="home">
    <div class="progressBar text-white" style="width:100vw">
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <img src="../assets/img/Sine02.png" alt="Sine02" class="w-20">
        <img src="../assets/img/Welcome.png" alt="Welcome" class="h-30">
        <img src="../assets/img/Shine01.png" alt="Shine01" class="w-30">
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <img src="../assets/img/Tica.png" alt="吉祥物Tica" class="w-p75">
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/RoleInfo" class="cursor-pointer btn-main">
          接受挑戰
        </router-link>
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
