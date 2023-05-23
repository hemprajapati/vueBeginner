<template>
  <div class="list border border-primary">
    <table class="table">
      <tr v-for="({ name, discount }, index) in DiscountedPrice" :key="index">
        <td>
          {{ name }}
        </td>
        <td>
          {{ discount }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Normal",
  computed: {
    DiscountedPrice() {
      return this.India.map((item) => {
        return { name: item.name, discount: (item.priceamt * 0.24).toFixed(2) };
      });
      //     var India = this.India
      //    let result = '';
      //    for(let i = 0;i < India.length; i++ ) {
      //      result += India[i] + '<br>'
      //    }
      //    return result;
    },
  },
  data() {
    return {
      India: [
        { name: "Samasung M31", priceamt: 22 },
        { name: "Galaxy S10", priceamt: 16 },
        { name: "Samasung M31", priceamt: 30 },
        { name: "Galaxy Note 10", priceamt: 80 },
        { name: "Redmi Note 9", priceamt: 60 },
        { name: "Vivo V15", priceamt: 10 },
        { name: "Apple iPhone 11", priceamt: 110 },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>
