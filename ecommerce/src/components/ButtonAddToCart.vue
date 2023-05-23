<template>
    <div class="flex-grow-1">
        <button v-if="!isItemAdded" class="d-block w-100 btn" style="background-color: #171717; color: #ffffff;"
            @click="AddToCart">Add To Cart</button>
        <div v-else class="d-flex gap-2 justify-content-between align-items-center">
            <button class="btn btn-danger" @click="decreaseCount" :disabled="counter === 0">-</button>
            <span class="d-block flex-grow-1 py-1 font-weight-bold bg-light align-items-stretch bg-gradient text-center">{{
                counter }}
            </span>
            <button class="btn btn-success" @click="increaseCount">+</button>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"
const store = useStore()
const isItemAdded = ref(false)
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
})

const { id } = props;
const data = store.state.Products.items;
const cart = store.state.AddToCart;

const AddToCart = () => {
    isItemAdded.value = !isItemAdded.value
    const result = data.filter(item => item.id === id)
    if (result) {
        store.dispatch('AddToCart/addToCart', ...result)
    }
}
const counter = computed(() => {
    const obj = cart.items.find(obj => obj.id === id);
    return obj.count;
})
const decreaseCount = () => {
    store.dispatch('AddToCart/decreaseCount', id)
}
const increaseCount = () => {
    store.dispatch('AddToCart/increaseCount', id)
}

</script>

<style scoped></style>