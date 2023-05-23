<template>
  <div>
    <h5>{{ topic }}</h5>
    <h5>{{ topic_new }}</h5>
    <h5>{{ name }} {{}}</h5>

    <!-- <button class="btn btn-primary" @click="changeName">
      click to change Name
    </button> -->
    <div class="d-flex col-md-5 mx-auto gap-2 flex-column">
      <input type="text" v-model="name" />
      <input type="text" v-model="email" />
      <input type="text" v-model="address.city" />
      <input type="text" v-model="address.state" />
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
// import func from "vue-editor-bridge";

export default {
  name: "React",
  setup() {
    let topic = ref("Test Composition");
    let topic_new = ref("New Test Composition");
    const form = reactive({
      name: "",
      email: "",
      address: {
        city: "",
        state: "",
      },
    });
    // let newData = toRefs(form);
    function changeName() {
      form.name = "hemal kaklotar";
      //   console.log(newData);
    }

    watch(
      () => {
        return { ...form, ...form.address };
      },
      (newval, oldval) => {
        console.log("newval", newval);
        console.log("oldval", oldval);
      }
    );
    return {
      topic,
      topic_new,
      changeName,
      ...toRefs(form),
    };
  },
};
</script>
<style scoped></style>
