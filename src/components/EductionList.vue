<script>
export default {
    props: ['education']
}
</script>

<template>
    <main>
        <h3>{{ education.degree }}</h3>
        <h4 class="school-name">{{ education.school }}, {{ education.country }}</h4>
        <p class="school-period">{{ education.start }} – {{ education.end }}</p>
    </main>
</template>

<style scoped>
main {
    margin-top: 1.5rem;
}

h3 {
    margin: 0;
    margin-top: 0.5;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

h4 {
    margin-bottom: 0.5rem;
}

.school-name {
    margin: 0;
    margin-bottom: 0.2rem;
}

.school-period {
    margin: 0;
}
</style>
