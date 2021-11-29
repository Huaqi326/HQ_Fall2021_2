<template>
  <div class="card">
    <div class="pt-4 pl-3 pb-2">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48" v-if="post.user.pic">
            <img :src="post.user.pic" alt="Placeholder image">
          </figure>
          <figure class="image is-48x48" v-else>
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <div class="media-content">
          <p class="subtitle is-6">
              {{post.user.userName}}
          </p>
        </div>

        <div class="dropdown is-right" :class="isactive ?  'is-active' : '' " style="right:10px;">
        <div class="dropdown-trigger">
          <button class="button more" aria-haspopup="true" aria-controls="dropdown-menu3" @click="isActive()">
            <span class="icon is-large fa-stack fa-lg">
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">

          <div v-if="isFollow()">
            <a href="#" class="dropdown-item" @click="shareButton()">
              <i class="fas fa-share"></i>
                Share
            </a>
          </div>

          <div v-else>
            <a href="#" class="dropdown-item" @click="follow()">
              <i class="fas fa-plus"></i>
                Follow
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item" @click="shareButton()">
              <i class="fas fa-share"></i>
                Share
            </a>
          </div>
          </div>
        </div>

        <div v-if="shared" class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Share Content</p>
              <button class="delete" aria-label="close" @click="close()"></button>
            </header>
            <section class="modal-card-body">
              <Share :post="post" />
            </section>
          </div>
        </div>
        </div>
        </div>
      </div>

    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.src" :alt="post.alt">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <strong>{{post.userName}}</strong> {{post.caption}}
      </div>
    </div>
    <footer class="card-footer pl-5">
      <span class="icon is-large fa-stack fa-lg" :class="{'has-text-danger':isLike}" @click="like(post._id)">
        <i class="fas fa-heart fa-large"></i>
        {{this.likes.like}}
      </span>
    </footer>
    <hr>
  </div>
</template>

<script>
import Session from '../services/session.js';
import { Follow } from '../services/follow.js';
import Share from './Share.vue';
import { Update } from '../services/posts.js';

export default {
    components: {
      Share
    },
    data() {
      return{
        Session,
        isactive: false,
        shared: false,
        likes: {
          like: this.post.like
        },
        isLike:false
      }
    },
    props: {
        post: Object
    },
    methods: {
      isFollow() {
        if(Session.user.following){
          for(var i = 0; i < Session.user.following.length; i++) {
            if(Session.user.following[i].handle == this.post.user_handle) {
              return true;
            }else{
              if(Session.user.handle == this.post.user_handle){
                return true;
              }else{
                return false;
              }
            }
          }
        }
      },
      isActive() {
        this.isactive = !this.isactive;
      },
      follow() {
        Follow(Session.user.handle, this.post.user_handle);
      },
      like(id) {
        this.isLike = !this.isLike;
        if(this.isLike == true) {
          this.likes.like = this.likes.like + 1;
          Update(id, this.likes);
        }else {
          this.likes.like = this.likes.like - 1;
          Update(id, this.likes);
        }
      },
      shareButton() {
        this.shared = true;
      },
      close() {
        this.shared = false;
      }
    },
}
</script>

<style>
.more {
  border-color: white;
}
</style>