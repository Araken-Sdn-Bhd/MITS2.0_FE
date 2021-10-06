<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto stretch" justified>
            <router-link to="/risk-factors" class="nav-item nav-link my-auto">Risk Factors</router-link>
            <router-link to="/protective-factors" class="nav-item nav-link my-auto">Protective Factors</router-link>
            <router-link to="/self-harm-act-and-suicidal-intent" class="nav-item nav-link my-auto">The Self-harm Act and Suicidal Intent</router-link>
            <router-link to="/suicide-risk" class="nav-item nav-link my-auto">Suicide Risk</router-link>
            <router-link to="/hospital-management" class="nav-item nav-link my-auto">Hospital Management</router-link>
            <router-link to="/source-data-producer" class="nav-item nav-link my-auto">Source Data Producer</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


  </div>
</template>

<script>

export default {

}
</script>

<style>
/* .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .nav-link.active{
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
} */
.stretch{
  flex-grow: 1;
}
/* .navbar-expand-lg .navbar-nav .nav-link{
  height: auto;
} */
/* .nav-justified > .nav-link, .nav-justified .nav-item{
  flex-basis: 0;
} */
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-exact-active {
  color: whitesmoke !important;
  background: crimson;
  border-radius: .5rem;
}
</style>
