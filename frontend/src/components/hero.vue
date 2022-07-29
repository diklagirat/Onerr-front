<template>
    <div class="hero-container" ref="hero">
        <!-- ref="hero" -->
        <div v-if="url" class="hero-background" :style="{ 'background-image': `url(${url})` }">
            <article class="main-layout flex column end align-end">
                <p class="star-in-hero"> {{ rate }}</p>
                <p>{{ gigOwnerName }},
                    <b>{{ gigOwnerTitle }}</b>
                </p>
            </article>
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
                                <a class="clean-link" @click="setPath(category)">
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
            headerObserver: '',
            isSticky: false,
            page: '',
            popularCategories: [
                'Website Design',
                'WordPress',
                'Logo Design',
                'NFT Art'
            ],
            heroDetails: [
                {
                    gigOwnerName: 'Moon',
                    gigOwnerTitle: 'Marketing Expert',
                    rate: '★★★★★',
                    imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png',
                    isShown: true

                },
                {
                    gigOwnerName: 'Andrea',
                    gigOwnerTitle: 'Fashion Designer',
                    rate: '',
                    imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png',
                    isShown: false
                },
                {
                    gigOwnerName: 'Ritika',
                    gigOwnerTitle: 'Shoemaker and Designer',
                    rate: '',
                    imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png',
                    isShown: false
                },
                {
                    gigOwnerName: 'Zach',
                    gigOwnerTitle: 'Bar Owner',
                    rate: '',
                    imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png',
                    isShown: false
                },
                {
                    gigOwnerName: 'Gabrielle',
                    gigOwnerTitle: 'Video Editor',
                    rate: '★★★★★',
                    imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png',
                    isShown: false
                }
            ],
            url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png',
            gigOwnerName: 'Moon',
            gigOwnerTitle: 'Marketing Expert',
            rate: '★★★★★'
        }
    },
    created() {
        this.page = this.$route.path

        setInterval(this.changeBcgDetails, 5000)
    },
    computed: {

    },
    methods: {
        setPath(category) {
            var filterBy = { ...this.$store.getters.getfilterBy }
            filterBy.byTag = category
            this.$store.commit({ type: 'setFilterBy', filterBy })
            this.$router.push({ path: '/explore', query: { category: category } })
        },
        onHeaderObserved(entries) {
            if (this.page !== '/') {
                console.log(this.page)
            }
            entries.forEach((entry) => {
                this.isSticky = entry.isIntersecting ? false : true
            })
            this.$store.commit({ type: 'setObserver', val: this.isSticky })
        },
        imgUrl() {
            const heroDetails = [...this.heroDetails]
            var bcgDetails = heroDetails.filter((currDetails) => currDetails.isShown === true)
            return bcgDetails[0].imgUrl
        },
        changeBcgDetails() {
            // Copy of originally array
            const heroDetails = [...this.heroDetails]
            const bcgDetailsIdx = heroDetails.findIndex((currDetails) => currDetails.isShown === true)

            // Update curr hero details in hero background
            // var bcgDetails = heroDetails.filter((currDetails) => currDetails.isShown === true)
            // this.gigOwnerName = bcgDetails[0].gigOwnerName
            // this.gigOwnerTitle = bcgDetails[0].gigOwnerTitle
            // this.rate = bcgDetails[0].rate

            // Originally array
            const bcgDetails = this.heroDetails

            bcgDetails[bcgDetailsIdx].isShown = false

            if (bcgDetailsIdx === bcgDetails.length - 1) {
                bcgDetails[0].isShown = true
            } else {
                bcgDetails[bcgDetailsIdx + 1].isShown = true
            }

            const res = bcgDetails.filter((currDetails) => currDetails.isShown === true)
            this.gigOwnerName = res[0].gigOwnerName
            this.gigOwnerTitle = res[0].gigOwnerTitle
            this.rate = res[0].rate


            this.url = this.imgUrl()
        }
    },
    mounted() {
        this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
            rootMargin: '80px 0px 0px',
            threshold: 1,
        })
        this.headerObserver.observe(this.$refs.hero)
    },
    beforeDestroy() {
        this.headerObserver.unobserve(this.$refs.hero)
    }
}
</script>