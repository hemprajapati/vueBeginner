<template>
    <div class="mt-32 container mx-auto px-4 max-w-6xl">
        <div class="w-full md:w-5/6 lg:w-4/5">
            <p class="text-center sm:text-left font-semibold text-[#FF64AE] text-base"> About</p>
            <p
                class="text-center sm:text-left font-semibold text-[#091156] text-2xl sm:text-3xl md:text-4xl my-4 md:leading-tight">
                We are a leading beauty clinic that has been around since 2002</p>
            <p class="text-center sm:text-left text-normal leading-6 text-base text-[#8B8B8B]">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consequuntur consectetur perspiciatis eligendi ut labore.</p>
        </div>
        <div class="mt-12 relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[490px] box  overflow-hidden">
            <div class="absolute w-full h-full  flex justify-center items-center">
                <img src="../../assets/images/btnPlay.svg"
                class="z-[1] w-20 h-20 md:w-28 md:h-28 object-fill" alt="">
            </div>
            <img src="../../assets/images/aboutHeader.jpeg" class=" w-full h-full object-fill" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.box{
    box-shadow: 0px 25px 50px 25px #F6F7FF;
    border-radius: 50px;
}</style>