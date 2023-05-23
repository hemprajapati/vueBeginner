<template>
    <div class="mt-16 container max-w-6xl mx-auto">
        <p
            class="relative after:absolute after:bottom-[-15px] after:left-[50%] after:h-1 after:rounded-md block after:w-12 after:bg-[#FF64AE] text-[#091156] text-4xl font-semibold text-center">
            Services FAQ’s</p>

        <div class="accordion mt-12">
            <div class="accordion-item" v-for="({ quetion, answer, isOpen }, index) in FaqList" :key="index">
                <div class="accordion-header mx-12  gap-3   py-4">
                    <button class="accordion-button w-full" type="button" @click="toggleAccordian(index)">
                        <div class="flex flex justify-between justify-between items-start">

                            <p class="text-left tracking-widest text-[#091156] font-semibold ">
                                {{ quetion }}
                            </p>
                            <div class="shrink-0 mt-2" v-if="isOpen">
                                <img src="../../assets/images/arrowUp.svg" alt="">
                            </div>
                            <div class="shrink-0 mt-2" v-else>
                                <img src="../../assets/images/arrowDown.svg" alt="">
                            </div>
                        </div>
                    </button>

                </div>
                <div :class="{ 'block duration-700 ease-in-out transition': isOpen, 'hidden duration-700 ease-in-out transition': !isOpen }"
                    class="accordion-panel rounded-bl-[20px] rounded-br-[20px] border-t py-8 px-16 border-[#091156] text-[#8B8B8B] bg-[#F7F7FF]">
                    <p class="italic tracking-widest">
                        {{ answer }}
                    </p>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { Faq } from "../../Data"
export default {

    name: "FAQ",

    setup() {
        const FaqList = ref(Faq)
        const toggleAccordian = (id) => {
            FaqList.value.map((item, index) => {
                if (index !== id) {
                    if (item.isOpen) {
                        item.isOpen = false
                    }
                }
                else {
                    item.isOpen = !item.isOpen
                }
            })
        }
        return {
            FaqList, toggleAccordian
        }
    }
}
</script>

<style scoped></style>