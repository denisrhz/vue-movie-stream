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
            <div class="flex-none relative my-auto mx-2">
                <input
                type="search"
                class="block w-64 p-1 text-sm text-gray-600 flex-auto rounded-sm border border-solid border-gray-700 bg-clip-padding px-3 font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-gray-600 focus:text-gray-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :value="searchQuery"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1" />
                <button class="absolute right-2 top-1"><font-awesome-icon class="text-midnight" :icon="['fas', 'search']"/></button>
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