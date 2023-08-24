<template>
    <div class="">
        <Breadcrumbs/>
        <iframe class="w-full h-[60vw] max-h-[75vh] mb-4" :src="playerLink" allowfullscreen></iframe>
        <div class="container mx-auto p-4">
            <h1 class="text-3xl">{{ movieDetails.title }}</h1>
            <span class="text-primary">{{ movieDetails.vote_average }}</span> * <span>{{ movieDetails.vote_count }}</span>
            <p class="">{{ movieDetails.overview }}</p>
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';

export default {
    components: { Breadcrumbs },

    data() {
        return {
            movieDetails: {}
        };
    },

    computed: {
        playerLink() {
            return "https://vidsrc.to/embed/movie/"; // + this.$route.params.id
        }
    },

    mounted() {
        this.getMovieDetails();
    },
    
    methods: {
        getMovieDetails() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=ru-RU`, options)
                .then(response => response.json())
                .then(response => this.movieDetails = response)
                .catch(err => console.error(err));
        }
    },
}
</script>

<style scoped>

</style>