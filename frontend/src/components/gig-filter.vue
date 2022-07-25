<template>
    <section class="gig-filter flex">
        <input @input="setFilter" v-model="txt" type="search" placeholder="What service are you looking for today?" />
        <button>
            <SearchIcon />
        </button>
    </section>
</template>

<script>
import searchIcon from './icons/search-icon.vue'
import SearchIcon from './icons/search-icon.vue'

export default {
    name: "gig-filter",
    component: {
        searchIcon
    },
    data() {
        return {
            txt: ""
        };
    },
    methods: {
        setFilter() {
            var filterBy = {
                txt: "",
                byTag: 'Architecture & Interior Design'
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