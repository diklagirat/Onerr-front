<template>
  <section class="details-page" v-if="gig">
    <div>
      <gig-header :gig="gig" />
      <gig-package :gig="this.gig" />
      <gig-about :gig="gig" />
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js"
import gigPackage from "../components/gig-package.vue"
import gigHeader from '../components/gig-header.vue'
import gigAbout from '../components/gig-about.vue'

export default {
  name: "gig-details",
  components: {
    gigPackage,
     gigHeader,
    gigAbout
  },
  data() {
    return {
      gig: null,
    }
  },
  created() {
    const { gigId } = this.$route.params;
    gigService.getById(gigId).then((currgig) => {
      this.gig = currgig;
    });
  },
}
</script>
