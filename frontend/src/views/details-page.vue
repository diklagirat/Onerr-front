<template>
  <section class="details-page" v-if="gig">
    <div class="details">
      <div class="details-main">
        <gig-header :gig="gig" />
        <gig-image :images="gig.imgUrl" />
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
import gigImage from "../components/details-page/gig-image.vue"
import gigAbout from "../components/details-page/gig-about.vue"
import ownerAbout from "../components/details-page/owner-about.vue"
import ownerRate from "../components/details-page/owner-rate.vue"
import ownerReviewList from "../components/details-page/owner-review-list.vue"
import GigImage from "../components/details-page/gig-image.vue"

export default {
  name: "gig-details",
  components: {
    gigPackage,
    gigHeader,
    gigImage,
    gigAbout,
    ownerAbout,
    ownerRate,
    ownerReviewList,
    GigImage,
  },
  data() {
    return {
      gig: null,
      owner: null,
    }
  },
  created() {
    const { gigId } = this.$route.params
    this.getGigById(gigId)
    // Scroll to top of the page
    this.$store.dispatch('scrollToTop')
  },
  methods: {
    async getGigById(gigId) {
      this.gig = await this.$store.dispatch({
        type: 'getGigById',
        gigId,
      })
      const userId = this.gig.owner._id
      console.log('userId', userId)
      this.getUserById(userId)
    },
    async getUserById(userId) {
      this.owner = await this.$store.dispatch({
        type: 'getUserById',
        userId,
      })
    }
  }
}
</script>
