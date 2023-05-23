<template>
    <div class="relative">
        <div class="z-[10] bg-[#172176] py-24 rounded-[35px] md:rounded-[85px] md:rotate-[5deg] scale-105">
            <div class="md:rotate-[-5deg] container px-4 scale-95 max-w-6xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-start gap-12 ">
                    <div class="basis-1 md:basis-1/2">
                        <img src="../../assets/images/FooterLogo.png" class="w-64" alt="">
                        <p class="text-[#D7DBFF] tracking-widest font-normal mt-8"> <span
                                class="font-semibold">Beautice</span>
                            is a Beauty Clinic WordPress Theme.</p>
                        <p class="font-medium text-[#D7DBFF] tracking-widest italic mt-3">Baker Steet 101, NY, United
                            States.
                        </p>
                        <div
                            class="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-6 mt-3 ">
                            <p class="italic font-medium text-[#D7DBFF]">+521 569 8966</p>
                            <p class="italic font-medium text-[#D7DBFF]">mail@company.com</p>
                        </div>

                    </div>
                    <div class="basis-1 w-full  md:basis-1/2 flex flex-col gap-7 sm:flex-row justify-between items-start">
                        <ul class="basis-1/2">
                            <li>
                                <p class="text-white font-semibold tracking-widest mb-3">Pages</p>
                            </li>
                            <li><a href="" class="text-white tracking-widest leading-8">Home</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">About</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Services</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Gallery</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Team</a></li>
                        </ul>
                        <ul class="basis-1/2">
                            <li>
                                <p class="text-white font-semibold tracking-widest mb-3">Informations</p>
                            </li>
                            <li><a href="" class="text-white tracking-widest leading-8">Terms & conditions</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Privacy policy</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Blog</a></li>
                            <li><a href="" class="text-white tracking-widest leading-8">Contact</a></li>
                        </ul>
                    </div>

                </div>
                <div class=" mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <ul class="flex justify-start items-start gap-5 ">
                        <img class="brightness-0 invert w-6 h-6" src="../../assets/images/facebook.svg" alt="">
                        <img class="brightness-0 invert w-6 h-6" src="../../assets/images/twitter.svg" alt="">
                        <img class="brightness-0 invert w-6 h-6" src="../../assets/images/linkdin.svg" alt="">
                        <img class="brightness-0 invert w-6 h-6" src="../../assets/images/youtube.svg" alt="">
                        <img class="brightness-0 invert w-6 h-6" src="../../assets/images/instagram.svg" alt="">
                    </ul>
                    <p class="text-[#D7DBFF] inline-block tracking-widest text-right ">© AltDesain Studio 2021 - All right
                        reserved.</p>
                </div>
            </div>
        </div>
        <div
            class="absolute h-full z-[5] w-full rounded-[35px] md:rounded-[85px] bg-[#DFE2FF] top-[-22px] left-[5px] md:rotate-[2.8deg] scale-105 left-0">
        </div>
        <div class="absolute z-[6] w-full bg-[#0D165C] bottom-0 left-0 h-[250px]"></div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped></style>