<template>
    <section class="app-header">
        <header class="main-header main-layout">
            <app-logo />
            <!--@click="moveToHomepage" -->
            <gig-filter @setFilter="setFilter" />
            <app-nav />
        </header>
    </section>
</template>

<script>

import appLogo from './app-logo.vue'
import gigFilter from './gig-filter.vue'
import appNav from './app-nav.vue'

export default {
    name: 'app-header',
    components: {
        appLogo,
        gigFilter,
        appNav
    },
    methods: {
        setFilter(filterBy) {
            console.log('filter inside header', filterBy)
            this.$emit('setFilter', filterBy)
        },
        // moveToHomepage() {
        //     this.router.push('/')
        // }
    }
}
</script>
