<template>
  <section v-if="gig" class="details-page">
    <h1>hello details page</h1>
    <gig-header :gig="gig" />
    <gig-about :gig="gig" />
    <pre>{{ gig }}</pre>
  </section>
</template>

<script>

import { gigService } from '../services/gig-service.js'
import gigHeader from '../components/gig-header.vue'
import gigAbout from '../components/gig-about.vue'

export default {
  name: 'gig-details',
  components: {
    gigHeader,
    gigAbout
  },
  data() {
    return {
      gig: null,
    };
  },
  created() {
    const { gigId } = this.$route.params
    gigService.getById(gigId).then((currgig) => {
      this.gig = currgig
    })
  },
};
</script>

<style>
</style>
