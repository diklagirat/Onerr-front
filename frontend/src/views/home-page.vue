<template>
    <section class="home-page">
        <div class="main-content">
            <hero />
            <trusted-by />
            <!-- <popular-categories-list /> -->
            <about />
            <!-- <signup /> -->
        </div>
    </section>
</template>
 
<script>
import hero from '../components/hero.vue'
import trustedBy from '../components/trusted-by.vue'
import popularCategoriesList from '../components/popular-categories-list.vue'
import about from '../components/about.vue'
import signup from '../components/signup.vue'

export default {
    name: 'home-page',
    components: {
        hero,
        trustedBy,
        popularCategoriesList,
        about,
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
