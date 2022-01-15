<template>
  <div id="app">
    <Navigation />
    <main class="max-w-screen-lg mx-auto pt-8">
      <router-view />
    </main>
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>
<style>
</style>
