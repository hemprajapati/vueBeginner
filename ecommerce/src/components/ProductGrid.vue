<template>
    {{ productCategories.currentCategory }}
    <div class="product-view px-3 h-100 w-100 flex-grow-1 row overflow-auto" @scroll="handleScroll">
        <div class="product-card  px-3 my-2 col-sm-6 col-md-4 col-lg-3 p-0" v-for="(obj, index) in  data.items"
            :key="index">
            <SingleGrid :data="obj" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { useStore } from 'vuex'
import SingleGrid from "../components/SingleGrid.vue"
const store = useStore()
const data = store.state.Products;
const productCategories = store.state.Categories;

const skip = ref(0)
const limit = ref(12)
onMounted(() => {
    getData()
})
const getData = () => {
    if (productCategories.currentCategory === '') {
        store.dispatch('Products/loadDataAsync', { limit: limit.value, skip: skip.value })
    }
    else {
        store.dispatch('Products/loadDFilterAsync', { category: productCategories.currentCategory, limit: limit.value, skip: skip.value })
    }
}
computed(() => {
    console.log("productCategories.currentCategory", productCategories.currentCategory);
})
const resetAllData = () => {
    store.dispatch('Products/clearData')
    skip.value = 0;
    limit.value = 0;
}
const handleScroll = (el) => {
    const scrollY = el.srcElement.offsetHeight;
    const visibleHeight = el.srcElement.scrollTop;
    const totalHeight = el.srcElement.scrollHeight;
    if ((scrollY + visibleHeight) >= totalHeight) {
        skip.value += limit.value
        getData()
    }
}

</script>
