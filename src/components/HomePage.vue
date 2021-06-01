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
      <button @click="goTo()"><u>
        Go to First Component programatically</u></button>
    </div>
    <br/>
    <div>
       <button  @click="goToWithParams()"><u>
        Go to Second Component programatically with params</u></button>
    </div>
     <br/>
    <div>
       <button  @click="goToWithProps()"><u>
        Go to Third Component programatically with props</u></button>
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
    goTo: function(){
      this.$router.push('/first');
    },
    goToWithParams: function(){
      this.$router.push({
        name: 'Second', 
        params: {
          id: 2, 
          }
        });
    },
    goToWithProps: function(){
      this.$router.push({
        name: 'Third', 
        params: {
          callerMessage: "Message from Home", 
          callerId: "3", 
          }
        });
    },
  }
};
</script>


