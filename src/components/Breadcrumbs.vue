<template>
    <div>
        <ol class="flex items-center gap-4 rounded-md px-4 py-3 shadow-md">
            <li class="inline-flex">
                <div class="flex items-center gap-2 font-medium opacity-80 transition-colors duration-300 hover:text-primary">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <a href="#">Главная</a>
                </div>
            </li>
            <li class="inline-flex">
                <div class="flex items-center gap-2 font-medium opacity-80 transition-colors duration-300 hover:text-primary">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    <a href="">Фильмы</a>
                </div>
            </li>
            <li class="inline-flex">
                <div class="flex items-center gap-2 font-medium opacity-80 transition-colors duration-300 hover:text-primary">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    <a href="">Название</a>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>