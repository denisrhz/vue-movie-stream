<template>
    <div>
        <nav class="flex justify-center my-5">
            <ul class="flex">
                <li>
                    <button 
                    @click="onClickPreviousPage" 
                    :disabled="isInFirstPage" 
                    class="bg-gray-700 hover:bg-gray-600 mx-1 flex h-9 w-9 items-center justify-center text-md tracking-wide capitalize transition-colors duration-300 transform rounded-full focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20"
                    >
                        <font-awesome-icon :icon="['fas', 'angle-left']" />
                    </button>
                </li>
                <li v-for="page in pages" :key="page.name">
                    <button
                    type="button"
                    @click="onClickPage(page.name)" 
                    :disabled="page.isDisabled" 
                    :class="{'bg-purple-600 hover:bg-purple-500': isPageActive(page.name)}"
                    class="bg-gray-700 hover:bg-gray-600 mx-1 flex h-9 w-9 items-center justify-center text-md tracking-wide capitalize transition-colors duration-300 transform rounded-full focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20"
                    >{{ page.name }}</button>
                </li>
                <li>
                    <button 
                    @click="onClickNextPage" 
                    :disabled="isInLastPage" 
                    class="bg-gray-700 hover:bg-gray-600 mx-1 flex h-9 w-9 items-center justify-center text-md tracking-wide capitalize transition-colors duration-300 transform rounded-full focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-20" aria-label="Next">
                        <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 7
        },
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    computed: {
        startPage() {
            const halfVisibleButtons = Math.floor(this.maxVisibleButtons / 2);

            if (this.currentPage < halfVisibleButtons + 1) {
                return 1;
            }
            if (this.currentPage > this.totalPages - halfVisibleButtons) {
                return this.totalPages - this.maxVisibleButtons + 1;
            }
            return this.currentPage - halfVisibleButtons;
        },
        pages() {
            const range = [];
            
            for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }
            
            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1);
        },
        isPageActive(page) {
            return this.currentPage === page;
        }
    }
}
</script>

<style scoped>

</style>