<template>
  <section class="details-page" v-if="gig">
    <div>
      <gig-header :gig="gig" />
      <gig-package :gig="gig" />
      <gig-about :gig="gig" />
      <owner-about v-if="owner" :owner="owner" />
      <owner-rate v-if="owner" :reviews="owner.reviews"/>
      <owner-review-list v-if="owner" :reviews="owner.reviews"/>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js";
import { userService } from "../services/user-service.js";
import gigPackage from "../components/gig-package.vue";
import gigHeader from "../components/gig-header.vue";
import gigAbout from "../components/gig-about.vue";
import ownerAbout from "../components/owner-about.vue";
import ownerRate from "../components/owner-rate.vue"
import ownerReviewList from "../components/owner-review-list.vue";

export default {
  name: "gig-details",
  components: {
    gigPackage,
    gigHeader,
    gigAbout,
    ownerAbout,
    ownerRate,
    ownerReviewList
  },
  data() {
    return {
      gig: null,
      owner: null,
    };
  },
  created() {
    const { gigId } = this.$route.params;
    gigService.getById(gigId).then((currGig) => {
    this.gig = currGig;
    const ownerId = this.gig.owner._id;
    userService.getById(ownerId).then((currOwner) => {
      this.owner = currOwner;
    });
    });
  },
};
</script>
