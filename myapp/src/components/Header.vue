<template>
<div class="column is-full">
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">      
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/main">
                    Moment
                </router-link>
        
                <router-link class="navbar-item" to="/log">
                    Exercise Log
                </router-link>

                <router-link class="navbar-item" to="/usermanage" v-if="Session.user.isAdmin == true">
                    Admin Manage
                </router-link>
            </div>

            <div v-if="!Session.user">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <router-link class="button is-primary" to="/signin">Sign in</router-link>
                            <router-link class="button is-light" to="/signup">Sign up</router-link>
                        </div>
                    </div> 
                </div>
            </div>
                 
            <div class="navbar-end" v-else>
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <div class="username" v-if="Session.user.userName">
                            Dear {{Session.user.userName}}
                        </div>

                        <div class="username" v-else>
                            Dear {{Session.user.handle}}
                        </div>

                        <figure class="image is-36x36" v-if="Session.user.pic">
                            <img class="is-rounded" :src="image">
                        </figure>

                         <figure class="image is-36x36" v-else>
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                
                        <div class="navbar-dropdown is-right">
                        <router-link class="navbar-item" to="/profile">
                            Profile
                        </router-link>
                        <router-link class="navbar-item" to="/">
                            Sign out
                        </router-link>
                        </div>
                    </div>
                </div> 
            </div>
    
        </div>
    </nav>
    </div>
</template>

<script>
import Session from '../services/session';

export default {
    data() {
        return {
            Session,
            image:Session.user.pic
        }
    }
}
</script>

<style>
.username{
    position:relative;
    right: 10px;
    text-decoration: underline;
}
</style>