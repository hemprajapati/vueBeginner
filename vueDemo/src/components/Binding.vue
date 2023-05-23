<template>
  <div>
    <h6 class="mt-4">{{ chooseRandomRepo }}</h6>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        @input="
          (e) => {
            handelChange(e);
          }
        "
      />
      <button type="submit" :disabled="isDisable" class="mt-3 btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Binding",
  data() {
    return {
      isDisable: true,
      repoList: [
        "AdminDashboard",
        "CarLoanSystem",
        "OnlineShoppingCart",
        "MoviePredictor",
        "BirthdayReminder",
        "TodoListTask",
        "TicTacToe",
        "StockPredictor",
      ],
      chooseRandomRepo: "",
    };
  },
  methods: {
    handelChange(e) {
      if (e.target.value === this.chooseRandomRepo) {
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    },
  },
  beforeMount() {
    const repoLength = this.repoList.length;
    this.chooseRandomRepo =
      this.repoList[Math.floor(Math.random() * repoLength)];
  },
};
</script>

<style lang="scss" scoped></style>
