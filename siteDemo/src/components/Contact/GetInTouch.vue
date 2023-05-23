<template>
    <div class="mt-28 container px-5 mx-auto max-w-6xl">
        <p class="text-center font-semibold text-[#FF64AE]">Get in Touch</p>
        <p class="text-center font-semibold my-4 text-[#091156] text-4xl">Get direct handling by us</p>
        <p class="text-center text-[#8B8B8B] tracking-widest"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam.</p>
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
            <div class="card hover:bg-white basis-full w-full sm:w-3/4 md:basis-1/3  rounded-2xl  py-12 flex flex-col items-center"
                v-for="({ headig, title, subTitle, icon }, index) in ContactUs" :key="index">
                <img :src=icon class="w-[45px] h-[45px]" alt="">
                <p class="text-[#FF64AE] font-semibold mt-8">{{ headig }}</p>
                <p class="text-[#091156] font-semibold mt-3">{{ title }}</p>
                <p class="text-[#8B8B8B] tracking-widest text-center mt-3 px-4 font-base"> {{ subTitle }}</p>
            </div>
            <!-- <div class="card basis-full  w-full md:basis-1/3 border border-indigo-900 rounded-2xl py-3"></div> -->
            <!-- <div class="card basis-full w-full  md:basis-1/3 border rounded-2xl py-3"></div> -->
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { GetInTouch } from "../../Data"
export default {
    name: "GetInTouch",
    setup() {
        const ContactUs = ref(GetInTouch)
        return { ContactUs }
    }
}
</script>

<style scoped>
.card {
    transition: 0.5s ease-in;
}

.card:hover {
    box-shadow: 0px 25px 50px 25px #F7F7FF;
    transform: scale(1.03);
}
</style>