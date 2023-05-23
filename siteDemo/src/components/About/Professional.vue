<template>
    <div
        class="relative after:absolute after:z-[-1] after:top-0 after:right-0 after:content-[url('./assets/images/professionalTeamBg.png')]">
        <div class="mt-72 md:mt-96 container mx-auto md:max-w-[calc(100%-24px)] lg:max-w-[calc(100%-12rem)] xl:max-w-6xl mx-auto z-10">
            <CardList :dataList=cardList />
        </div>
    </div>
</template>

<script>
import { cardList } from '../../Data'
import CardList from "../common/ProfessionalTeamList.vue"
export default {
    name: "Professional",
    components: {
        CardList,
    },
    setup() {
        return {
            cardList
        }
    }
}
</script>

<style lang="scss" scoped></style>