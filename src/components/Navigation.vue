<template>
  <header>
    <nav class="w-full py-4 bg-gray-900 text-gray-400 border-b border-gray-800">
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
            <dropdown-menu
              v-model="dropdown.show"
              :right="true"
              transition="translate-fade-down"
              class="w-40 flex flex-col"
            >
              <button
                class="hover:text-gray-200 transition duration-300 flex justify-end"
              >{{user.name}}</button>
              <div
                slot="dropdown"
                class="bg-gray-900 w-40 text-gray-400 p-4 space-y-2 border border-gray-700 mt-7 shadow-lg rounded-lg flex flex-col absolute"
              >
                <router-link
                  class="hover:text-gray-200 transition duration-300"
                  to="/posts/new"
                >New Post</router-link>
                <router-link
                  class="hover:text-gray-200 transition duration-300"
                  to="/posts" exact
                >All Posts</router-link>
                <a
                  href="#"
                  class="hover:text-gray-200 transition duration-300"
                  @click.prevent="logout"
                >Logout</a>
              </div>
            </dropdown-menu>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import DropdownMenu from "@innologica/vue-dropdown-menu";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { DropdownMenu },
  data() {
    return {
      dropdown: {
        show: false,
        right: true,
        hover: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      authCheck: "auth/check",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),
    async logout() {
      await this.logoutAction();
      this.$router.replace("/login");
    },
  },
};
</script>

<style>
/*translate fade (top to down)*/
.translate-fade-down-enter-active,
.translate-fade-down-leave-active {
  transition: all 250ms;
  transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
}
.translate-fade-down-enter,
.translate-fade-down-leave-active {
  opacity: 0;
}
.translate-fade-down-enter,
.translate-fade-down-leave-to {
  position: absolute;
}

.translate-fade-down-enter {
  transform: translateY(-10px);
}
.translate-fade-down-leave-active {
  transform: translateY(10px);
}
</style>