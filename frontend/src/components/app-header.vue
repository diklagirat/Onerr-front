<template>
    <section :class="getClass" >
        <div class="main-header-container">
            <header class="main-header main-layout flex">
                <div class="logo-and-filter flex">
                    <app-logo :isFooter="false" class="app-logo-in-homepage" />
                    <gig-filter class="gig-filter-in-homepage" />
                </div>
                <app-nav class="app-nav-in-hompage" />
            </header>
        </div>
        <div>
            <category-filter class="category-filter-in-homepage" />
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
    components: {
        appLogo,
        gigFilter,
        appNav,
        categoryFilter,

    },
    data() {
        return {

        }
    },

    created() {

    },
    computed: {
        getClass() {
            if (this.$route.path !== '/') return 'app-header'

            const val = this.$store.getters.getObserver
            return val ? 'app-header sticky' : 'app-header in-homepage'

        }
        // getClass() {
        //     const val = this.$store.getters.getObserver
        //           if (val && this.$route.path === '/') {
        //         return 'sticky app-header'
        //     }
        //     return 'app-header in-homepage'
        // }
    }

}
</script >