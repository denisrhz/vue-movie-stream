<template>
    <div v-if="active" class="absolute grid w-max py-1 bg-gray-700 rounded-sm top-10 z-10">
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