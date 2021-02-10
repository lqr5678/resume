<template>
  <div>
    <my-icon id="icon-youxia" color="text-light" size="30"></my-icon>
    <h6>
      <slot name="item">content-item</slot>:
      <slot name="value">null</slot>
    </h6>
  </div>
</template>

<style scoped>
h6 {
  padding-left: 20px;
}
</style>