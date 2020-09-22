<template>
  <div class="home">
    <AddPost v-on:add-post="addPost" />
    <PostList v-bind:post="posts" />
  </div>
</template>

<script>
import axios from "axios";
import AddPost from "@/views/AddPost.vue";
import PostList from "@/views/PostList.vue";
// @ is an alias to /src

export default {
  components: {
    AddPost,
    PostList,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  methods: {
    addPost(newPost) {
      const { title, body } = newPost;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body,
        })
        .then((res) => {
          this.posts = [...this.posts, res.data];
          // alert(this.posts);
        })
        .catch((err) => {
          // console.log(err);
          alert(err);
        });
    },
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        this.posts = res.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
