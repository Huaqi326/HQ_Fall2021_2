<template>
<div class="container">
        <div class="columns">
            <div class="column">
                <nav class="navbar" role="navigation" aria-label="main navigation">      
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <router-link class="navbar-item" to="/signin">
                                Sign In
                            </router-link>
                    
                            <router-link class="navbar-item" to="/signup">
                                Sign Up
                            </router-link>
                        </div>
                    </div>
                </nav>               
            </div>
    </div> 
</div>

<router-view/>

</template>

<script>

</script>

<style>

</style>


