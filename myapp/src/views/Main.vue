<template>
<div class="container"> 
       <div class="column is-full">
             <Header />
        </div>
        <div class="columns is-multiline">
        <div class=" post column is-half" v-for=" (p, i) in posts" :key="p.src">
            <post :post="p" @remove="remove(p, i)" />
        </div>     
        </div>

       <button class="add button is-rounded is-success" @click="add()">
        <i class="fas fa-plus"></i>
       </button>

       <div v-if="addpost">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">New Post</p>
                <button class="delete" aria-label="close" @click="close()"></button>
                </header>
                <section class="modal-card-body">
                    <Postedit  :newpost="newpost" @addpostm="addpostm()" />
                </section>
            </div>
            </div>
       </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Post from "../components/Posts.vue";
import { GetAll, Add } from '../services/posts.js';
import Session from '../services/session.js';
import Postedit from '../components/Post-edit.vue';

const newpost = () => ({ 
    userName: Session.user.userName, 
    user_handle: Session.user.handle, 
    src: null, 
    alt: null, 
    caption: null, 
    time: new Date(),
    like: 0
})

export default {
    components: {
        Header,
        Post,
        Postedit,
    },
    data: () => ({
        posts: [],
        newpost: newpost(),
        Session,
        addpost: false
    }),
    async mounted() {
        this.posts = await GetAll();
    },
    methods: {
        add() {
            this.addpost = true;
        },
        close() {
            this.addpost = false;
        },
        async addpostm() {
            await Add(this.newpost);
            this.addpost = false;
            this.posts = await GetAll();
            this.newpost = newpost();
        }
    }
}
</script>

<style>
.add {
    position: fixed;
    bottom: 40px;
    right: 30px;
    height: 65px;
    width: 65px;
}
</style>