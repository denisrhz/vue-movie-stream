<template>
    <div>
        <div v-if="active" class="absolute overflow-auto grid w-full py-1 bg-gray-700 rounded-sm top-10 z-10">
            <slot></slot>
        </div>
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