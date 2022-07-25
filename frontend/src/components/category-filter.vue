<template>
    <section class="category-filter">
        <div class="categories-menu-wrapper main-layout ">
            <nav class="categories-menu-package default">
                <ul class="categories flex space-between clean-list">
                    <li v-for="(tag, idx) in tags" :key="idx" @click="setTag(tag)">
                        <router-link :to="path(tag)">{{ tag }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'category-filter',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        path(tag) {
            return { path: '/explore', query: { category: tag } }
        },
        setTag(tag) {
            var filterBy = { ...this.$store.getters.getfilterBy }
            filterBy.byTag = tag
            this.$store.commit({ type: 'setFilterBy', filterBy })
        }
    },
    computed: {
        tags() {
            return this.$store.getters.getAllTags
        }
    }
}

</script>
