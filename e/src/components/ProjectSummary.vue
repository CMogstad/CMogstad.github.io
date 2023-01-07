<script>
import { getImageFromName } from "./ImageLibrary.vue";

export default {
  props: ["project"],
  methods: {
    getImage() {
      return getImageFromName(this.project.images[0].imageName);
    },
  },
};
</script>

<template>
  <RouterLink :to="{ name: 'Project', params: { id: project.id } }">
    <div class="project-container" :id="'element' + project.id">
      <div class="text">
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <ul v-for="language in project.languages" class="language-list">
          <li>{{ language }}</li>
        </ul>
      </div>
      <div class="image-container">
        <img class="image" :src="getImage()" alt="Screenshot of project" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.project-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #fafafa;
  border-radius: 0.5rem;
  border: 1px solid black;
  border: 1px solid lightgrey;
}

.project-container:hover {
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
}

.text {
  width: 60%;
  margin-right: 1rem;
}

a {
  text-decoration: none;
  color: black;
}

.image-container {
  height: 14rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  background-color: rgb(245, 241, 241);
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.language-list {
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
}

.language-list li {
  float: left;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #a9dfe2;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
}
</style>
