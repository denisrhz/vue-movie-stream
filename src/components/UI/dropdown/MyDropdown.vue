<template>
    <div @click="toggle" v-click-away="away" class="relative mx-2">
        <button class="w-28 px-3 py-1.5 text-sm text-start tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-sm hover:bg-gray-600 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20">
            <slot name="toggler"></slot>
            <span class="float-right"><font-awesome-icon :class="{'rotate-180': sharedState.active}" :icon="['fas', 'angle-down']"/></span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
import { mixin as VueClickAway } from 'vue3-click-away';

export default {
    mixins: [VueClickAway],
    data() {
        return {
            sharedState: {
                active: false
            }
        }
    },
    provide() {
        return {
            sharedState: this.sharedState
        }
    },
    methods: {
        toggle() {
            this.sharedState.active = !this.sharedState.active;
        },
        away() {
            this.sharedState.active = false;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>