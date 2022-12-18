<script>
export default {
  props: ["projectLists"],
  methods: {
    scrollTo(url) {
      if (url) this.$scrollTo("#element" + url.toString());
    },
  },
};
</script>

<template>
  <div class="menu-container">
    <div class="links">
      <ul v-for="projectList in projectLists" class="menu-lists">
        <div @click="scrollTo(projectList.id)">
          <li class="list-title-li">{{ projectList.title }}</li>
        </div>
        <ul v-for="project in projectList.projects" class="menu-projects">
          <div @click="scrollTo(project.id)">
            <li class="project-title-li">{{ project.title }}</li>
          </div>
        </ul>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  background-color: #d1d5fa;
  padding: 1rem;
  padding-top: 0;
  border-radius: 0.5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.links {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

ul {
  padding: 0;
  list-style-type: none;
}

.menu-lists {
  margin-bottom: 2rem;
}

.list-title-li {
  font-weight: bold;
  margin-bottom: 0.2rem;
  padding: 0.5rem;
  font-size: 1.1rem;
}

.project-title-li {
  margin-bottom: 0.2rem;
  padding: 0.5rem;
}

.menu-projects a {
  text-decoration: none;
  color: black;
}

.project-title-li:hover,
.list-title-li:hover {
  background-color: #e5e7fa;
  border-radius: 0.2rem;
  cursor: pointer;
}
</style>
