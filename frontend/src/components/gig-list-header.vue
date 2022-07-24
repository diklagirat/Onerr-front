<template>
    <section class="gig-list-header">
        <div class="category-filter">
        </div>
        <gig-list-header-container :tag="tag" />
        <div class="gig-list-filter"></div>
        <div class="gig-list-sorting"></div>
    </section>
</template>

<script>
import gigListHeaderContainer from './gig-list-header-container.vue'
export default {
    name: 'gig-list-header',
    data() {
        return {
            tag: 'Architecture & Interior Design'//Only for test
        }
    },

    components: {
        gigListHeaderContainer
    },
    methods: {
    },
    computed: {
    }
}
</script>