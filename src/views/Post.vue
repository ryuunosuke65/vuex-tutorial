<template>
  <div>
    <CreatePost />
    <div>
      <h1>Edit Post</h1>
      <form action="">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="body">Body</label>
          <input type="text" id="body" v-model="body" />
        </div>
        <div>
          <button @click="updatePost">Edit Post</button>
        </div>
      </form>
    </div>
    <div v-for="(post, index) in posts" :key="index">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <button type="button" @click="deletePost(post.id)">x</button>
      <button type="button" @click="viewPost(post.id)">view</button>
      <button @click="editPost(post.id)">Edit Post</button>
    </div>
  </div>
</template>

<script>
import CreatePost from "../views/CreatePost.vue";

export default {
  name: "Post",
  data: () => ({
    postsUpdate: {},
    title: null,
    body: null,
    id: null,
    userId: 1
  }),
  components: {
    CreatePost
  },
  mounted() {
    //dispatch -> action
    //commit -> mutation
    //getters -> getters
    this.$store.dispatch("fetchPosts");

    //console.log(this.posts);
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch("deletePost", id);
    },
    viewPost(id) {
      this.$router.push(`viewpost/${id}`);
    },
    editPost(id) {
      this.$store.dispatch("getPost", id);
      //console.log(this.$store.getters.getPost.title);
      this.title = this.$store.getters.getPost.title;
      this.body = this.$store.getters.getPost.body;
      this.id = this.$store.getters.getPost.id;
      this.userId = this.$store.getters.getPost.userId;
    },
    updatePost(event) {
      event.preventDefault();

      this.postsUpdate = {
        title: this.title,
        body: this.body,
        id: this.id,
        userId: this.userId
      };

      this.$store.dispatch("updatePosts", this.postsUpdate);
    }
  }
};
</script>

<style></style>
