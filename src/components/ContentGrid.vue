<template>
    <div class="my-3">
        <div class="flex flex-wrap justify-evenly gap-1">
            <ContentGridElement v-for="movie in movies" :key="movie.id" :movie="movie"/>
        </div>
    </div>
</template>

<script>
import ContentGridElement from './ContentGridElement.vue';

export default {
    components: { ContentGridElement },
    props: {
        movies: {
            type: Array,
            required: true
        },
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>