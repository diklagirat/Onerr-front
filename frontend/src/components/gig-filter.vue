<template>
    <section class="app-search">
        <input @input="setFilter" v-model="txt" type="search" placeholder="What service are you looking for today?" />
        <button>Search</button>
    </section>
</template>

<script>

export default {
    name: 'gig-filter',

    data() {
        return {
            txt: ''
        }
    },
    methods: {
        setFilter() {
            var filterBy = {
                txt: '',
            }
            filterBy.txt = this.txt
            this.$store.commit({ type: 'setFilterBy', filterBy })
        },
    },
    computed: {
        ggg() {
            return this.$store.getfilterBy
        }
    }

}
</script>