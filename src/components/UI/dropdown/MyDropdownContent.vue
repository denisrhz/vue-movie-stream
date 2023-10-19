<template>
    <div v-if="active" class="absolute overflow-auto max-h-80 grid w-max py-1 bg-midnight rounded-sm top-10 z-10">
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