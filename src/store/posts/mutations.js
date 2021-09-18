export default {
  //fuction think its is
  //payload is a object
  addPost(state, payload) {
    //always call back
    state.posts.unshift(payload);
  },
  editPost(state, payload) {
    console.log(payload.id);
    const posts = state.posts.map(data => {
      if (data.id == payload.id) {
        return {
          ...payload
        };
      }
      return data;
    });
    state.posts = posts;
  },
  deletePost(state, id) {
    const posts = state.posts.filter(data => data.id != id);
    state.posts = posts;
  },
  getPosts(state, payload) {
    state.posts = payload;
  },
  getPost(state, id) {
    // const posts = state.posts.find(data => data.id == id);
    // state.post = posts;
    state.post = state.posts.find(data => data.id == id);
  }
};
