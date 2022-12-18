<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <main class="main">
    <header>
      <Menu></Menu>
    </header>

    <div class="content">
      <RouterView />
    </div>
    <div class="copyright">© Camilla Mogstad</div>
  </main>
</template>

<style>
.main {
  box-sizing: border-box;
  width: 80vw;
  max-width: 1000px;
  margin: auto;
  padding: 0;
  padding-bottom: 1rem;
}

.content {
  box-sizing: border-box;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1vw 1.5vw;
  font-size: 1rem;
  padding: 2rem;
  min-height: 80vh;
}

.copyright {
  margin-top: 1rem;
  margin-left: 0.5rem;
  color: gray;
}

@media (max-width: 1200px) {
  .main {
    width: 96vw;
    padding-bottom: 2rem;
  }
}

@media (max-width: 800px) {
  .content {
    padding: 1.5rem;
  }
}

@media (max-width: 400px) {
  .content {
    padding-top: 1rem;
    padding: 1rem;
  }
}
</style>
