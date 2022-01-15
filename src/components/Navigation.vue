<template>
  <header>
    <nav class="w-full py-4 bg-gray-900 text-gray-400">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center">
        <div class="flex space-x-8 items-center justify-between">
          <router-link to="/" class="font-bold text-gray-400 text-xl">Lavex</router-link>
          <ul class="flex items-center font-normal space-x-4">
            <li>
              <router-link exact to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
        <div>
          <template v-if="!authCheck">
            <router-link to="/login">Login</router-link>
          </template>
          <template v-else>
            {{ user.name }}
            <!-- {{ user.name }} -->
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authCheck: "auth/check",
      user: "auth/user",
    }),
  },
};
</script>

<style>
</style>