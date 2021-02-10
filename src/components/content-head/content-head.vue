<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="des" />
      </h1>
    </div>

    <h6>
      <slot name="calc" />
    </h6>

    <my-icon class="quit" id="icon-tuichu" size="35" v-if="showStatus" @click="quit()"></my-icon>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    /**
     * 退出按钮显示状态
     * @description 根据路由变化确定显示与否
     */
    const showStatus = computed(() => {
      const { path } = router.currentRoute.value;
      return path === "/" ? false : true;
    });

    /**
     * 路由跳转方法
     * @description 默认为跳转退出
     * @param {number} lev 跳转层级
     */
    const quit = (lev = -1) => router.go(lev);

    return {
      showStatus,
      quit
    };
  }
};
</script>

<style scoped>
.content-head {
  width: 100%;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content-head > div {
  display: flex;
}

.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}

.quit {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
</style>