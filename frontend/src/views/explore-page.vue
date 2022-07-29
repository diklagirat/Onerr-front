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
  // created() {
  //   scrollToTop()

  // },
  // methods: {
  //   scrollToTop() {
  //     window.scrollTo(0, 0)
  //   }
  // },
  computed: {
    gigs() {
      return this.$store.getters.gigsToDisplay
    },
  },
}
</script>
