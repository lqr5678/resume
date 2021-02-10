<template>
  <div class="profile rounded">
    &ensp; &ensp;
    <slot />
  </div>
</template>


<style scoped>
.profile {
  width: 100%;
  min-height: 120px;
  padding: 15px;
  word-wrap: break-word;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>