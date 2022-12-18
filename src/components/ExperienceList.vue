<script>
export default {
    props: ['experience']
}
</script>

<template>
    <main>
        <h3>{{ experience.title }}</h3>
        <h4>{{ experience.company }} | {{ experience.start }} - {{ experience.end }}</h4>
        <p>{{ experience.description }}</p>
        <div v-for="list in experience.lists">
            <h5>{{ list.category }}</h5>
            <ul v-for="item in list.items">
                <li>{{ item }}</li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
main {
    margin-top: 1rem;
}

h3 {
    margin: 0;
    margin-top: 0.5;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

h4 {
    margin: 0;
}

h5 {
    margin-bottom: 0.5rem;
}

ul {
    margin: 0.5rem;
}
</style>