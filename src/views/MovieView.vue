<template>
    <Breadcrumbs/>
    <iframe 
    :src="playerLink" allowfullscreen
    class="w-full h-[60vw] max-h-[75vh] mb-4" 
    >
    </iframe>
    <div class="container mx-auto p-3">
        <div class="flex">
            <div class="flex-none w-64 shadow-lg">
                <img v-if="movieDetails.poster_path" :src="posterPath" alt="" class="">
            </div>
            <div class="ml-5 p-2">
                <h1 class="text-4xl">{{ movieDetails.title }}</h1>
                <div class="my-3">
                    <span 
                    class="w-full mx-1 px-2 py-1.5 text-sm tracking-wide text-white bg-purple-600 rounded-md">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    {{ movieDetails.vote_average?.toFixed(1) }}
                    </span>
                    <span 
                    class="w-full mx-1 px-2 py-1.5 text-sm tracking-wide text-white rounded-md">
                    {{ movieDetails.release_date?.slice(0, 4) }}
                    </span>
                    <span 
                    class="w-full mx-1 px-2 py-1.5 text-sm tracking-wide text-white rounded-md">
                    {{ formatRuntime }}
                    </span>
                </div>
                <p v-if="movieDetails.tagline" class="text-primary">{{ movieDetails.tagline }}</p>
                <p class="my-2 text-gray-300">{{ movieDetails.overview }}</p>
                <div class="flex gap-4">
                    <div class="flex flex-col">
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Оригинальное название:</span>
                            <span class="">{{ movieDetails.original_title || "-" }}</span>
                        </div>
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Жанры:</span>
                            <span class="">{{ null || "-" }}</span>
                        </div>
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Страны:</span>
                            <span class="">{{ null || "-" }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Продолжительность:</span>
                            <span class="">{{ formatRuntime || "-" }}</span>
                        </div>
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Дата выхода:</span>
                            <span class="">{{ movieDetails.release_date || "-" }}</span>
                        </div>
                        <div class="flex flex-col mb-3">
                            <span class="text-gray-500 mb-1">Компании:</span>
                            <span class="">{{ null || "-" }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';

export default {
    components: { Breadcrumbs },
    
    data() {
        return {
            movieDetails: {},
            movieCollection: {}
        };
    },
    
    computed: {
        playerLink() {
            return "https://vidsrc.to/embed/movie/" // + this.$route.params.id
        },
        posterPath() {
            return 'https://image.tmdb.org/t/p/w500/' + this.movieDetails.poster_path
        },
        formatRuntime() {
            let mins = this.movieDetails.runtime;
            return `${Math.trunc(mins/60)} ч ${mins % 60} мин`;
        }
    },
    
    mounted() {
        this.getMovieDetails();
        // this.getMovieCollection();
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
        },
        getMovieCollection() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            fetch(`https://api.themoviedb.org/3/collection/${this.movieDetails.belongs_to_collection.id}?language=ru-RU`, options)
            .then(response => response.json())
            .then(response => this.movieCollection = response)
            .catch(err => console.error(err));
            
        }
    },
}
</script>

<style scoped>

</style>