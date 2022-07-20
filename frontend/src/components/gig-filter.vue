<template>
    <section class="app-search">
        <input  @input="setFilter" v-model="filterBy.txt" type="search" placeholder="What service are you looking for today?" />
        <button>Search</button>
    </section>
</template>

<script>

export default {
    name: 'gig-filter',

    data() {
        return {
            filterBy: {
                txt: '',
                tag: ''
            }
        }
    },
    methods: {
    setFilter() {
        console.log('filterBy.txt',this.filterBy.txt)
      this.$emit('setFilter', this.filterBy)
    },
  },

}
</script>