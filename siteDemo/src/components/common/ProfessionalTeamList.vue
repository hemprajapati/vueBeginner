<template>
    <p class="text-center font-semibold text-base text-[#FF64AE]">Professional Teams</p>
    <p class="text-center font-semibold text-4xl text-[#091156] my-4"> The Professional expert </p>
    <p class="text-center font-normal text-base text-[#8B8B8B] tracking-wider"> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit ut aliquam.
    </p>
    <div
        class="px-2 lg:px-12 z-10 pt-16 m-0 md:overflow-auto lg:overflow-hidden gap-10 snap-x scroll-smooth flex flex-col md:flex-row justify-between items-center p-4">
        <div v-for="({ nane, designation, img, about }, index) in dataList" :key=index
            class="group basis-2/5 w-6/7  sm:w-2/3 flex justify-center items-center flex-col  md:basis-3/5 rounded-2xl hover:bg-[#fff] py-14 md:px-12 px-4 lg:px-8  box-shadow md:shrink-0 lg:shrink lg:basis-1/3 snap-center">
            <div class="w-[160px] h-[160px] flex justify-center items-center transition  mx-auto">
                <img :src=img
                    class="group-hover:w-[145px] group-hover:h-[145px] w-full h-full transition ease-in duration-700 ease-in object-fill"
                    alt="">
            </div>  
            <span class="font-semibold text-base my-4 text-[#FF64AE]">{{ designation }}</span>
            <span class="font-semibold text-lg mb-4 text-[#091156]">{{ nane }}</span>
            <p class="text-center text-normal leading-6 text-[#8B8B8B] h-24 w-full text-ellipsis overflow-hidden">{{ about
            }}</p>
            <div class="flex items-center justify-between gap-3 mt-4">
                <div
                    class="group/icon w-12 h-12  rounded-full border-2 hover:bg-[#FF64AE] hover:border-none   flex items-center justify-center ">
                    <img src="../../assets/images/twitter.svg" class="group-hover/icon:invert group-hover:brightness-0" />
                </div>
                <div
                    class="group/icon w-12 h-12  rounded-full border-2 hover:bg-[#FF64AE] hover:border-none   flex items-center justify-center ">
                    <img src="../../assets/images/facebook.svg" class="group-hover/icon:invert group-hover:brightness-0" />
                </div>
                <div
                    class="group/icon w-12 h-12  rounded-full  border-2 hover:bg-[#FF64AE] hover:border-none  flex items-center justify-center ">
                    <img src="../../assets/images/instagram.svg" class=" group-hover/icon:invert group-hover:brightness-0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    name: "CardList",
    props: ['dataList'],
    mounted() {
    }
}
</script>

<style scoped>
.box-shadow:hover {
    box-shadow: 0 2px 9px 9px #e5e5fa !important;
}
</style>