<template>
  <section class="explor-page">
    <div class="explor-container">
      <h1>explor page</h1>
      <gig-list />
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue";
export default {
  name: "explor-page",
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
