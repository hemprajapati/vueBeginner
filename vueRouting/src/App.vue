<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/instagram">Instagram</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>

nav {
  display: flex;
  justify-content: flex-start;
  gap:1.34rem;
}

nav a {
  color: rgb(137, 137, 137);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 8px 23px;
}

nav a.router-link-exact-active {
  color: #23a146;
}
nav a.router-link-exact-active:hover {
  background-color: #23a1476f;
}

@media (min-width: 1024px) {
}
</style>
