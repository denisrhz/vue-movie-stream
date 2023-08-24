<template>
    <header class="bg-midnight drop-shadow-md">
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
            <div class="flex-none my-auto mx-2">
                <button class="p-1"><font-awesome-icon :icon="['fas', 'search']"/></button>
            </div>
            <div class="flex-none my-auto mx-2 justify-self-end">
                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20">Login</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>