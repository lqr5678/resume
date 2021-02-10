<template>
  <div class="home">
    <div class="wrapper">
      <slide-bar class="hidden-lg" icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">欢迎来到刘某人的在线简历</slide-bar>

      <div class="w-100 pre-scrollable scrollbar" style="max-height: 90vh">
        <content-head>
          <template #title>{{title}}</template>
          <template #des>{{des}}</template>
          <template #calc>已被赞{{praise}}次</template>
        </content-head>
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>

      <user-profile class="hidden-lg" :src="src" />
    </div>
  </div>
</template>

<script>
import { pathToSign } from "@/lib/router-lib.js";
// import { praise } from "@/lib/praise-lib.js";
import { useStore } from "vuex";
import { computed } from "vue";
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentHead from "@/components/content-head/content-head.vue";
export default {
  name: "Home",
  components: {
    userProfile,
    slideBar,
    contentHead
  },
  setup() {
    const { title, des } = pathToSign();
    const store = useStore();

    const praise = computed(() => store.state.praiseMod.praise);
    return {
      src: require("../assets/img/huazi.jpg"),
      title,
      des,
      praise
    };
  }
};
</script>

<style>
.scrollbar::-webkit-scrollbar{
  width: 5px;
  background-color: #ccc;  
} 
/*定义滑块 内阴影+圆角*/  
.scrollbar::-webkit-scrollbar-thumb  
{  
  border-radius: 10px;  
  background-color: #999;  
}

.home {
  height: 100vh;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
}

.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1000px) {
    .hidden-lg {
        display: none;
    }
}
</style>
