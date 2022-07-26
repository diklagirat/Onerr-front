<template>
  <section class="user-preview">
    <div v-if="user" class="gig-preview-user flex align-center" 
    v-bind:class="{preview:isPreview, header:isHeader}">
      <img :src="user.imgUrl" class="user-image" />
      <div class="user-info flex " v-bind:class="{column:isPreview}" >
        <a class="name">{{ user.fullname }}</a>
        <div class="rate">
            <stars-rating class="rate" :rate="avrgRite" />
        </div>
        <span class="level" :class="[this.isTopRated ? 'topRated' : '']">{{
          user.level
        }}</span>
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
