<template>
  <div class="d-flex flex-column align-items-center justify-content-evenly">
    <h1 class="text-white">角色介紹</h1>
    <div class="col-10 d-flex">
      <div class="col text-white px-10">
        <img src="../assets/img/PO_head_lookleft.png" alt="PO">
        <h2 class="pt-8">產品負責人</h2>
        <h4 class="pt-8">產品方向及願景，定義產品細節，優先級別，交付時間。</h4>
      </div>
      <div class="col text-white px-10">
        <img src="../assets/img/SM_head_lookleft.png" alt="SM">
        <h2 class="pt-8">敏捷教練</h2>
        <h4 class="pt-8">負責團隊 scrum 能合理運作，理解需求及安排產品技術製作時程，確保工程品質。</h4>
      </div>
      <div class="col text-white px-10">
        <img src="../assets/img/RD_head_lookleft.png" alt="RD">
        <h2 class="pt-8">開發團隊</h2>
        <h4 class="pt-8">負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。</h4>
      </div>
    </div>
    <div class="col-10 d-flex align-items-end justify-content-between px-10">
      <div>
        <a href="https://medium.com/文思不藏私/文思不藏私-scrum-的角色分工-d1d05818a954" target="_blank"
        class="text-white"><h4>推薦閱讀連結</h4></a>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/#" class="cursor-pointer btn-main me-12">
          &#60;
        </router-link>
        <router-link to="/POExplain" class="cursor-pointer btn-main">
          我瞭解了!
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
