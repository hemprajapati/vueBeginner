

<template>
  <div class="relative h-[109vh] max-h-[790px] w-full">
    <Header />
  </div>
  <div class="container mx-auto px-4 max-w-6xl">
    <MainService />
  </div>
  <div class="mt-0 md:mt-[-310px] z-[-10]">
    <Aboutus />
  </div>
  <div class="container mx-auto px-4 max-w-7xl">
    <ProfessionalTeam />
  </div>
  <div class="relative mt-[-160px]">
    <Contactus />
  </div>
  <div class="overflow-hidden pt-20 xl:pt-64">
    <Footer />
  </div>
</template>
<script setup>
import Header from '../components/Home/Header.vue'
import MainService from '../components/Home/MainService.vue'
import Aboutus from '../components/Home/Aboutus.vue'
import ProfessionalTeam from '../components/Home/ProfessionalTeam.vue'
import Contactus from '../components/Home/Contactus.vue'
import Footer from '../components/common/Footer.vue'


</script>
<style scoped></style>

