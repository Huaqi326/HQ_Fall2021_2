<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <Home />
  <!-- <router-view/> -->
</template>

<script>
import Home from "./views/Home.vue";

export default {
    components: {
      Home
    }
}
</script>

