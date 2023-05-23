<template>
    <div class="mt-12 bg-[url('./assets/images/gallaryBanner.png')] bg-no-repeat bg-cover bg-center">
        <div class="h-full w-full bg-[#09115699] px-4 py-16 md:py-28 lg:py-36 flex flex-col justify-center items-center">
            <P class="text-center text-white text-4xl font-semibold leading-relaxed">Watch the video tour</P>
            <p class="text-center mx-auto text-[#CACACA] md:w-2/3 lg:w-1/2 tracking-wide text-base mt-3">Lorem ipsum dolor
                sit amet, consectetur adipiscing elit ut aliquam, purus sit
                amet luctus venenatis</p>
            <div class="mt-8 w-16 h-16 border flex items-center justify-center rounded-full group-hover:bg-[#FF64AE]">
                <img src="../../assets/images/playBtn.svg" class="ml-1.5 w-7 h-7" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GallaryBanner"
}
</script>

<style scoped></style>