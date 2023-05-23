<template>
    <div class="mt-28 container max-w-6xl px-4 mx-auto ">
        <p class="text-center md:text-left text-[#FF64AE] font-semibold">
            Our Gallery
        </p>
        <div class="mt-3 flex flex-col md:flex-row content-between items-start gap-6">
            <p
                class="leading-none text-center md:text-left bais-1 md:basis-1/2 lg:basis-7/12 font-semibold  text-[#091156] text-3xl md:text-4xl">
                Check
                out the collection pictures from our clinic</p>
            <p
                class="leading-relaxed text-center md:text-left mt-6 md:mt-0 bais-1 md:basis-1/2 lg:basis-5/12 text-[#8B8B8B] font-normal text-base">
                Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia aut
                eveniet odio molestias consequatur quo atque impedit dolores nisi, reprehenderit quae .</p>
        </div>

        <div class="mt-16 flex flex-wrap justify-between items-center">
            <template v-for="(image, index) in images" :key="index">
                <div class="group  basis-1/3 p-3 w-full h-40  md:h-52">
                    <img class="group-hover:scale-95 ease-out duration-300 group-hover:shadow-2xl group-hover:skew-x-12  group-hover:translate-y-[-1rem] object-fill w-full rounded-2xl overflow-hidden h-full"
                        :src=image>
                </div>
            </template>
        </div>

        <p class="px-4 mt-6 text-center md:text-left text-base md:w-7/12 lg:w-2/3 text-[#8B8B8B] tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim, <a href="" class="text-[#091156]"> our teams </a>
        </p>
    </div>
</template>

<script>
import { ref } from 'vue'
import { imageGallary } from "../../Data"
export default {
    name: "OurGallary",
    setup() {
        const images = ref(imageGallary)
        return { images }
    }

}
</script>

<style scoped></style>