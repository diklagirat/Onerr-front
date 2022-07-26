<template>
    <section :class="getClass" class="app-header">
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
            const val = this.$store.getters.getObserver

            if (this.$route.path === '/') {
                return val ? 'sticky' : 'in-homepage'
            }
            return ''

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

<style scoped>
.observe {
    text-align: center;
    height: 150px;
    border: 1px solid black;
}
</style>