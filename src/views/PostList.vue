<template>
  <div class="post-list">
    <div class="card mb-2" v-for="posts in post" :key="posts.id">
      <div class="card-body">
        <h3>
          <router-link :to="'post-details/' + posts.id">{{posts.title}}</router-link>
        </h3>
        <!-- <p>{{posts.body}}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  props: ["post"],
};
</script>

<style lang="stylus" scoped></style>
