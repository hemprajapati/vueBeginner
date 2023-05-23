<template>
    <div class="w-full h-20 z-40 flex justify-center fixed top-0">
        <nav :class="{ 'bg-nav': isScrollDown }"
            class="relative container max-w-6xl mx-auto flex py-[4px] px-4 justify-between items-center ">
            <div class="imgbox">
                <img class="w-[130px] h-[34px] sm:w-[195px] sm:h-[49px]" src="../../assets/images/logo.png" alt="">
            </div>
            <button class="flex flex-col z-40 gap-1.5 md:hidden" @click="handleToggle">
                <span class="h-0.5 bg-[#414880] border-[#414880] w-6 border block"
                    :class="{ 'rotate-45 translate-y-[4px]': !isCollapsed }"></span>
                <span class="h-0.5 bg-[#414880] border-[#414880] w-6 border block"
                    :class="{ 'hidden': !isCollapsed }"></span>
                <span class="h-0.5 bg-[#414880] border-[#414880] w-6 border block"
                    :class="{ 'rotate-[-45deg] translate-y-[-4px]': !isCollapsed }"></span>
            </button>
            <div :class="{ 'hidden md:flex ease-in duration-600': isCollapsed }"
                class="backdrop nav-menu w-full flex flex-col justify-center md:flex-row md:justify-end items-center gap-5 text-[#414880]  h-screen md:h-full absolute md:static top-0 bg-[#0e18704d] md:bg-[#ffffff00] left-0 overflow-auto md:overflow-hidden">
                <RouterLink @click="changePage()" class="font-normal tracking-widest font-bold md:font-normal" to="/">Home
                </RouterLink>
                <RouterLink @click="changePage()" class="font-normal tracking-widest font-bold md:font-normal" to="/about">
                    About</RouterLink>
                <RouterLink @click="changePage()" class="font-normal tracking-widest font-bold md:font-normal"
                    to="/services">Services
                </RouterLink>
                <RouterLink @click="changePage()" class="font-normal tracking-widest font-bold md:font-normal"
                    to="/gallary">Gallary</RouterLink>
                <RouterLink @click="changePage()" class="font-normal tracking-widest font-bold md:font-normal" to="/blog">
                    Blog</RouterLink>
                <RouterLink @click="changePage()" router-link-exact-active="bg-[#ffffff00]"
                    class="btn btn-contactus font-normal tracking-widest font-bold md:font-normal" to="/contact">Contact
                </RouterLink>
            </div>
        </nav>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

export default {
    name: "Navbar",
    setup() {
        const isScrollDown = ref(false);
        const isCollapsed = ref(true);
        const handleToggle = () => {
            isCollapsed.value = !isCollapsed.value
        }
        const trackScroll = () => {
            if (window.pageYOffset > 10) {
                isScrollDown.value = true;
            } else {
                isScrollDown.value = false;
            }
        }
        onMounted(() => {
            window.addEventListener('scroll', trackScroll);
        })
        const changePage = () => {
            isCollapsed.value = true;
            window.scrollTo(0, 0)
        }
        return { isScrollDown, handleToggle, isCollapsed, changePage }
    }
}
</script>

<style scoped>
.bg-nav {
    background-color: rgba(251, 251, 255, 0.9);
    border-radius: 0 0 14px 14px;
    box-shadow: 12px 12px 22px #17217647;
}

.backdrop {
    backdrop-filter: blur(7px);
    animation-name: blur;
    animation-duration: 0.7s;
}

.router-link-exact-active {
    color: #FF64AE;
    font-weight: 500;
}

.btn {
    display: inline-block;
    padding: 14px 40px;
    font-weight: 600;
    border-radius: 30px;
    color: #ffffff;
}

.btn-contactus {
    background-color: #FF64AE;
}

@keyframes blur {
    0% {
        backdrop-filter: blur(0px);
    }
}

@media only screen and (min-width: 768px) {
    .backdrop {
        backdrop-filter: blur(0px);
    }
}
</style>