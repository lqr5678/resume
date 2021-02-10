<template>
  <div class="info container">
    <div class="row">
      <div class="col" v-for="i of rows.rowOneArr" :key="i.item">
        <info-item>
          <template #item>{{i.item}}</template>
          <template #value>{{i.value}}</template>
        </info-item>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="i of  rows.rowTwoArr" :key="i.item">
        <info-item>
          <template #item>{{i.item}}</template>
          <template #value>{{i.value}}</template>
        </info-item>
      </div>
    </div>

    <div class="row">
      <div class="col" v-for="i of rows.rowThreeArr" :key="i.item">
        <info-item>
          <template #item>{{i.item}}</template>
          <template #value>{{i.value}}</template>
        </info-item>
      </div>
    </div>
  </div>
</template>

<script>
import infoItem from "./info-item.vue";
export default {
  components: {
    infoItem
  },
  props: {
    rows: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.info {
  width: 100%;
  min-height: 400px;
  margin: 20px 0;
  padding: 15px;
  word-wrap: break-word;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}
.info > .row {
  padding: 15px 0;
}
</style>