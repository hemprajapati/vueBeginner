<template>
    <div class="card pb-3 overflow-hidden h-100 border-0">
        <div class="img-box">
            <img :src="thumbnail" class="w-100" alt="">
        </div>
        <div class="description mt-1 px-3">
            <span class='d-inline-block title w-100 text-truncate'>{{ title }}</span>
            <div class="d-flex gap-2 my-2">
                <span class='brand text-truncate'>{{ brand }}</span>
                | <span class='category text-truncate'>{{ category }}</span>
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="price">${{ price }}</span>
                <del>
                    <span class="prev-price">
                        ${{ (price / (1 - discountPercentage / 100)).toFixed(2) }}
                    </span>
                </del>
                <span class="discountPercentage text-success">{{ discountPercentage }}% OFF</span>
            </div>
            <div class="d-flex my-2 justify-content-between align-items-center">
                <div class="d-flex align-items-end gap-1 m-0 p-0">
                    <span class=" d-inline text-danger stock">{{ stock }}</span> <span class="text-danger"
                        style="font-size: 11px; margin-bottom:2px; font-weight: 500">Pcs Available</span>
                </div>
                <div class="bg-success d-flex align-items-center justify-content-center gap-3 py-1 px-2">
                    <span class="bg-success d-inline-block text-white rating">{{ rating }} </span>
                    <img class="star-svg" src="../assets/star.svg" alt="">
                </div>

            </div>
            <div class="w-100 d-flex justify-content-between gap-2 align-items-center">
                <ButtonwishList :id="id" />
                <ButtonAddToCart :id="id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonwishList from "./ButtonwishList.vue"
import ButtonAddToCart from "./ButtonAddToCart.vue"

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
})
const { id, title, brand, category, price, discountPercentage, thumbnail, stock, rating } = props.data
</script>


<style scoped>
.product-card {
    height: 430px;
    transition: 0.3s ease-in-out;
}

.product-card:hover {
    transform: scale(1.03);
}

.product-card .card {
    box-shadow: 12px 22px 14px #e7e6e6 !important;
    border: 0.02vw solid rgb(248, 248, 248) !important;
}

.img-box {
    height: 210px;
}

.img-box img {
    width: 100%;
    height: 100%;
}

.title {
    font-weight: 500;
    font-size: 22px;
    max-width: 270px;
}

.brand {
    font-weight: 500;
    color: #242424;
}

.rating {
    font-weight: 500;
    font-size: 15px;
    border-radius: 3px;

}

.category {
    color: #696969;
}

.price {
    font-weight: 800;
}

.prev-price {
    font-weight: 600;
    font-size: 13px;
    color: #696969;
}

.discountPercentage {
    font-size: 12px;
    font-weight: 600;
}

.stock {
    font-weight: 800;
    font-size: 16px;
}

.star-svg {
    height: 18px;
    width: 18px;
}
</style>