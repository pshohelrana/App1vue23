<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavDrawer from './views/layout/navdrawer.vue'
</script>
<style></style>
<template>
  <div class="container-fluid" style="position: relative;display: flex;">

    <NavDrawer />

    <div style="position: relative;width:calc(100%)">
      <nav style="width: 100%;" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->

          <a class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
            href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a></li>
            </ul>
          </div>

        </div>


      </nav>
      <div class="container">
        <RouterView />
      </div>

    </div>

  </div>


</template>
