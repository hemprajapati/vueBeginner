<script setup>
import Header from "../components/Header.vue"
import FilterPannel from "../components/FilterPannel.vue"
import ProductGrid from "../components/ProductGrid.vue"
</script>

<template>
  <div class="wrapper">
    <div class="my-3">
      <Header />
    </div>
    <div class="gap-3 main d-flex justify-content-between align-items-start ">
      <FilterPannel />
      <ProductGrid />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh !important;
  overflow: hidden;
  background-color: rgb(250, 250, 250);
}
.main {
  height: calc(100% - 65px) !important;
}
</style>