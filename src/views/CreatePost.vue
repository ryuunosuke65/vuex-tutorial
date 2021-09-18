<template>
  <div>
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
        <button @click="addPost">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    posts: {},
    title: null,
    body: null,
    id: null,
    userId: 1
  }),
  methods: {
    addPost(event) {
      event.preventDefault();
      this.id = this.$store.getters.getPosts.length + 1;

      this.posts = { title: this.title, body: this.body, id: this.id, userId: this.userId };

      this.$store.dispatch("addPost", this.posts);
    }
  }
};
</script>

<style></style>
