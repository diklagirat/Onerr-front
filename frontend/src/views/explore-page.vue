<template>
  <section class="explore-page">
    <category-filter />
    <div class="explore-container">
      <gig-list :gigs="gigs" />
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue"
import categoryFilter from '../components/category-filter.vue'
export default {
  name: "explore-page",
  components: {
    gigList,
    categoryFilter
  },
  data() {
    return {}
  },
  computed: {
    gigs() {
      return this.$store.getters.gigsToDisplay
    },
  },
}
</script>
