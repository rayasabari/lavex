<template>
  <div class="bg-gray-900 shadow-lg border border-gray-700 rounded-xl">
    <div class="px-6 py-4 border-b border-gray-800">
      <h2 class="text-xl font-medium">{{title}}</h2>
    </div>
    <div class="p-6 text-gray-400">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
</style>