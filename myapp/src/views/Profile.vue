<template>
  <div class="container">
        <div class="columns">
            <div class="column">
                <Header />
                <br><br><br><br><br>
                <Section />           
            </div>
        </div>
       
    </div>
</template>

<script>
import Header from '../components/Profile/Header.vue';
import Section from "../components/Profile/Section.vue";

export default {
    components: {
        Header,
        Section
    }
}
</script>

<style>

</style>