<template>
<div>
<router-link class="button is-white" to="/profile">  
    <span class="icon is-large fa-stack fa-lg">
        <i class="fas fa-long-arrow-alt-left"></i>
    </span>
</router-link>
  <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-full">
                    <form class="box" @submit.prevent="Update()"> 
                        <div class="field" v-if="Session.user.pic">
                            <figure class="image is-128x128">
                                <img class="is-rounded" :src="image">
                            </figure>
                            <input class="input is-success" :style="{display: display}" type="text" v-model="updateinfor.pic">
                            <button class="button" @click="display = 'initial'">Change Avatar</button>
                        </div>  

                        <div class="field" v-else>
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                            </figure>
                            <input class="input is-success" :style="{display: display }" type="text" v-model="updateinfor.pic">
                            <button class="button" @click="display = 'initial'">Change Avatar</button>
                        </div>     

                        <div class="field">
                            <label class="label">Firstname</label>
                            <div class="control">
                                <input class="input is-success" type="text" v-model="updateinfor.firstName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Lastname</label>
                            <div class="control">
                                <input class="input is-success" type="text" v-model="updateinfor.lastName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                                <input class="input is-success" type="text" v-model="updateinfor.userName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input is-success" type="email" v-model="updateinfor.handle">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Phone Number</label>
                            <div class="control">
                                <input class="input is-success" type="tel" v-model="updateinfor.phoneNumber">
                            </div>
                        </div>
                    
                        <div class="field">
                                <label class="label">Sex</label>
                                <div class="control">
                                    <select v-model="updateinfor.sex">
                                        <option disabled>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                        <div class="field">
                            <label class="label">Height</label>
                            <div class="control">
                                <input class="input is-success" v-model="updateinfor.height">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Weight</label>
                            <div class="control">
                                <input class="input is-success" v-model="updateinfor.weight">
                            </div>
                        </div>

                        <button class="button is-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Session from '../services/session';
import { GetByHandle } from '../services/users';

export default {
    data() {
        return {
            updateinfor: {
                pic: Session.user.pic,
                firstName: Session.user.firstName,
                lastName: Session.user.lastName,
                userName: Session.user.userName,
                handle: Session.user.handle,
                phoneNumber: Session.user.phoneNumber,
                sex: Session.user.sex,
                height: Session.user.height,
                weight: Session.user.weight
            },
            Session,
            image:Session.user.pic,
            display: 'none'
        }
    },
    methods: {
        async Update() {
            this.Session.Update(Session.user._id, this.updateinfor);
            // this.updateinfor = await GetByHandle(Session.user.handle);
        }
    }
}
</script>

<style>

</style>