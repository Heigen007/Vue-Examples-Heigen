<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/examples">Examples</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default({
  name: 'App'
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #08bb70;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.title{
    font-size: 2rem;
    color: #42b983;
    margin: 5px;
    text-align: center;
}
</style>
