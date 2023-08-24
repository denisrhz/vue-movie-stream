<template>
    <div class="flex">
        <MyDropdown>
            <template #toggler>toggle</template>
            <MyDropdownContent>
                <MyDropdownElement>
                    <input id="checkbox1" type="checkbox" class="">
                    <label for="checkbox1" class="mx-1">Bareare</label>
                </MyDropdownElement>
            </MyDropdownContent>
        </MyDropdown>
    </div>
</template>

<script>
import MyDropdown from './UI/dropdown/MyDropdown.vue';
import MyDropdownContent from './UI/dropdown/MyDropdownContent.vue';
import MyDropdownElement from './UI/dropdown/MyDropdownElement.vue';

    export default {
        components: { MyDropdown, MyDropdownContent, MyDropdownElement }
    }
</script>

<style scoped>

</style>