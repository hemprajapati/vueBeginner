<template>
    <div class="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-12"
        :class="{ 'md:flex-row-reverse': id % 2 === 0 }"
        v-for="({ id, tip, title, subTitle, img }, index) in tipsList" :key="index">
        <div class="basis-1 md:basis-1/2"
            :class="{ 'flex justify-end items-end': id % 2 === 0 }">
            <img :src=img alt="">
        </div>
        <div class="basis-1 md:basis-1/2 ">
            <P class="font-semibold text-center md:text-left text-base text-[#FF64AE]">{{ tip }}</P>
            <P class="font-semibold text-center md:text-left my-4 text-3xl  lg:text-4xl text-[#091156]">{{ title }}</P>
            <p class="font-normal text-center md:text-left  text-sm sm:text-base tracking-widest text-[#8B8B8B]">
                {{ subTitle }}</p>
            <a href=""
                class="text-center w-full md:w-2/3 lg:1/2 md:text-left inline-block mt-3 py-3 hover:px-6 hover:text-center hover:bg-[#FF64AE] ease duration-700 rounded-full hover:text-white text-[#091156] font-semibold">Make
                an Appointment</a>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { tips } from "../../Data"
export default {
    name: "Tips",

    setup() {
        const tipsList = ref(tips)
        onMounted(() => {
            console.log(tips)
        })
        return {
            tipsList
        }
    }
}
</script>

<style scoped></style>