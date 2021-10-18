<template>
<div>
<router-link class="button is-white" to="/profile"> <strong> &lt;-- </strong> </router-link>
  <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-full">
                    <form class="box"> 
                        <div class="field">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                            </figure>
                            <br>
                            <button class="button">Change Avatar</button>
                        </div>      

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                                <input class="input is-success" type="text" value="HQ">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input is-success" type="email" value="zhangh8@newpaltz.edu">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Phone Number</label>
                            <div class="control">
                                <input class="input is-success" value="123456789">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Bio</label>
                            <div class="control">
                                <textarea class="textarea"></textarea>
                            </div>
                        </div>
                    
                        <div class="field">
                            <label class="label">Height</label>
                            <div class="control">
                                <input class="input is-success" value="167cm" disabled>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Weight</label>
                            <div class="control">
                                <input class="input is-success" value="44lbs" disabled>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>