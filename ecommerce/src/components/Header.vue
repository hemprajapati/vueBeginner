<template>
    <div class="d-flex mx-4 justify-contentent-center align-items-stretch gap-4">
        <div class="flex-grow-1">
            <input type="text" class="w-100 border-0 py-2 ps-3" placeholder="Search your product">
        </div>
        <div class="d-flex gap-3 me-4">
            <RouterLink to="/checkout">
                <button class=" px-3 btn btn-light wishlist">
                    <span class="text-white bg-success">{{ wishlist.items.length }}</span>
                    <img class="img" src="../assets/heart.svg" alt="">
                </button>
            </RouterLink>
            <RouterLink to="/checkout">
                <button class="btn btn-light px-3 addTocart">
                    <span class="p-0 m-0 text-white bg-success">{{ addToCart.items.length }}</span>
                    <img class="img" src="../assets/cart.svg" alt="">
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
const wishlist = store.state.Wishlist;
const addToCart = store.state.AddToCart;

</script>

<style scoped>
img {
    width: 22px;
    height: 22px;
}

.btn {
    background: #dddddd;
    position: relative;
}

.btn span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    border-radius: 50%;
    right: -10px;
    height: 27px !important;
    font-size: 12px;
    width: 27px !important;
}

input::placeholder {
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.06vw;
}

input {
    border: 1px solid #dddddd !important;
    box-shadow: 12px 22px 18px #f1f1f1;
    border-radius: 12px;

}
</style>