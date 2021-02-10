<template>
  <div class="default container">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-jurassic_report" color="text-danger" size="48"></my-icon>
        <h3>个人信息</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-xinxi" color="text-warning" size="45"></my-icon>
        <h3>个人评价</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Portfolio')">
        <my-icon id="icon-gongjuxiang" color="text-success" size="45"></my-icon>
        <h3>其他</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { routerJump } from "../lib/router-lib.js";
export default {
  setup() {
    const { toPage } = routerJump();
    return {
      toPage
    };
  }
};
</script>

<style scoped>
.row {
  height: 30vh;
}
.default > .row > .col {
  color: white;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>