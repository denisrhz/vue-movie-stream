<template>
    <div class="w-1/2 max-w-[180px] mb-4">
        <div class="flex flex-col gap-1">
            <RouterLink :to="`movies/${movie.id}`" class="bg-purple-500">
                <img :src="posterPath" class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
            </RouterLink>

            <RouterLink :to="`movies/${movie.id}`" class="hover:text-purple-500 text-gray-200 font-semibold">{{ movie.title }}</RouterLink>
            
            <a href="#" class="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 78.4K viewers </a>
            
            <div class="flex flex-row flex-wrap gap-2">
                <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
                <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
            </div>      
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    computed: {
        posterPath() {
            return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    components: { RouterLink }
}
</script>

<style scoped>

</style>