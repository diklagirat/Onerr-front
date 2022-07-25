<template>
    <section class="gig-filter flex" :class="{ 'gig-filter-hero': isHero }">
        <input @input="setFilter" v-model="txt" type="search" placeholder="What service are you looking for today?" />
        <button v-if="!isHero">
            <SearchIcon />
        </button>
        <button v-else>
            Search
        </button>
    </section>
</template>

<script>
import searchIcon from './icons/search-icon.vue'
import SearchIcon from './icons/search-icon.vue'

export default {
    name: "gig-filter",
    props: {
        isHero: Boolean
    },
    component: {
        searchIcon
    },
    data() {
        return {
            txt: ""
        };
    },
    created() {
    },
    methods: {
        setFilter() {
            var filterBy = {
                txt: "",
            };
            filterBy.txt = this.txt;
            this.$store.commit({ type: "setFilterBy", filterBy });
        },
    },
    computed: {
        // ggg() {
        //     return this.$store.getfilterBy
        // }
    },
    components: { SearchIcon }
}
</script>