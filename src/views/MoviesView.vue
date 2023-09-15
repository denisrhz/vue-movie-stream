<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">
            <div class="">
                <h1 class="my-3 text-2xl text-primary">Смотреть сериалы онлайн</h1>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error ut ducimus voluptate fugit rem dolorem cupiditate architecto vitae soluta a, odio neque? Fugiat, nobis delectus? Reprehenderit impedit modi obcaecati!</p>
                <ContentFilter
                @filterchanged="onFilterChange"
                />
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
            <div class="">
                <h3 class="my-3 text-2xl text-primary">Лучшие</h3>
                <ContentList/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import ContentFilter from '../components/ContentFilter.vue';
import ContentGrid from '../components/ContentGrid.vue';
import ContentList from '../components/ContentList.vue';
import Pagination from '../components/Pagination.vue';

export default {
    components: { ContentFilter, ContentGrid, ContentList, Pagination },
    data() {
        return {
            movies: [],
            isMoviesLoading: false,
            currentPage: 1,
            totalPages: 1,
            filterParams: {}
        }
    },
    mounted() {
        this.getMovies()
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