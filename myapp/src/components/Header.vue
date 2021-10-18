<template>
        <nav class="navbar" role="navigation" aria-label="main navigation">      
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/main">
                    Moment
                </router-link>
        
                <router-link class="navbar-item" to="/log">
                Exercise Log
                </router-link>
            </div>
                 
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <figure class="image is-36x36">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                
                        <div class="navbar-dropdown is-right">
                        <router-link class="navbar-item" to="/profile">
                            Profile
                        </router-link>
                        <a class="navbar-item">
                            Change password
                        </a>
                        <router-link class="navbar-item" to="/">
                            Sign out
                        </router-link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>