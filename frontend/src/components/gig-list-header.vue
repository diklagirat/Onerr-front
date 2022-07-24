<template>
    <section class="gig-list-header">
        <category-filter />
        <gig-list-header-container :tag="tag" />
        <gig-list-filter />
        <div class="gig-list-sorting"></div>
    </section>
</template>

<script>
import gigListHeaderContainer from './gig-list-header-container.vue'
import categoryFilter from './category-filter.vue'
import gigListFilter from './gig-list-filter.vue'
export default {
    name: 'gig-list-header',
    data() {
        return {
            tag: 'Architecture & Interior Design'//Only for test
        }
    },

    components: {
        gigListHeaderContainer,
        categoryFilter,
        gigListFilter,
    },
    methods: {
    },
    computed: {
    }
}
</script>