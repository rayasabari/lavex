<template>
  <div>
    <card title="New Post">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi ex fuga quaerat nesciunt quis vel ducimus voluptatem! Quae, at.
    </card>
  </div>
</template>

<script>
import Card from '../../components/Card.vue'
export default {
  components: { Card },
  mounted(){
    document.title = 'New Post'
  }
}
</script>

<style>

</style>