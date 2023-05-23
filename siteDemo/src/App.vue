

<template>
  <Navbar />
  <RouterView />
</template>
<script>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/common/Navbar.vue"
import './index.css'
export default {
  components: {
    Navbar
  },
}

</script>

<style scoped>

</style>
