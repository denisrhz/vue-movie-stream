<template>
    <RouterLink :to="`movies/${movie.id}`" class="flex items-start p-1 mb-1">
        <div class="flex-none w-2/6">
            <img class="w-max shadow-sm" :src="posterPath" alt="">
        </div>
        <div class="ml-4">
            <h2 class="font-semibold whitespace-pre-wrap">{{ movie.title }}</h2>
            <p class="mt-1 text-sm text-gray-300">
                <font-awesome-icon :icon="['fas', 'star']" size="sm"/>
                {{ movie.vote_average.toFixed(1) }} &bull;
                {{ movie.release_date.slice(0, 4) }}
            </p>
        </div>
    </RouterLink>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    computed: {
        posterPath() {
            return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
        }
    }
}
</script>

<style scoped>

</style>