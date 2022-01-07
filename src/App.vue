<template>
  <div id="app">

    <div id="nav">
      <router-link to="/phq">PHQ</router-link> &nbsp;
      <router-link to="/dass">DASS</router-link> &nbsp;
      <router-link to="/cbi">CBI</router-link> &nbsp;
      <router-link to="/whodas_1">WHODAS</router-link> &nbsp;
    </div>

    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  text-align: center;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  font-weight: bold;
  color: #42b983;
}
.router-link-exact-active {
    color: #42b983;
}
@media print{
    #nav{
        display: none;
    }
}


</style>
