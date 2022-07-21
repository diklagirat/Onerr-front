<template>
  <section class="details-page" v-if="gig">
    <div>
      <gig-package :gig="this.gig" />
      <pre>{{ gig }}</pre>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js";
import gigPackage from "../components/gig-package.vue";

export default {
  components: {
    gigPackage,
  },
  name: "gig-details",
  data() {
    return {
      gig: null,
    };
  },
  created() {
    const { gigId } = this.$route.params;
    gigService.getById(gigId).then((currgig) => {
      this.gig = currgig;
    });
  },
};
</script>

<style></style>
