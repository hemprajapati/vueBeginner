
<template>
  <div>
    <h1>{{ count }}</h1>
    <button class=""  >Increase</button>

    <!-- <b-button variant="primary">Click me</b-button> -->
    <button @click="decrement">Decrease</button>

  </div>
</template>

<script>
import { computed } from 'vue';
import { mapActions, mapGetters, useStore } from 'vuex';
// import { BButton } from 'bootstrap-vue';
import { ADD_TO_CART_ASYNC, REMOVE_FROM_CART_ASYNC } from "../store/Cart/Constant"
export default {
  setup() {
    const store = useStore()
    console.log("store",store)
  },
  computed: {
    ...mapGetters('Cart', ['getCount']),
    count() {
      console.log("...mapGetters")
      return this.getCount
    }
  },
  // computed: {
  //   ...mapGetters({
  //     count: 'Cart/getCount'
  //    })
  // },
  methods: {
    ...mapActions('Cart', [ADD_TO_CART_ASYNC]),
    increment() {
      return this[ADD_TO_CART_ASYNC]()
    }
    // ...mapActions({
    //   increment: ['Cart', INCREMENTASYNC],
    //   decrement: DECREMENTASYNC
    // })
    // increment() {
    //   this.$store.dispatch('Cart/addTocartAsync')
    //   console.log("i clicked")
    // }
  }
}
</script>

<style lang="scss" scoped></style>