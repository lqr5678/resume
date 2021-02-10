<template>
  <div class="describe-body rounded-lg">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.describe-body {
  min-height: 80vh;
  padding: 20px;
  margin-bottom: 50px;
  background-color: rgba(54, 59, 95, 0.8);
}
</style>