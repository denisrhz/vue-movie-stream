<template>
    <Transition>
        <div v-if="active" @click="close" class="fixed h-screen w-64 p-3 bg-midnight z-40">
            <button 
            class="w-full px-3.5 py-1.5 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-night rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-neutral-600 focus:outline-none">
                <font-awesome-icon :icon="['fas', 'arrow-left']" size="sm" />
                Back
            </button>
        </div>
    </Transition>
</template>

<script>

    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            close() {
                this.$emit('sidebarclose');
            }
        }
    }
</script>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-transform ease-in-out duration-300;
}

.v-enter-from,
.v-leave-to {
    @apply -translate-x-64;
}
</style>