<template>
    <section class="home-page">
        <div class="main-content">
            <hero />
            <trusted-by />
            <!-- <popular-categories-list :gigsCategories="gigsCategories" /> -->
            <gig-info />
            <signup />
        </div>
    </section>
</template>
 
<script>
import hero from '../components/hero.vue'
import trustedBy from '../components/trusted-by.vue'
import popularCategoriesList from '../components/popular-categories-list.vue'
import gigInfo from '../components/gig-info.vue'
import signup from '../components/signup.vue'

export default {
    name: 'home-page',
    components: {
        hero,
        trustedBy,
        popularCategoriesList,
        gigInfo,
        signup,
    },
    data() {
        return {
            gigsCategories: [
                'logo-design',
                'wordpress',
                'voice-over',
                'artisitic',
                'proffesional',
                'accessible',
            ]
        }
    },
    created() {
    }
}

</script>
