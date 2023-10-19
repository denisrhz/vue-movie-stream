<template>
    <header class="bg-night drop-shadow-md">
        <div class="flex p-2">
            <div class="flex-none my-auto">
                <button class="p-1">
                    <font-awesome-icon :icon="['fas', 'bars']" size="lg" class=""/>
                </button>
            </div>
            <div class="flex-none my-auto mx-3">
                <img src="https://s2.bunnycdn.ru/assets/sites/zoro/logo.png" class="w-24" alt="logo">
            </div>
            <div class="grow"></div>
            <HeaderSearch v-click-away="away" v-model="searchQuery">
                <HeaderSearchSuggestion v-if="suggestionIsActive">
                    <HeaderSearchSuggestionElement v-for="movie of sortedSearchResults" :key="movie.id">
                        {{ movie.title }}
                    </HeaderSearchSuggestionElement>
                </HeaderSearchSuggestion>
            </HeaderSearch>
            <div class="flex-none my-auto mx-2 justify-self-end">
                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20">Login</button>
            </div>
        </div>
    </header>
</template>

<script>
import debounce from 'lodash.debounce';
import { mixin as VueClickAway } from 'vue3-click-away';

import HeaderSearch from './HeaderSearch.vue';
import HeaderSearchSuggestion from './HeaderSearchSuggestion.vue';
import HeaderSearchSuggestionElement from './HeaderSearchSuggestionElement.vue';

export default {
    mixins: [VueClickAway],
    components: {
        HeaderSearch,
        HeaderSearchSuggestion,
        HeaderSearchSuggestionElement
    },
    data() {
        return {
            searchQuery: "",
            searchResults: [],
        }
    },
    computed: {
        suggestionIsActive() {
            return !!this.searchResults.length
        },
        sortedSearchResults() {
            return this.searchResults.slice(0, 10)
        }
    },
    watch: {
        searchQuery(...args) {
            this.debouncedWatch(...args);
        }
    },
    created() {
        this.debouncedWatch = debounce((newSearchQuery, oldSearchQuery) => {
            console.log(newSearchQuery)
            this.getSearchResults();
        }, 600);
    },
    methods: {
        away() {
            this.searchResults = false;
        },
        getSearchResults() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            fetch(`https://api.themoviedb.org/3/search/movie?query=${this.searchQuery}&include_adult=false&language=ru-RU&page=1`, options)
            .then(response => response.json())
            .then(response => this.searchResults = response.results)
            .catch(err => console.error(err));
        }
    }
}
</script>

<style lang="scss" scoped>

</style>