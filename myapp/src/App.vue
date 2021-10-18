<template>
<div>
  <Home />
</div>
<router-view/>

</template>

<script>
import Home from './views/Home.vue';

export default {
    components: {
        Home
    }
}
</script>

<style>

</style>


