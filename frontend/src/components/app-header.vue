<template>
    <section :class="getClass">
        <div class="main-header-container">
            <header class="main-header main-layout flex">
                <div class="logo-and-filter flex">
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
                  if (val && this.$route.path === '/') {
                return 'sticky app-header'
            }
            return 'app-header'

        }
    }

}
</script >

<style scoped>
.observe {
    text-align: center;
    height: 150px;
    border: 1px solid black;
}

.sticky {
    background-color: #fff;
    z-index: 1;
    position: sticky;
    top: 0px;

}
</style>