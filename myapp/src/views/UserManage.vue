<template>
<div class="container">
    <Header />
    <br>
    <div class="column">
        <table class="usertable">
        <tr>
            <th>ID</th>
            <th>User_handle</th>
            <th>UserName</th>
        </tr>
        <tr v-for="(a,b) in response" :key="b" @click="test(response[b]._id)">
            <td>{{response[b]._id}}</td>
            <td>{{response[b].handle}}</td>
            <td>{{response[b].userName}}</td>
        </tr>
        </table>
    </div>   
</div>
</template>

<script>
import { GetAll, Delete } from '../services/users';
import Header from "../components/Header.vue";

export default {
    components: {
        Header
    },
    data() {
        return {
            response: []
        }
    },
    async mounted() {
        this.response = await GetAll();
    },
    methods: {
        async test(id) {
            if(confirm("Do you want to delete this user?")) {
                Delete(id);
                this.response = await GetAll();
            }
        }
    }
}
</script>

<style>
.usertable {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>