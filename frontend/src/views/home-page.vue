<template>
    <section class="home-page">
        <div class="main-content">
            <hero />
            <trusted-by />
            <popular-categories-list />
            <about-onerr />
            <!-- <signup /> -->
        </div>
    </section>
</template>
 
<script>
import hero from '../components/hero.vue'
import trustedBy from '../components/trusted-by.vue'
import popularCategoriesList from '../components/popular-categories-list.vue'
import aboutOnerr from '../components/about-onerr.vue'
import signup from '../components/signup.vue'

export default {
    name: 'home-page',
    components: {
        hero,
        trustedBy,
        popularCategoriesList,
        aboutOnerr,
        signup,
    },
    data() {
        return {
            isSticky: false
        }
    },
    created() {
    },

}

</script>


<style>

.home-page {
    position: relative;
    top: em(-81px)
}

</style>