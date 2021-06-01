<template>
  <div class="content">
    <div v-once>
      <h1 v-if="luckyNumber">{{ luckyNumber }} is obvisouly my lucky number</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondComponent", 
  computed: {
    luckyNumber() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>
