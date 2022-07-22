<template>
  <section class="details-page" v-if="gig">
    <div>
      <gig-header :gig="gig" />
      <gig-about :gig="gig" />
      <owner-review :gig="gig" />
      <gig-package :gig="this.gig" />
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js"
import { userService } from "../services/user-service.js"

import gigPackage from "../components/gig-package.vue"
import gigHeader from '../components/gig-header.vue'
import gigAbout from '../components/gig-about.vue'
import ownerReview from "../components/owner-review.vue"

export default {
  name: "gig-details",
  components: {
    gigPackage,
    gigHeader,
    gigAbout,
    ownerReview
  },
  data() {
    return {
      gig: null,
      owner: null
    }
  },
  created() {
    const { gigId } = this.$route.params
    gigService.getById(gigId).then((currGig) => {
      this.gig = currGig

      this.setOwner()
    })
  },
  methods: {
    setOwner() {
      const owner = this.gig.owner
      this.owner = owner
      console.log('owner', this.owner)

      
    }

  }
}
</script>
