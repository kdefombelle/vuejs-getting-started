<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <il class="nav-item">
            <router-link :to="{name: 'Home'}" exact>
              <!-- https://www.color-hex.com/color-palette/109723 -->
              <img class="logo" src="./assets/nice_logo_pink.png"/>Home</router-link> | 
          </il>
          <il class="nav-item">
            <router-link :to="{name: 'First'}" exact>FirstComponent</router-link> | 
          </il>
          <il class="nav-item">
            <router-link :to="{name: 'Second', params: {id:2}}" exact>SecondComponent</router-link> | 
          </il>
          <il class="nav-item">
            <router-link :to="{name: 'Third', params: {callerMessage:'Message from top menu', callerId:3}}" exact>ThirdComponent</router-link>
          </il>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
};
</script>

/* global styles, usually only in App.vue only */
<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin:0 auto;
}
.router-link-active {
  color: #FF425F;
}
</style>
