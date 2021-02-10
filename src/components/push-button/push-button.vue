<template>
  <button class="push-button btn btn-light rounded border-0">
    <my-icon :id="iconId" :size="iconSize" :color="iconColor"></my-icon>
    <h4>
      <slot />
    </h4>
  </button>
</template>

<script>
export default {
  props: {
    iconId: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: [Number, String],
      default: 45
    }
  }
};
</script>

<style scoped>
.push-button {
  margin: 10px 25px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>