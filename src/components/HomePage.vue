<template>
  <div class="content">
    <div v-once>
      <h1>{{ pageTitle }}</h1>
    </div>
    <div>
      <router-link to="/first"
        >Go to First Component using its path</router-link
      >
    </div>
    <br/>
    <div>
      <button @click="goToFirstComponent()"><u>
        Go to First Component programatically</u></button>
    </div>
    <br/>
    <div>
       <button  @click="goToFirstComponentWithParams()"><u>
        Go to First Component programatically with params</u></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      pageTitle: "Welcome on the Home Page",
    };
  },
  methods: {
    goToFirstComponent: function(){
      this.$router.push('/first');
    },
    goToFirstComponentWithParams: function(){
      this.$router.push({
        name: 'Second', 
        params: {
          id: 8, 
          }
        });
    },
  }
};
</script>

<style scoped>
.content {
  align-content: center;
  background: linear-gradient(to bottom, white, rgb(203, 235, 203));
  background-attachment: fixed;
}
</style>
