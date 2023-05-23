<template>
    <div
        class="relative flex justify-center items-end w-full py-[100px] md:pt-[360px] md:pb-[90px] after:hidden after:z-[-10] md:after:block after:absolute after:top-0 after:right-0  after:h-full after:content-[url('./assets/images/BubbleAbout1.png')] before:z-[-20] before:hidden md:before:block before:absolute before:top-0 before:right-0 before:h-full before:content-[url('./assets/images/BubbleAbout2.png')] ">
        <div
            class="container flex flex-col justify-center items-center md:flex-row md:justify-between mx-auto px-4 max-w-6xl ">
            <div class="basis-1 md:basis-1/2 lg:basis-7/12  w-full p-3">
                <p class="text-center  md:text-left  text-[#FF64AE] font-semibold text-base">About Us</p>
                <p class="text-center md:text-left text-[#091156] font-semibold text-3xl md:text-2xl lg:text-4xl my-4">We
                    are the best beauty clinic </p>
                <p class="text-center md:text-left text-[#8B8B8B] font-normal text-base leading-8">
                    Lorem ipsum dolor sit amet,consectetur
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sapiente voluptas illo laborum, ab
                    pariatur consequatur architecto, fugit nobis at, quidem itaque aliquid. Nisi, voluptates. Sunt eos
                    exercitationem ducimus dicta!
                </p>
                <div class="flex items-center mt-4 justify-between sm:justify-center md:justify-start gap-3 md:gap-6">
                    <a href="" class="px-4 lg:px-9 text-sm sm:text-base font-semibold py-4 rounded-full text-[#fff] bg-[#FF64AE] text-center">Learn More</a>
                    <a href="" class="group flex items-center justify-center gap-3 lg:gap-4">
                        <div
                            class="w-[32px] h-[32px] md:w-[48px] md:h-[48px] flex items-center justify-center rounded-full bg-[#091156] group-hover:bg-[#FF64AE]">
                            <img src="../../assets/images/playBtn.svg" class="ms-1 w-[16px] h-[16px]" alt="">
                        </div>
                        <span class="font-semibold text-base text-[#8B8B8B] group-hover:text-indigo-900">Watch Video</span>
                    </a>
                </div>
            </div>
            <div
                class="basis-1 w-full hidden md:block md:basis-1/2 lg:basis-5/12 flex justify-end overflow-hidden w-full">
                <img src="../../assets/images/aboutusSide.png"
                    class="w-full md:max-w-md lg:max-w-lg h-full object-fill md:ms-[20px] lg:ms-[33px] scale-110" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aboutus"
}
</script>

<style scoped></style> 