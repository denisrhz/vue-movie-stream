<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">
            <div class="m-3">
                <h1 class="mb-3 text-primary text-3xl">Смотреть сериалы онлайн</h1>
                <ContentFilter
                @filterchanged="onFilterChange"
                class="ml-2"/>
                <ContentGrid v-if="!isMoviesLoading" :movies="movies"/>
                <div v-else>
                    <h1 class="text-red-600">Loading...</h1>
                </div>
                <Pagination 
                :currentPage="currentPage" 
                :totalPages="totalPages"
                @pagechanged="onPageChange"
                />
            </div>
            <div class="m-3">
                <h3 class="mb-3 text-3xl text-primary">Лучшие</h3>
                <ContentList class="bg-midnight p-3 shadow-lg">
                    <ContentListElement v-for="movie of NowPlayingMovies" :key="movie.id" :movie="movie" class="min-w-[280px]"/>
                </ContentList>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import ContentFilter from '../components/ContentFilter.vue';
import ContentGrid from '../components/ContentGrid.vue';
import ContentList from '../components/ContentList.vue';
import ContentListElement from '../components/ContentListElement.vue';
import Pagination from '../components/Pagination.vue';

export default {
    components: { 
        ContentFilter,
        ContentGrid,
        ContentList,
        ContentListElement,
        Pagination 
    },
    data() {
        return {
            movies: [],
            NowPlayingMovies: [],
            isMoviesLoading: false,
            currentPage: 1,
            totalPages: 1,
            filterParams: {}
        }
    },
    mounted() {
        this.getMovies()
        this.getNowPlayingMovies();
    },
    methods: {
        getMovies() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/movie',
                params: {
                    include_adult: 'false',
                    include_video: 'false',
                    language: 'ru-RU',
                    page: this.currentPage,
                    sort_by: this.filterParams.sort_by,
                    // 'vote_average.gte': '',
                    with_origin_country: this.filterParams?.countries?.join("|"),
                    with_genres: this.filterParams?.genres?.join("|"),
                    ...(this.filterParams.primary_release_dates) && {'primary_release_date.gte': this.filterParams.primary_release_dates?.gte},
                    ...(this.filterParams.primary_release_dates) && {'primary_release_date.lte': this.filterParams.primary_release_dates?.lte},
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            this.isMoviesLoading = true;
            
            axios.request(options)
            .then((response) => {
                this.movies = response.data.results;
                this.totalPages = response.data.total_pages;
            })
            .finally(() => this.isMoviesLoading = false)
            .catch((error) => console.error(error));
        },
        getNowPlayingMovies() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing',
                params: {language: 'ru-RU', page: '1'},
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            axios.request(options)
            .then((response) => {
                this.NowPlayingMovies = response.data.results;
            })
            .catch((error) => console.error(error));
        },
        onPageChange(page) {
            this.currentPage = page;
            this.getMovies();
        },
        onFilterChange(params) {
            this.filterParams = params;
            this.getMovies();
        }
    }
}
</script>

<style scoped>

</style>