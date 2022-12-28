<script>
import ProjectSummary from './ProjectSummary.vue';

export default {
    props: ['projectList'],
    components: { ProjectSummary }
}
</script>

<template>
    <div class="container" :id="('element' + projectList.id)">
        <h2>{{ projectList.title }}</h2>
        <hr />
        <div class="project-summaries">
            <ProjectSummary v-for="project in projectList.projects" :project=project class="project-summary" />
        </div>
    </div>
</template>

<style scoped>
.project-summary:not(:last-child) {
    margin: 3rem;
}
</style>

