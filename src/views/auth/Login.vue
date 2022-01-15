<template>
  <div class="w-6/12 text-gray-300 m-auto">
    <div class="bg-gray-900 shadow-md rounded-xl">
      <div class="p-6 border-b border-gray-800">
        <h2 class="text-xl font-medium">Login</h2>
      </div>
      <div class="p-6">
        <form @submit.prevent="submit">
          <div class="mb-8 flex flex-col">
            <label for="email" class="mb-3 text-gray-400">Email</label>
            <input v-model="form.email" type="email" id="email" class="form-control" />
          </div>
          <div class="mb-8 flex flex-col">
            <label for="password" class="mb-3 text-gray-400">Password</label>
            <input v-model="form.password" type="password" id="password" class="form-control" />
          </div>
          <button type="submit" class="btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "hi@rayasabari.com",
        password: "123123",
      },
    };
  },
  mounted(){
    document.title = 'Login';
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async submit() {
      await this.login(this.form);
      this.$router.replace('/');
    },
  },
};
</script>

<style>
</style>