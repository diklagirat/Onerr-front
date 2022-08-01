<template>
    <section class="gig-list-header">
        <gig-list-header-container />
        <gig-list-filter />
        <div class="services-available">{{ services }} services available </div>
    </section>
</template>
        
        <script>
        import gigListHeaderContainer from './gig-list-header-container.vue'
        import gigListFilter from './gig-list-filter.vue'
        export default {
            name: 'gig-list-header',
            props: {
                gigs: Array,
            },
            data() {
                return {
                    // tag: 'Architecture & Interior Design'
        
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
                services() {
                    return this.gigs.length
                }
            },
        
        }
        </script>