<template>
        <div class="pt-[12px]">
            <p class="text-center text-[#FF64AE] font-semibold text-lg">
                Main Services
            </p>
            <p class="text-center text-[#091156] font-semibold text-4xl leading-tight tracking-wide my-4">
                Learn services to focus
                <br />
                on your beauty
            </p>
            <p class="text-center text-[#8B8B8B] font-normal text-base w-full md:w-3/4 mx-auto">
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non
                parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
            </p>
        </div>
        <div
            class=" flex justify-between w-full gap-6 lg:gap-14  snap-x scroll-smooth overflow-x-auto py-[70px] px-5 md:px-[60px] lg:px[45px]">
            <template v-for="({ title, description, img }, index) in cardList" :key=index>
                <div
                    class="snap-center relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:border after:rounded-3xl after:z-[-10] after:bg-[#ebebfa] bg-[#ffffff] hover:bg-[#fdfdff] hover:after:rotate-6 hover:scale-[0.97] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:rounded-3xl before:z-[-20] before:bg-[#f5f5fe] bg-[#ffffff] hover:before:rotate-12 basis-full sm:basis-2/3 md:basis-1/3 shrink-0 md:shrink card after:transition after:duration-900 after:ease-in-out transition duration-900 ease-in-out flex flex-col items-center justify-center rounded-3xl py-8 md:py-3 px-6 md:px-4 lg:px-8 box-shadow">
                    <img class="w-[166px] h-[166px] object-fill" :src=img alt="" />
                    <p class="font-semibold text-lg text-[#091156] text-center mt-2 mb-4">
                        {{ title }}
                    </p>
                    <p class="font-normal text-md leading-5 text-[#8B8B8B] text-center leading-6">
                        {{ description }}
                    </p>
                </div>
            </template>
        </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import beautyConsultaion from '@/assets/images/beautyConsultaion.png'
import skinTreatement from '@/assets/images/skinTreatement.png'
import beautyProduct from '@/assets/images/beautyProduct.png'

export default {
    name: "MainService",
    setup() {
        const cardList = ref([{
            id: 1,
            title: 'Beauty consultation',
            description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
            img: beautyConsultaion
        },
        {
            id: 2,
            title: 'Skin treatments',
            description: 'Porro minima dolores eaque, nesciunt sint ducimus maiores ad rem! Corporis.',
            img: skinTreatement,

        },
        {

            id: 3,
            title: 'Beauty product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis molestias quibusdam.',
            img: beautyProduct,

        },
        ])
        return {
            cardList
        }
    }


};
</script>

<style scoped>
.box-shadow {
    box-shadow: 0px 12px 50px 12px #f7f7ff !important;
}

.a {
    box-shadow: 0px 25px 50px 25px #ffffff00 !important;
}
</style>
