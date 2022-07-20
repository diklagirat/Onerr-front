<template>
  <section class="explore-page">
    <div class="explore-container">
      <h1>Explore page</h1>
      <gig-list />
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue";
export default {
  name: "explore-page",
  components: {
    gigList,
  },
  data() {
    return {};
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
  },
};
</script>
