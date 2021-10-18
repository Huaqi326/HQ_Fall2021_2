<template>
  <nav class="navbar is-fixed-top has-background-link-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand is-mobile">
            <figure class="image is-128x128">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    <router-link class="button is-primary" to="/main">
                        Main Page
                    </router-link>
                    <router-link class="button is-primary" to="/profileinfor">
                    <strong>Profile Management</strong>
                    </router-link>
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