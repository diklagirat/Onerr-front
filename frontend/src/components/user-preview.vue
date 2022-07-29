<template>
  <section class="user-preview">
    <div v-if="user" class="gig-preview-user flex align-center" 
    v-bind:class="{preview:isPreview, header:isHeader, ownerDetails:isOwnerDetails, review:isReview}">
      <img :src="user.imgUrl" class="user-image" />
      <div class="user-info flex " v-bind:class="{column:isPreview}" >
        <a class="name">{{ user.fullname }}</a>
        <div class="rate">
            <!-- <stars-rating class="rate" :rate="avrgRite" /> -->
            <!-- <p>&#9733;</p> -->
        </div>
        <span class="level" :class="[isTopRated ? 'topRated' : '']">{{
          user.level
        }}</span>
        <button class="contact btn-basic">Contact Me</button>
      </div>
    </div>
  </section>
</template>

<script>
import starsRating from './details-page/stars-rating.vue'
export default {
  name: "user-preview",
  props: {
    user: Object,
    isPreview: Boolean,
    isHeader: Boolean,
    isOwnerDetails: Boolean,
    isReview: Boolean,
    rate: Number
  },
  data() {
    return {
      isTopRated: this.user.level === 'Top Rated Seller' ? true : false
    }
  },
  computed: {
    avrgRite() {
        if(this.isReview) return this.rate
        return this.user.rate
    }
  },
  components: {
    starsRating
  }

}
</script>

<style></style>
