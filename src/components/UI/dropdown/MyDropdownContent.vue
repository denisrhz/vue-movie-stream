<template>
    <div v-if="active" class="absolute py-1 bg-gray-700 w-full rounded-sm top-10 z-10">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inject: ['sharedState'],
        computed: {
            active() {
                return this.sharedState.active;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>