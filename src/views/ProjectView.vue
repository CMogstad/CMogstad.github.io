<script>
import projectListsJSON from "../data/projectLists.json";
import ImageGallery from "../components/ImageGallery.vue";

export default {
  components: { ImageGallery },
  data() {
    return {
      projectListsJSON,
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    project() {
      for (const projectLists of this.projectListsJSON) {
        for (const project of projectLists.projects) {
          if (parseInt(project.id) === parseInt(this.projectId)) {
            return project;
          }
        }
      }
    },
  },
};
</script>

<template>
  <RouterLink :to="{ name: 'Projects' }">&#10094; Back</RouterLink>
  <header>
    <h1>{{ project.title }}</h1>
    <hr />
  </header>
  <section class="page-content">
    <div class="description-image">
      <div class="github">
        <p v-if="project.githubUrl">
          <a :href="project.githubUrl">{{ project.githubUrl }}</a>
        </p>
        <p v-else>GitHub Repository is not available</p>
      </div>
      <h3>Description</h3>
      <p>{{ project.description }}</p>
      <h3>Languages & Framework</h3>
      <ul v-for="language in project.languages" class="language-list">
        <li>{{ language }}</li>
      </ul>
    </div>
    <aside class="image-gallery">
      <ImageGallery :images="project.images" />
    </aside>
  </section>
</template>

<style scoped>
.button {
  cursor: pointer;
}

.page-content {
  display: flex;
  justify-content: space-between;
}

.description-image {
  margin-right: 1rem;
}

.github {
  background-color: #a9dfe2;
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  overflow-wrap: break-word;
  word-break: break-all;
  word-wrap: break-word;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: lightslategray;
}

.language-list {
  padding-left: 1.2rem;
}

@media (max-width: 1200px) {
  .page-content {
    flex-direction: column;
  }

  .description-image {
    margin-right: 0;
  }

  .image-gallery {
    margin-top: 0.5rem;
    align-self: center;
  }

  :deep(.displayed-image-container) {
    width: auto;
    height: auto;
  }
}

@media (max-width: 800px) {
  .content {
    padding: 1rem;
  }
}
</style>
