<template>
  <section class="details-page">
    <h1>hello details page</h1>
    <pre>{{ gig }}</pre>
  </section>
</template>

<script>
import { gigService } from '../services/gig-service.js'

export default {
  name: "gig-details",
  data() {
    return {
      gig: null,
    }
  },
  created() {
    const { gigId } = this.$route.params
    gigService.getById(gigId).then((currgig) => {
      this.gig = currgig
    })
  },
}
</script>
