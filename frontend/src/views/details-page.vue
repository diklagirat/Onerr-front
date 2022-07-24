<template>
  <section class="details-page" v-if="gig">
    <div class="details">
      <div class="details-main">
        <gig-header :gig="gig" />
        <div class="details-side-bar">
          <gig-package :gig="gig" />
        </div>
        <gig-about :gig="gig" />
        <div v-if="owner">
          <owner-about :owner="owner" />
          <owner-rate :reviews="owner.reviews" />
          <owner-review-list :reviews="owner.reviews" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js"
import { userService } from "../services/user-service.js"

import gigPackage from "../components/details-page/gig-package.vue"
import gigHeader from "../components/details-page/gig-header.vue"
import gigAbout from "../components/details-page/gig-about.vue"
import ownerAbout from "../components/details-page/owner-about.vue"
import ownerRate from "../components/details-page/owner-rate.vue"
import ownerReviewList from "../components/details-page/owner-review-list.vue"

export default {
  name: "gig-details",
  components: {
    gigPackage,
    gigHeader,
    gigAbout,
    ownerAbout,
    ownerRate,
    ownerReviewList,
  },
  data() {
    return {
      gig: null,
      owner: null,
    }
  },
  created() {
    const { gigId } = this.$route.params
    gigService.getById(gigId).then((currGig) => {
      this.gig = currGig
      const ownerId = this.gig.owner._id
      userService.getById(ownerId).then((currOwner) => {
        this.owner = currOwner
      })
    })
  },
}
</script>
