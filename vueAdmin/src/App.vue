<template>
  <div class="main d-flex">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="mainview">
      <Header />
      <div class="router-wrapper">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .main{
  position: relative;
} */
.sidebar {
  height: 100vh;
  max-height: 100vh;
  width: 265px;
  /* width: 0; */
  position: sticky;
  top: 0;
  /* width: 25px; */
  overflow-y: auto;
  box-shadow: 0px 12px 30px rgba(17, 38, 146, 0.05);
}

@media (max-width: 992px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1024;
    background: #ffffff;
  }
}
/* nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
.mainview {
  /* width: calc(100vw - 265px); */
  background: #eaeaea;
  flex: 1;
}
.router-wrapper {
  /* border: 1px solid red; */
  margin-top: -2.3rem;
}
</style>

<script>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./views/SideBar.vue";
import Header from "./views/Header.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Header,
  },
};
</script>
