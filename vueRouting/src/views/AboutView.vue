<script>
import { RouterLink, RouterView } from "vue-router";
import { useRouter } from 'vue-router';
// export default {
//   setup () {
//     const router = useRouter()
//     const currentRouteName = computed(() => router.currentRoute.value.name)
//     return { currentRouteName }
//   }
// };
export default {
  computed:{
     routeName(){
      console.log("dsdsf",this.$route.name)
       return this.$route.matched[0].path
    },
    parames(){
       return this.$route.params
    },

  }
};
</script>
<template>
  <div class="about">
    <nav>
      <ul>
        <li>
          <RouterLink :to="{path: '/instagram'}">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{path: `${routeName}`+'/explore'}">Feed</RouterLink>
        </li>
        <li>
          <RouterLink :to="{path: `${routeName}`+'/Add-post'}">Add Post</RouterLink>
        </li>
        <li>
          <RouterLink to="Notification">Notification</RouterLink>
        </li>
        <li>
          {{parames}}
        </li>
      </ul>
    </nav>
    <div class="section">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.about nav {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  width: 310px;
}
.about nav ul {
  width: 100%;
  display: flex;
  
  list-style: none;
  flex-direction: column;
}
.about nav ul li {
  display: block;
  margin: 8px 8px 8px 0;
  padding: 8px 12px;
  width: 100%;
}
nav ul .router-link-exact-active {
  color: #23a146; 
  width: 100%;
  display: block;
  padding: 8px 12px;
  background-color: #23a1476f;
}
nav ul li :hover{
  background-color: #23a1476f;
}
.section{
  width: 100%;
}
</style>
