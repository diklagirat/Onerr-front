<template>
    <div class="hero-wrapper hero-andrea lohp-row" ref="hero">
        <!-- ref="hero" -->
        <div class="hero-background">
        </div>
        <div class="hero flex main-layout">
            <div class="hero-header flex column center align-start ">
                <h1 class="header">
                    <span>Find the perfect <i>freelance</i> services for your business</span>
                </h1>
                <div class="search">
                    <gig-filter :isHero="true" />
                </div>
                <div class="popular flex">
                    <div class="flex">
                        <p> Popular: </p>
                        <ul class="clean-list flex">
                            <li class="flex center align-center" v-for="category in popularCategories" :key="category">
                                <a class="clean-link">
                                    {{ category }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="hero-backgrounds">
            <div class="hero-andrea" style="opacity: 0;">
                <div class="seller-name max-width-container">
                    <p>Andrea, <b>Fashion Designer</b></p>
                </div>
            </div>
            <div class="hero-moon" style="opacity: 0;">
                <div class="seller-name max-width-container show-stars">
                    <p>Moon, <b>Marketing Expert</b></p>
                </div>
            </div>
            <div class="hero-ritika" style="opacity: 0;">
                <div class="seller-name max-width-container">
                    <p>Ritika, <b>Shoemaker and Designer</b></p>
                </div>
            </div>
            <div class="hero-zach" style="opacity: 0;">
                <div class="seller-name max-width-container">
                    <p>Zach, <b>Bar Owner</b></p>
                </div>
            </div>
            <div class="hero-gabrielle" style="opacity: 1;">
                <div class="seller-name max-width-container show-stars">
                    <p>Gabrielle, <b>Video Editor</b></p>
                </div>
            </div> -->
    </div>

</template>


<script>

import gigFilter from "./gig-filter.vue";

export default {
    name: 'hero',
    components: {
        gigFilter
    },
    data() {
        return {
            heroObserver: null,
            popularCategories: [
                'Website Design',
                'WordPress',
                'Logo Design',
                'NFT Art'
            ],
            isSticky: false,
            page: '',
        }
    },
    
    created() {
        this.page = this.$route.path

        console.log('this.popularCategories', this.popularCategories)
    },
    methods: {
        onHeaderObserved(entries) {
            if (this.page !== '/') {
                console.log(this.page);
            }
            entries.forEach((entry) => {

                this.isSticky = entry.isIntersecting ? false : true
            })
            this.$store.commit({ type: 'setObserver', val: this.isSticky })
        },

    },
    mounted() {
        console.log('hero', this.$refs.hero)
        // console.log(this.$refs.test)
        this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
            rootMargin: '40px',
            threshold: 1.0,
        })
        this.headerObserver.observe(this.$refs.hero)


    },

    // methods: {
    //     onHeroObserved(entries) {
    //         entries.forEach(entry => {
    //            console.log('hey im observed', entry);
    //         })
    //     },
    // },
    // mounted() {
    //     console.log('mounted', this.$refs.hero );
    //     this.heroObserver = new IntersectionObserver(this.onHeroObserved);
    //     this.heroObserver.observe(this.$refs.hero);
    // }
}
</script>