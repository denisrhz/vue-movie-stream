<template>
    <div class="flex flex-wrap">
        <MyDropdown v-for="param in filterParams">
            <template #toggler>{{ param.name }}</template>
            <MyDropdownContent>
                <MyDropdownElement v-for="element in param.elements">
                    <input
                    :id="param.type + element.value"
                    :type="param.type"
                    :value="element.value"
                    v-model="param.checked">
                    <label :for="param.type + element.value" class="mx-1">{{ element.name }}</label>
                </MyDropdownElement>
            </MyDropdownContent>
        </MyDropdown>
        <button @click="onClickFilter()" class="px-2 py-1.5 text-sm text-start tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-sm hover:bg-gray-600 focus:outline-none">
            <span class=""><font-awesome-icon :icon="['fas', 'filter']" /></span>
            Filter
        </button>
    </div>
</template>

<script>
import MyDropdown from './UI/dropdown/MyDropdown.vue';
import MyDropdownContent from './UI/dropdown/MyDropdownContent.vue';
import MyDropdownElement from './UI/dropdown/MyDropdownElement.vue';

export default {
    components: { MyDropdown, MyDropdownContent, MyDropdownElement },
    data() {
        return {
            filterParams: {
                genres: { 
                    name: "Жанры", 
                    type: "checkbox", 
                    checked: [],
                    elements: [],
                },
                sort_by: { 
                    name: "Сортировать по", 
                    type: "radio", 
                    checked: [],
                    elements: [
                        { name: "Самые популярные", value: "popularity.desc" },
                        { name: "Бюджет", value: "revenue.desc" },
                        { name: "Самые новые", value: "primary_release.desc" },
                        { name: "Средняя оценка", value: "vote_average.desc" },
                        { name: "Кол-во оценок", value: "vote_count.desc" },
                    ],
                }
            }
        }
    },
    mounted() {
        this.getGenres();
    },
    methods: {
        getGenres() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNiOTBlYmY3ZDE5NmRkNWQyMjRmMzg4MWM4M2JjZCIsInN1YiI6IjY0Y2Q5NzA5NTQ5ZGRhMDExYzI3M2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hREDgRimJl9MjrwuqXNP81ptiRYyIxma3ki19xQL8Y'
                }
            };
            
            fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
            .then(response => response.json())
            .then((response) => {
                response.genres.forEach(genre => {
                    this.filterParams.genres.elements.push({ name: genre.name, value: genre.id });
                });
            }
            )
            .catch(err => console.error(err));
        },
        onClickFilter() {
            const params = {};
            for(let key in this.filterParams) {
                params[key] = this.filterParams[key].checked;
            }
            console.log(params);
            this.$emit("filterchanged", params);
        }
    }
}
</script>

<style scoped>

</style>