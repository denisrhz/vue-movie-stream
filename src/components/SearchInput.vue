<template>
    <div class="flex-none relative my-auto mx-2">
        <input
        type="search"
        :value="modelValue"
        @input="this.$emit('update:modelValue', $event.target.value);"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon1"
        class="block w-64 p-1 text-sm text-gray-600 flex-auto rounded-sm border border-solid border-gray-700 bg-clip-padding px-3 font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-gray-600 focus:text-gray-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none" />
        <button class="absolute right-2 top-1"><font-awesome-icon class="text-midnight" :icon="['fas', 'search']"/></button>
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>

</style>