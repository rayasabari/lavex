<template>
  <input
    :type="type"
    :value="value"
    :name="name"
    :placeholder="placeholder"
    class="rounded-md p-3 bg-gray-800 focus:bg-gray-700 transition duration-300 text-gray-200 focus:outline-none"
  />
</template>

<script>
export default {
  props: ["type", "value", "name", "placeholder", "xdata"],
};
</script>

<style>
</style>