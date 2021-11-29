<template>
   <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-two-fifths">
                    <div class="content has-text-centered">
                        <h1>Sign Up</h1>
                    </div>
                    <form class="box" @submit.prevent="Signup()">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input is-success" type="email" placeholder="e.g. alex@example.com" v-model="newuser.handle">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input class="input is-success" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="********" v-model="newuser.password">
                                <div>
                                    Password should contain at least
                                    <ul>
                                        <li>· 8 chacters</li>
                                        <li>· one uppercase letter</li>
                                        <li>· one lowercase letter</li>
                                        <li>· one number</li>
                                    </ul>  
                                </div>
                            </div>
                        </div>
                        
                        <div class="field">
                            <input type="checkbox" v-model="user.accept" id="accept"> By clicking Sign Up, you agree to our terms of services
                        </div>

                        <button class="button is-primary">Sign Up</button>
                            
                    </form>

                    <div>Already have an account? <router-link to="/signin">Sign in</router-link></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Session from '../services/session';

export default {
    data:() => {
        return {
            newuser:{
                handle: null,
                password: null,
            },
            Session,
            user: {
                accept: false
            },
         };
    },
    methods: {
        Signup(){
            if(this.user.accept == true) {
                alert("After you sign up, please signin again to visit your home page");
                this.Session.Signup(this.newuser);
            }else{
                alert("please agree the terms of services");
            }
        }
    }
}
</script>

<style>

</style>
