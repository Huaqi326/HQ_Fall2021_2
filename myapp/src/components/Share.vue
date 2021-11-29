<template>
  <div id="app">
    <Weibo-button
        shareUrl="https://github.com/"
        v-bind:picture="post.src"
        v-bind:title="post.caption"
        hasIcon
    />
    <Facebook-button
        shareUrl="https://github.com/"
        hasIcon
    />
    <LinkedIn-button
        shareUrl="https://github.com/"
        hasIcon
    />
    <Reddit-button
        shareUrl="https://github.com/"
        hasIcon
    />
    <Twitter-button
        shareUrl="https://github.com/"
        hasIcon
    />
    <Telegram-button
        shareUrl="https://github.com/"
        hasIcon
    />
    </div>
</template>

<script>
import WeiboButton from "vue-share-buttons/src/components/WeiboButton.vue";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton.vue";
import LinkedInButton from "vue-share-buttons/src/components/LinkedInButton.vue";
import RedditButton from "vue-share-buttons/src/components/RedditButton.vue";
import TwitterButton from "vue-share-buttons/src/components/TwitterButton.vue";
import TelegramButton from "vue-share-buttons/src/components/TelegramButton.vue";

export default {
    components: {
      WeiboButton,
      LinkedInButton,
      FacebookButton,
      RedditButton,
      TwitterButton,
      TelegramButton
    },
    props: {
        post: Object
    }
}
</script>

<style>

</style>