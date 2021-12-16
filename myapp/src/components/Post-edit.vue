<template>
<form class="card" @submit.prevent="$emit('addpostm')">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Input a URL to a picture" v-model="post.src" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Alt</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Some alternate text for this picture" v-model="post.alt" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Caption</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Some text to explain this picture" v-model="post.caption"></textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Tag a friend</label>
                    <div>Only the people who approved will be in this list.</div>
                    <SearchAutocomplete :items="item" />
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
        </footer>
    </form>
</template>

<script>
import SearchAutocomplete from './TagFriend.vue';
import { GetByHandle } from '../services/users.js';
import Session from '../services/session';

export default {
    name: 'Tag',
    components: {
        SearchAutocomplete
    },
    props: {
        newpost: Object,
    },
     data() {
        return {
            post: this.newpost,
            Session,
            item: []
        }
    },
    async mounted() {
        const response = await GetByHandle(Session.user.handle);
        for(var i = 0; i < Session.user.following.length; i++) {
            if(response.following[i].isApproved == true) {
                this.item.push(response.following[i].handle);
            }
        }
    }
}
</script>

<style>

</style>