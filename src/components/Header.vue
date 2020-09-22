<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark mb-3">
      <div class="container">
        <router-link to="/">{{ title }}</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "VUE APP"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: black;
}
.navbar ul {
  list-style-type: none;
  padding: 0;
}
.navbar li {
  display: inline-block;
  margin: 0 10px;
}
.navbar li a {
  color: white !important;
}
</style>
