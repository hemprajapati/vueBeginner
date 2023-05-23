<template>
    <div class="relative mt-16 w-full bg-[url('./assets/images/servicesBanner.png')]  bg-center bg-cover bg-no-repeat">
        <div class=" h-full py-5 w-full bg-[#09115699] px-4 py-16 md:py-28 lg:py-36 ">
            <div class="container max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:gap-12 lg:gap-20 items-center">
                <div class="w-full md:w-8/12  lg:w-4/6">
                    <p class="text-3xl  lg:text-4xl font-semibold text-white  text-center md:text-left">Best responsibility and service for our customers</p>
                    <p class="font-normal text-base tracking-widest text-[#CACACA] mt-4 text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </p>
                </div>
                <div class="w-full  md:w-4/12  lg:w-2/6 flex justify-center items-center gap-4 mt-6">
                    <div class="w-14 h-14 border border-white rounded-full flex justify-center items-center">
                        <img src="../../assets/images/playBtn.svg" class="ms-2" alt="">
                    </div>
                    <p class="text-white font-semibold">Treatments Videos</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped></style>