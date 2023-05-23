<template>
    <div class="header overflow-hidden flex justify-center items-center h-full w-full">
        <Carousel>
            <Slide v-for="slide in 3" :key="slide">
                <div
                    class=" h-full w-[100vw] container px-4 max-w-6xl  mx-auto flex flex-col gap-12 md:gap-0 sm:flex-row justify-center lg:justify-between items-center">
                    <div
                        class="basis-1 w-full h-full sm:basis-1/2 flex flex-col justify-center items-center md:items-start">
                        <p
                            class="text-lg md:text-3xl lg:text-5xl title font-semibold text-[#091156] py-5 leading-relaxed text-center sm:text-left ">
                            Clinic & beauty consultant
                        </p>
                        <p
                            class="font-medium sub-title sm:mx-0 text-sm md:text-md break-words text-[#091156] leading-5 md:leading-7 tracking-widest text-center sm:text-left">
                            It is a long established fact that a reader will be
                            by the readable content of a page.
                        </p>
                        <a href=""
                            class="mt-6 bg-[#FF64AE] font-semibold text-white py-4 px-8 rounded-full tracking-widest">More
                            Details</a>
                    </div>
                    <div class="basis-1 flex justify-center lg:justify-end  items-center sm:basis-1/2 ">
                        <img class="mt-4 lg:mt-[95px] brightness-100 headerimg w-[450px]  h-[225px] sm:w-[410px] md:h-[275px] lg:w-full lg:h-full object-fill"
                            src="../../assets/images/header_image.png" alt="">
                    </div>
                </div>
            </Slide>
            <template #addons>
                <div class="mt-12 md:mt-0">
                    <Pagination />
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: "Header",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        const isScrollDown = ref(false);
        onMounted(() => {
            window.addEventListener('scroll', trackScroll);
        })

        const trackScroll = () => {
            if (window.pageYOffset > 0) {
                this.isScrollDown = true;
            } else {
                this.isScrollDown = false;
            }
        }
        return { isScrollDown }
    }
}
</script>

<style scoped>
.header {
    background-image: url("../../assets/images/SlideBackground.png");
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: contain;
}

.headerimg {
    animation-name: fromBottom;
    animation-duration: 2s;
}

.title {
    animation-name: fromLeft;
    animation-duration: 2s;
}

.sub-title {
    animation-name: fromcenter;
    animation-duration: 3s;
    opacity: 1;
}

@keyframes fromBottom {
    0% {
        transform: translateY(40px);
        filter: brightness(1.1);
    }
}

@keyframes fromLeft {
    0% {
        opacity: 0.2;
        transform: translateX(-60px);
    }
}

@keyframes fromcenter {
    0% {
        opacity: 0;
    }
}

@media only screen and (max-width: 1024px) {
    .header {
        background: linear-gradient(180deg, rgba(204, 210, 255, 1) 8%, #e4e7ff 29%, #ffffff 92%) !important;
    }
}
</style>