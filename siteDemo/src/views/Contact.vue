<template>
    <div>
        <ContactHeader />
        <MapView />
        <GetInTouch />
        <div class="overflow-hidden pt-20 xl:pt-64">
            <Footer />
        </div>
    </div>
</template>

<script>
import ContactHeader from "../components/Contact/ContactHeader.vue"
import MapView from "../components/Contact/MapView.vue"
import GetInTouch from "../components/Contact/GetInTouch.vue"
import Footer from "../components/common/Footer.vue"

export default {
    name: "Contact",
    components: {
        ContactHeader, MapView, GetInTouch, Footer
    }
}
</script>

<style scoped></style>