<template>
  <div>
    <h1>Login</h1>
    <form @submit="goToAbout">
      <div>
        <label for="email">email</label>
        <input type="text" name="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" name="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    goToAbout(evt) {
      evt.preventDefault();
      localStorage.setItem("isAuth", true);
      this.$router.push("/post");
    }
  }
};
</script>

<style></style>
