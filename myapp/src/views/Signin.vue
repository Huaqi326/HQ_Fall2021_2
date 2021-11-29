<template>
  <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-two-fifths">
                    <div class="content has-text-centered">
                        <h1>Sign In</h1>
                    </div>
                    <form class="box" @submit.prevent="Signin()">
                        <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-success" type="email" placeholder="e.g. alex@example.com" v-model="email">
                        </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input class="input is-success" type="password" placeholder="********" v-model="password">
                            </div>
                        </div>

                        <button class="button is-primary">Sign In</button>
                    </form>

                    <div>Don't have an account? <router-link to="/signup">Sign up</router-link></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Session from '../services/session';

export default {
  data: () => ({
    email: null,
    password: null,
    Session
  }),
  methods: {
    Signin () {
      this.Session.Signin(this.email, this.password)
    }
  }
}
</script>

<style>

</style>
