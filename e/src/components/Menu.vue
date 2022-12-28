<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Resume", router: "Resume" },
        { title: "Projects", router: "Projects" },
        { title: "About Me", router: "AboutMe" },
      ],
    };
  },
};
</script>

<template>
  <main class="menu">
    <section class="menu-items">
      <RouterLink
        v-for="menuItem in menuItems"
        :to="{ name: menuItem.router }"
        class="menu-item"
        >{{ menuItem.title }}
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.menu {
  height: 20%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
}

.menu-items {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.menu-item:link {
  text-decoration: none;
  color: #4e64be;
  font-size: 1.5rem;
}

.menu-item:link:not(:last-child) {
  margin-right: 2rem;
}

.menu-item:visited {
  color: #4e64be;
}

.menu-item:hover {
  color: #7c95f8;
}

.menu-item:active {
  color: #4e64be;
}
</style>
