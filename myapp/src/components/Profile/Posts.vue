<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="post.src" :alt="post.alt">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="post.user.pic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
        <p class="subtitle is-6">
            {{post.user.userName}}
        </p>
      </div>
    </div>

    <div class="content">
      {{post.caption}}
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>

</style>