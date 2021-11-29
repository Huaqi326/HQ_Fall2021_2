<template>
  <div class="container">
        <!-- <div class="columns">
            <div class="column"> -->
                <nav class="navbar is-fixed-top has-background-link-light" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand is-mobile">
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div class="navbar-start">
                        <router-link class="button is-link is-light" style="margin-left:20px; margin-top:6px;" to="/main">
                            Main Page
                        </router-link>
                    </div>
                

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <router-link class="button is-link is-light is-outlined" to="/profileinfor">
                                    <strong>Profile Management</strong>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <br>
                <section class="section">
                    <div class="container">
                        <div class="tabs is-centered is-boxed">
                            <ul>
                                <li :class="postactive ? 'is-active' : '' ">
                                    <a @click="post()">
                                    <span class="icon is-two-fifths"><i class="fas fa-image" aria-hidden="true"></i></span>
                                    <span>Post</span>
                                    </a>
                                </li>
                                <li :class="logactive ? 'is-active' : '' ">
                                    <a @click="log()">
                                    <span class="icon is-two-fifths"><i class="fas fa-calendar-check" aria-hidden="true"></i></span>
                                    <span>Exercise Log</span>
                                    </a>
                                </li>
                                <li :class="friendsactive ? 'is-active' : '' ">
                                    <a @click="friends()">
                                    <span class="icon is-two-fifths"><i class="fas fa-user-friends" aria-hidden="true"></i></span>
                                    <span>Friends</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                            <div class="columns is-multiline" v-if="postactive">
                                <div class="post column is-one-third" v-for=" (p, i) in posts" :key="p.src">
                                    <post :post="p" @remove="remove(p, i)" />
                                </div>
                            </div>
                        <div v-if="logactive">
                            <Log />
                        </div>
                        <div v-if="friendsactive">
                            <article class="panel is-success">
                                <p class="panel-heading">
                                    Following
                                </p>
                                <div class="friend" v-for=" (f, j) in friendsl" :key="j">
                                    <friend :friend="f" />
                                </div>   
                            </article>
                            <article class="panel is-success">
                                <p class="panel-heading">
                                    Follower
                                </p>
                                <div class="friend" v-for=" (a, b) in friendsr" :key="b">
                                    <followerr :followerr="a" />
                                </div>   
                            </article>
                        </div>
                    </div>
                </section>                  
            <!-- </div>
        </div> -->
       
    </div>
</template>

<script>
import Session from '../services/session.js';
import Post from '../components/Profile/Posts.vue';
import { GetWall } from "../services/posts.js";
import { GetByHandle } from "../services/users.js";
import Friend from "../components/Profile/Friends.vue";
import Log from '../components/Profile/Log.vue';
import Followerr from "../components/Profile/Follower.vue";

export default {
    components: {
        Post,
        Friend,
        Log,
        Followerr
    },
    data: () => ({
        posts: [],
        friendsl: [],
        friendsr: [],
        Session,
        postactive: true,
        logactive: false,
        friendsactive: false
    }),
    async mounted() {
        this.posts = await GetWall(Session.user.handle);
        const response = await GetByHandle(Session.user.handle);
        this.friendsl = response.following;
        this.friendsr = response.follower;

        this.posts = await GetWall(Session.user.handle);
    },
    methods: {
        post() {
            if(this.postactive == false){
                this.postactive = !this.postactive;
                this.logactive = false;
                this.friendsactive = false;
            }
        },
        log() {
            if(this.logactive == false){
                this.logactive = !this.logactive;
                this.postactive = false;
                this.friendsactive = false;
            } 
        },
        friends() {
             if(this.friendsactive == false){
                this.friendsactive = !this.friendsactive;
                this.logactive = false;
                this.postactive = false;
            } 
        }
    }
}
</script>

<style>

</style>