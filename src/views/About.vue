<template>
  <div class="about">
    <tip tip-color="bg-info">个人信息</tip>
    <describe-body>
      <profile>{{profileStr}}</profile>
      <info :rows="{rowOneArr, rowTwoArr, rowThreeArr}"></info>
    </describe-body>

    <tip text-color="text-danger">给他点赞</tip>
    <describe-body class="d-flex align-items-center justify-content-center">
      <push-button icon-id="icon-dianzan" @click="changePraise()">点赞呀</push-button>
      <h1>已被点赞{{praise}}次</h1>
    </describe-body>
  </div>
</template>

<script>
// import { praise, changePraise } from "@/lib/praise-lib.js";
import { useStore } from "vuex";
/**
 * 数据
 */
import {
  rowOneArr,
  rowTwoArr,
  rowThreeArr
} from "@/components/page-body/info/info.js";
import { profileStr } from "@/components/page-body/profile/porfile.js";

/**
 * 子页面组件
 */
import describeBody from "@/components/page-body/describe-body.vue";
import profile from "@/components/page-body/profile/profile.vue";
import info from "@/components/page-body/info/info.vue";
import pushButton from "@/components/push-button/push-button.vue";
import { computed } from "vue";

export default {
  components: {
    describeBody,
    profile,
    info,
    pushButton
  },
  setup() {
    const store = useStore();
    const praise = computed(() => store.state.praiseMod.praise);
    const changePraise = () => store.commit("changePraise");

    return {
      rowOneArr,
      rowTwoArr,
      rowThreeArr,
      profileStr,
      praise,
      changePraise
    };
  }
};
</script>

<style scoped>
.about {
  color: white;
  padding: 15px 40px 30px 40px;
}
</style>