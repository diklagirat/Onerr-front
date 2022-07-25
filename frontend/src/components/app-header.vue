<template>
    <section class="app-header" :class="{ 'in-homepage': isHomepage }">
        <div class="main-header-container">
            <header class="main-header main-layout flex">
                <div class="logo-and-filter flex">
                    <app-logo :isFooter="false" />
                    <gig-filter :isHero="false" />
                </div>
                <app-nav />
            </header>
        </div>
        <div>
            <category-filter />
        </div>
    </section>
</template>

<script>

import appLogo from './app-logo.vue'
import gigFilter from './gig-filter.vue'
import categoryFilter from '../components/category-filter.vue'
import appNav from './app-nav.vue'

export default {
    name: 'app-header',
    props: {
        isHomepage: Boolean
    },
    components: {
        appLogo,
        gigFilter,
        appNav,
        categoryFilter
    },
    created() {
        // console.log('this.isHomepage', this.isHomepage)
    },
    methods: {
    }
}
</script>
