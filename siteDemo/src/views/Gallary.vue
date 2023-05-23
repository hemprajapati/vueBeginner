<template>
    <OurGallary />
    <GallaryBanner />
    <GetQuote />
    <div class="overflow-hidden pt-12 lg:pt-48">
        <Footer />
    </div>
</template>

<script>
import OurGallary from "../components/Gallary/OurGallary.vue"
import GallaryBanner from "../components/Gallary/GallaryBanner.vue"
import GetQuote from "../components/Gallary/GetQuote.vue"
import Footer from "../components/common/Footer.vue"

export default {
    name: "Gallary",
    components: {
        OurGallary,
        GallaryBanner,
        GetQuote, Footer,
    }
}
</script>
<style scoped></style>