<template>
<div class="container">
        <div class="columns">
            <div class="column">
                <Header />
                <br>
                <button class="button">Record Your Weight</button>
                <button class="button">Record Your Height</button>
                <button class="button">Record Your Exercise Time</button>
                <br><br>
                <Table />      
            </div>
        </div>
       
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Table from '../components/Table.vue';

export default {
    components: {
        Header,
        Table
    }
}
</script>

<style>

</style>