<template>
  <div class="add-post">
    <div class="row mb-3">
      <div class="col text-right">
        <button class="btn btn-primary" @click="formShow">Create New Post</button>
      </div>
    </div>
    <div class="card mb-3" v-if="formDiv">
      <div class="card-body bg-dark">
        <div class="card-body">
          <form @submit.prevent="addPost">
            <div class="form-group">
              <label for>Post Title</label>
              <input
                v-model="title"
                type="text"
                name="title"
                class="form-control"
                placeholder="Enter post title"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for>Post Details</label>
              <textarea
                class="form-control"
                name="body"
                placeholder="Enter post details"
                v-model="body"
              ></textarea>
            </div>
            <div class="row">
              <div class="col-6 mx-auto">
                <button class="btn btn-block btn-success">Create new post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      formDiv: false,
      title: "",
      body: "",
    };
  },
  methods: {
    formShow() {
      this.formDiv = true;
    },
    addPost() {
      const newPost = {
        title: this.title,
        body: this.body,
      };
      // Data sent to parent
      this.$emit("add-post", newPost);
      // (this.title = ""), (this.body = "");
    },
  },
};
</script>

<style lang="stylus" scoped></style>
