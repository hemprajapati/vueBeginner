<template>
  <div class="checkout">
    <div class="container mx-auto">
      <h2 class="py-4 text-center">Checkout</h2>
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="m-0 p-0">Cart</h5>
              <button class="btn d-flex align-items-center justify-content-center gap-2">
                <img src="../assets/trash.svg" alt="">
                <span class="remove">Remove All</span>
              </button>
            </div>
            <table class="table mt-3">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="w-100">PRODUCT</th>
                  <th class="text-center">QUANTITY</th>
                  <th class="text-center">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="({ id, title, description, brand, category, thumbnail, price, count }, index) in cart.items"
                  :key="index">
                  <td class="px-3">{{ index + 1 }}</td>
                  <td class="d-flex gap-3 align-items-start justify-content-start product w-100 ">
                    <img :src=thumbnail alt="">
                    <div class="flex-grow-1">
                      <span class="item-name">{{ title }}</span>
                      <div class="d-flex mt-1 gap-2 align-items-center justify-content-start">
                        <span class="brand m-0 p-0"> {{ brand }} </span> <span
                          style="font-weight: 900; color: #818181;">|</span>
                        <span class="category m-1 p-0">{{ category }} </span>
                      </div>
                      <div class="w-75 mt-1">
                        <p>{{ description }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="quantity">
                    <div class="px-1 d-flex justify-content-between">
                      <button class="btn" @click="decreaseCount(id)">-</button>
                      <span class="d-block px-4 align-items-stretch mt-2">{{ count }}</span>
                      <button class="btn" @click="increaseCount(id)">+</button>
                    </div>
                  </td>
                  <td class="price pt-3 px-4">
                    <span class="d-block text-nowrap">$ {{ price }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-md-4 ">
          <div class="card">
            <div class=" mt-3 subtotal d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$ {{ subTotal.toFixed(2) }}</span>
            </div>
            <div class="my-3 discount d-flex justify-content-between">
              <span>Discount</span>
              <span>${{ (subTotal - grandTotal).toFixed(2) }}</span>
            </div>

            <div class="py-3 border-top">
              <div class="grandTotal d-flex justify-content-between">
                <span>GrantTotal</span>
                <span>$ {{ grandTotal.toFixed(2) }}</span>
              </div>
              <button class=" mt-3 py-2 btn d-block w-100"
                style="background-color: #171717; color: #ffffff; font-weight: 700;">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex"
const store = useStore()
const cart = store.state.AddToCart;
const grandTotal = computed(() => {
  return cart.items.reduce((acc, obj) => { return acc += (obj.price * obj.count) }, 0)
})
const subTotal = computed(() => {
  return cart.items.reduce((acc, obj) => { return acc += (obj.price / (1 - obj.discountPercentage / 100) * obj.count) }, 0)
})
const decreaseCount = (id) => {
  store.dispatch('AddToCart/decreaseCount', id)

}
const increaseCount = (id) => {
  store.dispatch('AddToCart/increaseCount', id)
}
</script>
<style scoped>
.checkout {
  width: 100%;
  background-color: rgb(250, 250, 250);
  min-height: 100vh;
}

.checkout h2 {
  letter-spacing: 0.2rem;
  font-weight: 800 !important;
}

.card {
  background: #fff !important;
  border: 1px solid rgb(234, 234, 234);
  padding: 16px;
}

button img {
  width: 18px;
}

.remove {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
}

table th {
  font-size: 13px;
  padding: 12px 0 !important;
  font-weight: 600;
  color: #838383;
}

table .product img {
  width: 75px;
  height: 75px;
}

.item-name {
  font-weight: 600;
  color: #515151;
  font-size: 18px;
}

.brand {
  font-weight: 600;
  color: #717171;

}

.category {
  font-size: 14px;
  color: #818181;
}

.product p {
  font-size: 14px;
  color: #8f8f8f;
}

.quantity .btn {
  background: #f0f0f0;
}

.quantity span {
  color: #515151;
}

.price span {

  font-weight: 700;
}

.subtotal span:nth-child(1),
.discount span:nth-child(1) {
  color: #909090;
  font-weight: 600;
  font-size: 15px;
}

.grandTotal span:nth-child(1) {
  font-weight: 600;
  font-size: 15px;
}

.discount span:nth-child(2) {
  color: #838383;
}

.subtotal span:nth-child(2),
.discount span:nth-child(2),
.grandTotal span:nth-child(2) {
  font-weight: 700;
}
</style>
