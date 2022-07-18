<template>
    <section class="home-page">
        <div class="main-content">
            <hero />
            <trusted-by />
            <div class="popular-list main-layout">Popular professional services List</div>
            <gig-info />
        </div>
    </section>
</template>
 
<script>
import hero from '../components/hero.vue'
import gigInfo from '../components/gig-info.vue'
import trustedBy from '../components/trusted-by.vue'
export default {
    components: {
        hero,
        gigInfo,
        trustedBy
    },
    data() {
        return {

        }
    },

}
</script>
