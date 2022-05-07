<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <router-link  to="/" class="navbar-brand">HOME</router-link>

    <div>
      <ul class="navbar-nav me-auto mb-2 mb-md-0">

        <li class="nav-item">
          <router-link to="/Login" class="nav-link">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/register" class="nav-link">REGISTER</router-link>
        </li>
      </ul>
    </div>
  </div>
    </nav>
</template>

<script>
export default {
    name:"VNav"
}
</script>