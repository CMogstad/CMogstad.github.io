<script>
export default {
  props: ["contact"],
};
</script>

<template>
  <main>
    <span class="icon-container">
      <font-awesome-icon :icon="contact.icon" class="icon" />
    </span>
    <span class="link-container">
      <a :href="contact.link" target="_blank" class="link">{{
        contact.text
      }}</a>
    </span>
  </main>
</template>

<style scoped>
main {
  margin: 0;
}
.icon {
  margin-right: 0.5rem;
  display: inline;
}

.link-container {
  overflow-wrap: break-word;
  word-break: break-all;
  word-wrap: break-word;
}

.link:link {
  text-decoration: none;
  color: black;
}

.link:visited {
  text-decoration: none;
  color: black;
}

.link:hover {
  text-decoration: none;
  color: #4e64be;
}
</style>
