<script>
export default {
    props: ['skill']
}
</script>

<template>
    <main>
        <h4>{{ skill.category }}</h4>

        <ul v-for="listItem in skill.listItems" class="skills-ul">
            <li class="skill-li">{{ listItem.item }}
                <span class="rating-icons">
                    <span class="rating-icon" v-for="index in listItem.rating" :key="index">
                        <font-awesome-icon icon="fa-solid fa-circle" />
                    </span>
                    <span class="rating-icon" v-for="index in (5 - listItem.rating)" :key="index">
                        <font-awesome-icon icon="fa-regular fa-circle" />
                    </span>
                </span>
            </li>
        </ul>
    </main>
</template>

<style scoped>
main {
    margin-bottom: 3rem;
}

h4 {
    margin: 0;
}

.skills-ul {
    padding: 0;
}

.skill-li {
    display: flex;
    justify-content: space-between;
    margin: 0;
}

.rating-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-left: 1rem;
}

.rating-icon {
    margin-right: 0.1rem;
    font-size: 0.8rem;
    color: #51b6bb;
}
</style>