<template>
  <div :class="['iconfont', id, color]" :style="{fontSize: `${size}px`}"></div>
</template>
 
<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 40
    }
  }
};
</script>

<style>
</style>