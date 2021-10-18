<template>
<div class="container">
        <div class="columns">
            <div class="column">
                <Header />
                <Posts />                
            </div>
        </div>
       
    </div>
  
</template>

<script>
import Header from "../components/Header.vue";
import Posts from "../components/Posts.vue";

export default {
    components: {
        Header,
        Posts
    }
}
</script>

<style>

</style>