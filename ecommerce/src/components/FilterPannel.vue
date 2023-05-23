<template>
    <div class="filter-wrapper  card border-0">
        <div class="border py-3 ps-3 bg-white position-sticky top-0">
            <h6 class="p-0 m-0 text-muted">Filters</h6>
        </div>
        <ul class=" pe-4">
            <li class="mt-1 py-1 list-unstyled " v-for="(items, index) in data.items" :key="index">
                <label class="w-100 py-1">
                    <input type="radio" name="categories" @click="getCategory(items)" v-model="selectedCategory"
                        :value="items">
                    <span class="ms-3">{{ items }} </span>
                </label>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from 'vuex'
const store = useStore()
const selectedCategory = ref('')
const data = store.state.Categories;

onMounted(() => {
    getAllCategories()
})
const getAllCategories = () => {
    store.dispatch('Categories/loadCategoriesAsync')
}
const getCategory = (item) => {
    store.dispatch('Categories/setCategoryType', item)

}
</script>

<style scoped>
h6 {
    font-weight: 700;
    letter-spacing: 1px;
}

.filter-wrapper {
    width: 320px;
    background: #fff;
    box-shadow: 25px 10px 25px rgb(222, 222, 222);
    height: 100% !important;
    overflow: auto;
}

ul {
    z-index: 0;
}

.filter-wrapper div {
    z-index: 999;
    box-shadow: -12px 12px 16px #f4f4f4;
    border: 1px solid #e9e9e9 !important;
}
</style>