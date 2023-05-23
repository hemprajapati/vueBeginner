<template>
    <CardList :dataList=cardList />
</template>
<script>
import { defineComponent, ref } from 'vue'
import CardList from "../common/ProfessionalTeamList.vue"
import { cardList } from '../../Data'
export default {
    name: "ProfessionalTeam",
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

<style scoped>

</style>