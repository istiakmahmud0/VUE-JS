<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  background: #222831;
}
.card {
  background: #1e1d24;
}
.card-body {
  color: #f9ffee;
}
.card-body a {
  color: #efbb35;
}
</style>
