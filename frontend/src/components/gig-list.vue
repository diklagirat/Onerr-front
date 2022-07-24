<template>
    <section class="gig-list main-layout">
        <gig-list-header />
        <ul class="gig-list-container clean-list ">
            <li v-for="gig in gigs" :key="gig._id">
                <gig-preview :gig="gig" />
            </li>
        </ul>
    </section>
</template>

<script>
import gigPreview from "./gig-preview.vue";
import gigListHeader from './gig-list-header.vue'
export default {
    name: 'gig-list',
    props: {
        gigs: Array,
    },
    components: {
        gigPreview,
        gigListHeader
    },
    methods: {
    },
    computed: {
    }
}
</script>

