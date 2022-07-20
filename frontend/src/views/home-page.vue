<template>
    <section class="home-page">
        <div class="main-content">
            <hero />
            <trusted-by />
            <div class="popular-list main-layout">Popular professional services List</div>
            <gig-info />
            <signup />
        </div>
    </section>
</template>
 
<script>
import signup from '../components/signup.vue'
import hero from '../components/hero.vue'
import gigInfo from '../components/gig-info.vue'
import trustedBy from '../components/trusted-by.vue'

export default {
    name: 'home-page',
    components: {
        hero,
        gigInfo,
        trustedBy,
        signup
    },
    data() {
        return {

        }
    },
    created() {
    }
}

</script>
