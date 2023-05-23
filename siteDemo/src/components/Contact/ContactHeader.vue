<template>
    <div class="mt-28 container px-4 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:gap-6">
        <div class="w-full md:w-1/2">
            <p class="text-center md:text-left text-[#FF64AE] font-semibold ">Contact Us</p>
            <p class="text-center md:text-left text-[#091156] font-semibold leading-normal text-3xl lg:text-4xl my-3">
                Contact service for our
                customers</p>
        </div>
        <div class="w-full md:w-1/2 flex md:justify-end">
            <p class="text-center md:text-left md:w-full lg:w-9/12 text-[#8B8B8B] tracking-widest leading-7 mt-5 md:mt-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis </p>
        </div>
    </div>
    <div
        class="relative before:absolute before:top-0 before:right-0 before:content-[url('./assets/images/BubbleContactus2.png')] flex justify-center items-end  mt-[-55px]">
        <div
            class="container flex flex-col md:flex-row justify-between items-center container max-w-6xl  px-4 mx-auto mt-[85px]">
            <ContactSideView />
            <ContactForm :heading="false" :title="false" :subTitle="false" />
        </div>
    </div>
</template>

<script>
import ContactSideView from "../common/ContactSideView.vue"
import ContactForm from "../common/ContactForm.vue"

export default {
    name: "ContactHeader",
    components: {
        ContactForm, ContactSideView
    }
}
</script>

<style scoped></style>