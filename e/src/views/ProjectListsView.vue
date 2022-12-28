<script>
import ProjectList from "../components/ProjectList.vue";
import ProjectMenu from "../components/ProjectMenu.vue";
import data from "../data/projectLists.json";

export default {
  components: { ProjectList, ProjectMenu },
  data() {
    return {
      projectLists: data,
    };
  },
};
</script>

<template>
  <main>
    <aside class="menu">
      <ProjectMenu :projectLists="projectLists" />
    </aside>
    <div class="project-lists">
      <ProjectList
        v-for="projectList in projectLists"
        :projectList="projectList"
        class="project-list"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}

.menu {
  margin-right: 2rem;
  width: 35%;
}

.project-list:not(:last-child) {
  margin-bottom: 3rem;
}

@media (max-width: 900px) {
  main {
    flex-direction: column;
  }
  .menu {
    width: 100%;
  }

  :deep(.menu-lists) {
    margin: 0;
  }

  :deep(.links) {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (max-width: 600px) {
  .menu {
    display: none;
  }

  :deep(.project-container) {
    flex-direction: column;
  }

  :deep(.text) {
    width: auto;
    margin-bottom: 1rem;
  }

  :deep(.image-container) {
    align-self: center;
    width: auto;
    max-height: auto;
    margin-bottom: 1rem;
    background-color: white;
  }
}
</style>
