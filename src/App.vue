<template>
  <div id="app">
    <p class="practice-notice">This is just a test project!</p>
    <h1>Unit testing practice</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/widgets">Widgets</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
p.practice-notice{
  margin: 0;
  width:100%;
  background-color: salmon;
  border-bottom: 1px dashed black;
}
</style>
