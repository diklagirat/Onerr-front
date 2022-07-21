<template>
  <section class="explore-page">
    <div class="explore-container">
      <gig-list :gigs="gigs" />
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue"

export default {
  name: "explore-page",
  components: {
    gigList,
  },
  data() {
    return {}
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs
    },
  },
}
</script>
