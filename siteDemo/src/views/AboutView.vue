<template>
  <Header />
  <div class="relative mt-[-12rem] md:mt-[-18rem]">
    <Professional />
    <Slogan />
    <div class="mt-32 md:mt-48 bg-[url('./assets/images/vissionAndMission.png')] bg-no-repeat bg-auto">
      <VisionMission />
      <OurClient />
      <div class="overflow-hidden pt-20 xl:pt-64">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/About/Header.vue'
import Professional from '../components/About/Professional.vue'
import Slogan from '../components/About/Slogan.vue'
import VisionMission from '../components/About/VisionMission.vue'
import OurClient from '../components/About/OurClient.vue'
import Footer from "../components/common/Footer.vue"


export default {
  name: "Aboutview",
  components: {
    Header,
    Professional,
    Slogan,
    VisionMission,
    OurClient,
    Footer
  }
}
</script>

<style scoped></style>
