<template>
  <section class="user-preview">
    <div
      v-if="user"
      class="gig-preview-user flex align-center"
      :class="{
        preview: isPreview,
        header: isHeader,
        ownerDetails: isOwnerDetails,
        review: isReview,
        dashboard: isDashboard,
      }"
    >
      <img :src="user.imgUrl" class="user-image" />
      <div class="user-info flex" :class="{ column: isPreview }">
        <a class="name">{{ user.fullname }}</a>
        <stars-rating class="rate" :rate="avrgRite" :length="5" />
        <span class="rateSum">({{ user.rateSum }})</span>
        <span class="level" :class="[isTopRated ? 'topRated' : '']">{{
          user.level
        }}</span>
        <button class="contact btn-basic">Contact Me</button>
      </div>
    </div>
  </section>
</template>



<script>
import starsRating from "./details-page/stars-rating.vue"
export default {
  name: "user-preview",
  props: {
    user: Object,
    isPreview: Boolean,
    isHeader: Boolean,
    isOwnerDetails: Boolean,
    isReview: Boolean,
    isDashboard: Boolean,
    rate: Number,
  },
  data() {
    return {
      isTopRated: this.user.level === "Top Rated Seller" ? true : false,
    }
  },
  computed: {
    avrgRite() {
      if (this.isReview) return this.rate
      return this.user.rate
    },
  },
  components: {
    starsRating,
  },
}
</script>

<style></style>
