<template>
  <div class="tip">
    <h4 :class="textColor" :style="{fontSize: `${textSize}px`}">
      <slot>Content</slot>
    </h4>

    <div :class="['rounded', tipColor]"></div>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: "text-white"
    },
    textSize: {
      type: Number,
      default: 25
    },
    tipColor: {
      type: String,
      default: "bg-white"
    }
  }
};
</script>

<style scoped>
.tip > div {
  width: 35px;
  height: 5px;
  margin: 10px 0;
}
</style>