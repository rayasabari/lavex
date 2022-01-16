<template>
  <div>
    <div class="mb-4" v-for="post in posts" :key="post.id">
      <card :title="post.title">
        <h2 class="text-lg mb-3 text-gray-200">{{post.subject.name}}</h2>
        <p class="mb-2">{{ post.body }} <router-link class="text-indigo-400 hover:text-indigo-500" to="/asdf">Read more</router-link></p>
        Posted by <span class="text-gray-300 mr-1">{{post.author}}</span>
        <span class="text-gray-600 text-sm">{{post.published}}</span>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";
import axios from "axios";
export default {
  name: "Index",
  components: { Card },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get("api/posts");
        this.posts = response.data.data;
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<styl
Carde>

</style>