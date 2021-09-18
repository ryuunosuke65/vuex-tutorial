import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import ViewPost from "../views/ViewPost.vue";

const routes = [
  {
    path: "/",
    component: Login,
    name: "Login"
  },
  {
    path: "/post",
    component: Post,
    name: "Post"
  },
  {
    path: "/viewpost/:id",
    component: ViewPost,
    name: "ViewPost"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
