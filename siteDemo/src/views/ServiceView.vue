<template>
    <div>
        <Header />
        <Tips />
        <Banner />
        <FAQ />
        <div class="overflow-hidden pt-20 xl:pt-64">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "../components/Services/Header.vue"
import Tips from "../components/Services/Tips.vue"
import Banner from "../components/Services/Banner.vue"
import FAQ from "../components/Services/FAQ.vue"
import Footer from "../components/common/Footer.vue"


export default {

    name: "ServiceView",
    components: {
        Header, Tips, Banner, FAQ,Footer
    }
}
</script>

<style scoped></style>