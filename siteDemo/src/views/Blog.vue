<template>
    <div class="md:mt-20">
        <Header />
        <div class="px-4 pt-12 container mx-auto max-w-6xl">
            <div :class="{ 'h-[calc(100vh-50px)] overflow-hidden md:h-[100%] md:overflow-auto ': isSideNavOpen }"
                class="relative  flex flex-col md:flex-row md:flex-row-reverse justify-between items-start md:gap-6 lg:gap-12">
                <div class="flex md:hidden justify-between w-full bg-white items-center sticky  py-8 md:top-0 z-30  gap-3">
                    <div class="relative grow rounded-full overflow-hidden input-shadow">
                        <input type="text" class="ps-4 py-4 w-full " placeholder="Search here...">
                        <button
                            class="absolute top-0 border-0 outline-0 right-0 bg-[#172176] w-16 h-full flex justify-center items-center">
                            <img src="../assets/images/Search.svg" alt="">
                        </button>
                    </div>
                    <button class=" w-11 h-11 flex justify-center items-center bg-[#eef0ff] rounded-2xl"
                        @click="toggleSideNav">
                        <img class="w-4 h-4" src="../assets/images/Filter.svg" alt="">
                    </button>
                </div>
                <div :class="{ 'h-[calc(100%-113px)] md:h-[100%]': isSideNavOpen, 'hidden md:block': !isSideNavOpen }"
                    class="absolute top-[118px]  shadow-2xl md:shadow-none right-0 overflow-auto md:overflow-hidden md:pt-0 md:static md:min-h-min bg-white  z-20  w-11/12 sm:w-4/6 md:w-1/2 lg:w-5/12">
                    <div class="bg-white px-3 sm:px-8 h-full">
                        <div class="hidden md:flex justify-between items-center py-4 px-1 md:top-0 z-30 gap-3">
                            <div class="relative grow rounded-full overflow-hidden input-shadow">
                                <input type="text" class="ps-4 py-4 w-full" placeholder="Search here...">
                                <button
                                    class="absolute top-0 border-0 outline-0 right-0 bg-[#172176] w-16 h-full flex justify-center items-center">
                                    <img src="../assets/images/Search.svg" alt="">
                                </button>
                            </div>
                        </div>

                        <div class="hidden md:block my-9 p-10 card-shadow rounded-2xl">
                            <p class="text-[#091156] font-semibold">Recent Posts</p>
                            <div class="flex items-start justify-between gap-4 my-3">
                                <img src="../assets/images/gallary1.png" class="w-20 h-20 box-shadow-md" alt="">
                                <div>
                                    <span class="text-[#FF64AE] font-semibold tracking-widest">01 jan 2021</span>
                                    <p class="text-[#8B8B8B] mt-2 font-normal text-base">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisci sang.</p>
                                </div>
                            </div>
                            <div class="flex items-start justify-between gap-4 my-3">
                                <img src="../assets/images/gallary2.png" class="w-20 h-20 box-shadow-md" alt="">
                                <div>
                                    <span class="text-[#FF64AE] font-semibold tracking-widest">01 jan 2021</span>
                                    <p class="text-[#8B8B8B] mt-2 font-normal text-base">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisci sang.</p>
                                </div>
                            </div>

                            <div class="flex items-start justify-between gap-4 my-3">
                                <img src="../assets/images/gallary8.png" class="w-20 h-20 box-shadow-md" alt="">
                                <div>
                                    <span class="text-[#FF64AE] font-semibold tracking-widest">01 jan 2021</span>
                                    <p class="text-[#8B8B8B] mt-2 font-normal text-base">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisci sang.</p>
                                </div>
                            </div>
                        </div>

                        <div class="my-9 p-4 md:p-10 card-shadow rounded-2xl">
                            <p class="text-[#091156] mb-3 font-semibold">Categories</p>
                            <div>
                                <input type="radio" id='Consultation' class="appearance-none peer/Consultation"
                                    name="Categories">
                                <label for="Consultation"
                                    class=" inline-block rounded-md peer-checked/Consultation:text-[#FF64AE] block leading-loose text-[#8B8B8B] my-2 cursor-pointer hover:text-[#FF64AE] tracking-widest">Consultation</label>
                            </div>

                            <div>
                                <input type="radio" id='Beauty' class="appearance-none peer/Beauty" name="Categories">
                                <label for="Beauty"
                                    class=" inline-block rounded-md peer-checked/Beauty:text-[#FF64AE] block leading-loose text-[#8B8B8B] my-2 cursor-pointer hover:text-[#FF64AE] tracking-widest">Beauty</label>
                            </div>
                            <div>

                                <input type="radio" id='Treatments' class="appearance-none peer/Treatments"
                                    name="Categories">
                                <label for="Treatments"
                                    class="inline-block rounded-md peer-checked/Treatments:text-[#FF64AE] block leading-loose text-[#8B8B8B] my-2 cursor-pointer hover:text-[#FF64AE] tracking-widest">Treatments</label>
                            </div>
                            <div>
                                <input type="radio" id='News' class="appearance-none peer/News" name="Categories">
                                <label for="News"
                                    class="inline-block rounded-md peer-checked/News:text-[#FF64AE]  block leading-loose text-[#8B8B8B] my-2 cursor-pointer hover:text-[#FF64AE] tracking-widest">News</label>

                            </div>

                        </div>
                        <div class="my-9 p-3 md:p-10 card-shadow rounded-2xl">
                            <h5 class="text-[#091156] mb-3 font-semibold">Cloud Tags</h5>
                            <div class="flex flex-wrap">
                                <template v-for="(tag, index) in cloudTags" :key=index>
                                    <label class=" my-3 mx-[2px]">
                                        <input type="checkbox" class="appearance-none cloud_checkbox">
                                        <p
                                            class="border border-slate-200  card-shadow rounded-full py-2 px-5 inline text-[#8B8B8B] leading-loose tracking-widest">
                                            {{ tag }}</p>
                                    </label>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-7/12 ">
                    <div class="card  mb-12 pb-3 card-shadow rounded-2xl card-shadow overflow-hidden">
                        <div class="h-80 w-full">
                            <img class="object-fill h-full w-full" src="../assets/images/aboutHeader.jpeg" alt="">
                        </div>
                        <div class="my-7 mx-4">
                            <div class="flex items-center justify-start gap-4">
                                <img src="../assets/images/folder.svg" alt="">
                                <span class="text-[#FF64AE] font-semibold ">Consultation</span>
                            </div>
                            <p class="font-semibold text-[#091156] my-4 text-3xl leading-relexed">How much does a
                                consultation cost at our clinic?</p>
                            <p class="text-[#8B8B8B] tracking-wide font-normal">A wonderful serenity has taken possession of
                                my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am
                                alone, and feel the charm of existence in this spot, which was created for the</p>
                            <a href=""
                                class="mt-6 inline-block py-4 px-14 bg-[#FF64AE] rounded-full tracking-widest text-white font-semibold btn-shadow">Read
                                More</a>
                        </div>
                    </div>
                    <div class="card mb-12 pb-3 card-shadow  rounded-2xl overflow-hidden">
                        <div class="h-80 w-full">
                            <img class="object-fill h-full w-full" src="../assets/images/aboutHeader.jpeg" alt="">
                        </div>
                        <div class="my-7 mx-4">
                            <div class="flex items-center justify-start gap-4">
                                <img src="../assets/images/folder.svg" alt="">
                                <span class="text-[#FF64AE] font-semibold ">Consultation</span>
                            </div>
                            <p class="font-semibold text-[#091156] my-4 text-3xl leading-relexed">How much does a
                                consultation cost at our clinic?</p>
                            <p class="text-[#8B8B8B] tracking-wide font-normal">A wonderful serenity has taken possession of
                                my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am
                                alone, and feel the charm of existence in this spot, which was created for the</p>
                            <a href=""
                                class="mt-6 inline-block py-4 px-14 bg-[#FF64AE] rounded-full tracking-widest text-white font-semibold btn-shadow">Read
                                More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed center-x">
                <img class="rounded-full bg-white border border-[#fff7fa] shadow w-10 h-10"
                    src="../assets/images/ActiveToggle.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Header from "../components/Blog/Header.vue"

export default {
    name: "Blog",

    setup() {
        const cloudTags = ref(['beauty', 'cute', 'skin', 'glow', 'style', 'clinic', 'great', 'charmi', 'care'])
        const categories = ref(['Consultation', 'Beauty', 'Treatments', 'News'])
        let isSideNavOpen = ref(false)
        const toggleSideNav = () => {
            console.log("sf")
            isSideNavOpen.value = !isSideNavOpen.value
        }
        return {
            cloudTags, categories, toggleSideNav, isSideNavOpen
        }
    },
    components: {
        Header,
    }
}
</script>

<style scoped>
.shadow {
    box-shadow: 0px 25px 50px 25px #ffe1ec;
}

.center-x {
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
}

.input-shadow {
    box-shadow: -2px 4px 31px 9px #F2F4FF;
    background: #eef0ff;
}

.btn-shadow {
    box-shadow: 0px 17px 12px #f9e2ed !important;
}

.card-shadow {
    box-shadow: -2px 4px 31px 9px #F2F4FF;
}

.cloud_checkbox:checked+p {
    @apply border-[#FF64AE] text-[#FF64AE];
}
</style>