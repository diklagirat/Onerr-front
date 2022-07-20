<template>
    <section class="gig-list">
        <h2>I am a gig list</h2>
        <ul>
            <li v-for="gig in gigs" :key="gig._id" class="gig-list-container">
                <gig-preview />
            </li>

        </ul>
    </section>
</template>

<script>
import gigPreview from "./gig-preview.vue";
export default {
    name: 'gig-list',
    props: {
        gigs: Array,
    },
    components: {
        gigPreview
    },
    methods: {
    },
    computed: {
    }
}
</script>

