<template>
    <!-- placeholder="What service are you looking for today?" -->
    <section class="app-search">
        <input @input="setFilter" v-model="txt" type="search" />
        <button>Search</button>

        <p>{{ ggg }}+hhhh</p>
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
                txt: ''
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