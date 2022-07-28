<template>
  <section class="gig-preview">
    <div class="gig-preview-container">
      <div class="gig-preview-header">
        <router-link :to="'/details/' + gig._id">
          <vueper-slides fade :touchable="false">
            <vueper-slide v-for="(image, i) in gig.imgUrl" :key="i" :image="image" />
          </vueper-slides>
        </router-link>
      </div>

      <div class="gig-preview-content">
        <div class="gig-preview-owner">
          <user-preview :user="gig.owner" :isPreview="true" />
        </div>
        <router-link :to="'/details/' + gig._id">
          <h3 class="gig-preview-title">{{ gig.title }}</h3>
        </router-link>
        <div class="gig-rate-container">
          <span class="owner-rate star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
              height="15">
              <path fill="currentColor"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
              </path>
            </svg>
          </span>
          <span class="owner-rate">{{ gig.owner.rate }}</span>
          <span class="rate-sum">({{ gig.owner.rateSome }})</span>
        </div>
      </div>
      <div class="footer flex space-between align-center">
        <div class="collect-package">
          <span class="heart">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
              </path>
            </svg>
          </span>
        </div>
        <div class="price-line-brake flex column">
          <small>STARTING AT</small>
          <router-link :to="'/details/' + gig._id">
            <!-- <span> ${{ gig.price }} <sup>23</sup></span> -->
            <span> ${{ gig.price }} </span>
          </router-link>
          <!-- TODO: 2 computed function 1. 90 2. 23  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userPreview from "../components/user-preview.vue"
import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  data() {
    return {}
  },
  methods: {},
  components: {
    userPreview,
    VueperSlides,
    VueperSlide
  },
}
</script>
