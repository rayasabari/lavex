<template>
  <div class="w-6/12 text-gray-300 m-auto">
    <card title="Login">
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
    </card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "../../components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      form: {
        email: "hi@rayasabari.com",
        password: "123123",
      },
    };
  },
  mounted() {
    document.title = "Login";
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submit() {
      await this.login(this.form);
      this.$router.replace("/");
    },
  },
};
</script>

<style>
</style>