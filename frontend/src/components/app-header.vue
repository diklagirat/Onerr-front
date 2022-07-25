<template>
    <section class="app-header">
        <div class="main-header-container">
            <header class="main-header main-layout flex">
                <div class="logo-and-filter flex">
                    <app-logo :isFooter="false" />
                </div>
                <app-nav />
            </header>
        </div>
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
    }
}
</script>
