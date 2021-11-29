<template>
  <a class="panel-block is-active">
    <figure class="image is-48x48" v-if="image.pic">
        <img :src="image.pic">
    </figure>
    <figure class="image is-48x48" v-else>
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <p style="margin-left:10px">{{friend.handle}}</p>

    <button class="button is-success unfollow" v-if="friend.isApproved == true" @click="Unfollowed()"> Unfollowed </button>
    <button class="button is-warning pending" v-else> Pending </button>
  </a>
</template>

<script>
import { GetByHandle } from "../../services/users.js";
import { UnFollow } from '../../services/follow.js';
import Session from '../../services/session.js';

export default {
    data() {
        return{
            image:{},
            Session
        }
    },
    props: {
        friend: Object
    },
    async mounted() {
        this.image  = await GetByHandle(this.friend.handle);
    },
    methods: {
        Unfollowed() {
            UnFollow(Session.user.handle, this.friend.handle);
        }  
    }
}
</script>

<style>
.unfollow {
    position: relative;
    width:110px;
    right:-60rem;
}
.pending {
    position: relative;
    right:-60rem;
    width:110px;
}
</style>