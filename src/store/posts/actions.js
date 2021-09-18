import { postClient } from "../../lib/http";

export default {
  async fetchPosts({ commit }) {
    const posts = await postClient.get("posts");
    // console.log(posts.data);
    commit("getPosts", posts.data);
  },

  async addPost({ commit }, newData) {
    const posts = await postClient.post("posts", newData);

    commit("addPost", posts.data);
  },

  async deletePost({ commit }, id) {
    //const posts = await postClient.delete(`posts/${id}`);
    commit("deletePost", id);
  },
  async getPost({ commit }, id) {
    // const posts = await postClient.get(`posts/${id}`);
    commit("getPost", id);
  },
  async updatePosts({ commit }, payload) {
    commit("editPost", payload);
  }
};
