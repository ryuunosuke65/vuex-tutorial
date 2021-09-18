<template>
  <div>
    <h1>{{ this.posts.title }}</h1>
    <p>{{ this.posts.body }}</p>
  </div>
</template>

<script>
export default {
  name: "ViewPost",
  mounted() {
    //dispatch -> action
    //commit -> mutation
    //getters -> getters
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  computed: {
    posts() {
      return this.$store.getters.getPost;
    }
  },
  methods: {}
};
</script>

<style></style>
