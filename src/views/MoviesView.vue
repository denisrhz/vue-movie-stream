<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">
            <div class="">
                <h1 class="my-3 text-2xl text-primary">Смотреть сериалы онлайн</h1>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error ut ducimus voluptate fugit rem dolorem cupiditate architecto vitae soluta a, odio neque? Fugiat, nobis delectus? Reprehenderit impedit modi obcaecati!</p>
                <ContentFilter/>
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
            totalPages: 1
        }
    },
    mounted() {
        this.getMovies()
    },
    methods: {
        getMovies() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            this.isMoviesLoading = true;
            fetch(`https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=${this.currentPage}`, options)
            .then(response => response.json())
            .finally(() => this.isMoviesLoading = false)
            .then(response => {
                this.movies = response.results;
                this.totalPages = response.total_pages;
            })
            .catch(err => console.error(err));
        },
        onPageChange(page) {
            this.currentPage = page;
            this.getMovies();
        }
    }
}
</script>

<style scoped>

</style>