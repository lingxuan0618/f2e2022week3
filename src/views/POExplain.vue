<template>
  <div class="d-flex flex-column align-items-center justify-content-evenly position-relative">
    <div class="POExplainBg position-absolute"></div>
    <div class="d-flex px-20">
      <div class="d-flex">
        <img src="../assets/img/Property1PO.png" alt="" class="me-8">
        <div class="border border-bold border-white w-16 h-16 me-8 bg-mainPink"></div>
      </div>
      <div class="border border-bold border-white text-white p-12 bg-mainPink">
        <h4 class="pb-7">我是 TT 資訊，開發 A 組的 PO，粉紅豬。</h4>
        <h4 class="pb-7">PO 也就是產品負責人（Product Owner）。</h4>
        <h4 class="pb-7">
          產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！
        </h4>
        <h4>
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
        </h4>
      </div>
    </div>
    <div class="col-10 d-flex align-items-end justify-content-end px-10">
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/RoleInfo" class="cursor-pointer btn-main me-12">
          &#60;
        </router-link>
        <router-link to="/" class="cursor-pointer btn-main">
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
<style>
.POExplainBg{
  background-image: url(../assets/img/table.png);
  width: 100vw;
  height: 24rem;
  z-index: -2;
}
</style>
