<template>
    <section class="gig-list-header">
        <gig-list-header-container :tag="tag" />
        <gig-list-filter />
    </section>
</template>
        
        <script>
        import gigListHeaderContainer from './gig-list-header-container.vue'
        import gigListFilter from './gig-list-filter.vue'
        export default {
            name: 'gig-list-header',
            data() {
                return {
                    tag: 'Architecture & Interior Design'
        
                }
            },
        
            components: {
                gigListHeaderContainer,
                gigListFilter,
            },
            created() {
            },
            methods: {
            },
            computed: {
            },
        
        }
        </script>