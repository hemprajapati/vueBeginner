<template>
    <div class=" bg-[url('./assets/images/BubbleContactus.png')] flex justify-center items-end bg-no-repeat bg-contain ">
        <div class="flex flex-col md:flex-row justify-between items-center container max-w-6xl  px-4 mx-auto  mt-[220px]">
            <ContactSideView />
            <ContactForm :heading="true" :title="true" :subTitle="true"/>
        </div>
    </div>
</template>

<script>
import ContactSideView from "../common/ContactSideView.vue"
import ContactForm from "../common/ContactForm.vue"

export default {
    name: "Contactus",
    components: {
        ContactSideView,
        ContactForm
    }
}
</script>
<!-- https://b984-180-211-108-109.ngrok-free.app/ -->
<style  scoped></style>