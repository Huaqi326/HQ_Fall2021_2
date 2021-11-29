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

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newpost: Object
    },
     data() {
        return {
            post: this.newpost
        }
    }
}
</script>

<style>

</style>