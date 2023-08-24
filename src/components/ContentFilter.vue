<template>
    <div class="flex flex-wrap">
        <div>
            <input
            type="search"
            class="block w-64 p-1 text-sm text-gray-600 flex-auto rounded-sm border border-solid border-gray-700 bg-clip-padding px-3 font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-gray-600 focus:text-gray-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            :value="searchQuery"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1" />
        </div>
        <MyDropdown>
            <template #toggler>toggle</template>
            <MyDropdownContent>
                <MyDropdownElement>
                    <input id="checkbox1" type="checkbox" class="">
                    <label for="checkbox1" class="mx-1">Bareare</label>
                </MyDropdownElement>
            </MyDropdownContent>
        </MyDropdown>
        <button class="px-2 py-1.5 text-sm text-start tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-sm hover:bg-gray-600 focus:outline-none">
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
            searchQuery: "",
            FilterParams: [
                { name: "", type: "", items: [
                    { name: "item1", isActive: false },
                    { name: "item2", isActive: false }
                ] }
            ],
        }
    }
}
</script>

<style scoped>

</style>