<template>
    <div class="container max-w-6xl mx-auto mt-24 px-4">
        <p class="text-center font-semibold text-[#FF64AE] text-base">Our Clients</p>
        <p class="text-center font-semibold text-[#091156] text-2xl md:text-4xl my-4 md:leading-tight">
            Well-known agencies</p>
        <p class="font-normal text-center text-sm tracking-widest text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </p>
        <div class="w-full image-slider mt-8">
            <div class="img-wrapper flex justify-between">

                <img src="../../assets/images/LOGO1.png" alt="">
                <img src="../../assets/images/LOGO2.png" alt="">
                <img src="../../assets/images/LOGO3.png" alt="">
                <img src="../../assets/images/LOGO4.png" alt="">
                <img src="../../assets/images/LOGO5.png" alt="">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "OurClient"
}
</script>

<style scoped>
.image-slider {
    overflow: hidden !important;
}

.img-wrapper {
    width: 200%;
    animation: slider 3s linear infinite;
}

@keyframes slider {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>