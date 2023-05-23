<template>
    <div class="wishlist">
        <button v-if="toggle" class="btn btn-light" @click="addToWishList">
            <img src="../assets/heart.svg" alt="">
        </button>
        <button v-else class="btn btn-light" @click="removeFromWishList">
            <img src="../assets/heartLiked.svg" alt="">
        </button>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue"
import { useStore, mapActions } from 'vuex'
const store = useStore()
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
})
const { id } = props
const data = store.state.Products.items;
const wishlist = store.state.Wishlist;
const toggle = ref(true);

const addToWishList = () => {
    const result = data.filter(item => item.id === id)
    if (result) {
        store.dispatch('Wishlist/addToWishList', ...result)
    }
    toggle.value = !toggle.value
}
const removeFromWishList = () => {
    store.dispatch('Wishlist/removeFromWishList', id)
    toggle.value = !toggle.value
}
</script>

<style scoped>
.wishlist button img {
    height: 22px;
    width: 22px;
}
</style>