<template>
    <section class="app-header" :class="{ 'in-homepage': isHomepage }">
        <div class="main-header-container">
            <header class="main-header main-layout flex">
                <div class="logo-and-filter flex">
                    <home /> 
                    <!-- TODO: delete home component and test file  -->
                    <app-logo :isFooter="false" />
                    <gig-filter />
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

import home from '../../../test.vue'
import appLogo from './app-logo.vue'
import gigFilter from './gig-filter.vue'
import categoryFilter from '../components/category-filter.vue'
import appNav from './app-nav.vue'
import GigFilter from './gig-filter.vue'

export default {
    name: 'app-header',
    components: {
        appLogo,
        gigFilter,
        appNav,
        categoryFilter,
        GigFilter,
        home
    },
    data() {
        return {
        }
    },
    created() {
    },
  
}
</script>
