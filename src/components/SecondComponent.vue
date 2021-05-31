<template>
  <div class="content">
    <div v-once>
      <h1>{{ luckyNumber }} is my lucky number</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondComponent", //best practice: a 2 words name
  // data() {
  //   return {
  //     luckyNumber: 0,
  //   }
  // },
  computed: {
    luckyNumber() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>
