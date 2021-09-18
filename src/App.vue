<template>
  <div id="app">
    <router-link to="/post">Post</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

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
  }
};
</script>

<style></style>
