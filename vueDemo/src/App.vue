<script setup>
import Normal from './components/Normal.vue'
import Binding from './components/Binding.vue'
import FormInputBinding from './components/FormInputBinding.vue'
import Todo from './components/Todo.vue'


</script>

<template>
    <div class="wrapper">
      <!-- <Normal />
      <Binding />
      <FormInputBinding /> -->
      <Todo />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
