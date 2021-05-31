<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <il class="nav-item">
            <router-link :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/logo.png"/>Home | </router-link>
          </il>
          <il class="nav-item">
            <router-link :to="{name: 'First'}" exact>FirstComponent | </router-link>
          </il>
          <il class="nav-item">
            <router-link :to="{name: 'Second', params: {id:9}}" exact>SecondComponent</router-link>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin:0 auto;
  width: 1024px;
}
.router-link-active {
  color: orchid;
}
</style>
