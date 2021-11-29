<template>
  <a class="panel-block is-active" v-if="followerr.isApproved != true">
    <figure class="image is-48x48" v-if="image.pic">
        <img :src="image.pic">
    </figure>
    <figure class="image is-48x48" v-else>
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <p style="margin-left:10px">{{followerr.handle}}</p>

    <button class="button is-danger is-light request" @click="approve()"> Request </button>
  </a>

  <a class="panel-block is-active" v-else>
    <figure class="image is-48x48" v-if="image.pic">
        <img :src="image.pic">
    </figure>
    <figure class="image is-48x48" v-else>
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <p style="margin-left:10px">{{followerr.handle}}</p>
  </a>
</template>

<script>
import { GetByHandle, Get } from "../../services/users.js";
import { Approve } from '../../services/follow.js';
import Session from '../../services/session.js';

export default {
    data() {
        return{
            image:{},
            Session
        }
    },
    props: {
        followerr: Object
    },
    async mounted() {
        this.image  = await GetByHandle(this.followerr.handle);
    },
    methods: {
        async approve() {
            Approve(Session.user.handle, this.followerr.handle, true);
        }     
    }
}
</script>

<style>
.request {
    position: relative;
    right: -60rem;;
    width:110px;
}
</style>