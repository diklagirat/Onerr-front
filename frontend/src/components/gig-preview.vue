<template>
  <section class="gig-preview">
    <div class="gig-preview-container">
      <div class="gig-preview-header">
        <!-- <router-link :to="'/details/' + gig._id"> -->
          <vueper-slides fade :touchable="false">
            <vueper-slide v-for="(image, i) in gig.imgUrl" :key="i" :image="image" />
          </vueper-slides>
        <!-- </router-link> -->
      </div>

      <div class="gig-preview-content">
        <div class="gig-preview-owner">
          <user-preview :user="gig.owner" :isPreview="true" />
        </div>

        
        <router-link :to="'/details/' + gig._id">
          <h3 class="gig-preview-title">{{ gig.title }}</h3>
        </router-link>
        <div class="gig-rate-container flex">
          <stars-rating class="rate" :rate="(gig.owner.rate)" :length="1" />
          <span class="rate-sum">({{ gig.owner.rateSum }})</span>
        </div>
      </div>
      <div class="footer flex space-between align-center">
        <div class="collect-package">
          <span>
            <svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0769 0H0.923077C0.413276 0 0 0.415736 0 0.928571C0 1.44141 0.413276 1.85714 0.923077 1.85714H15.0769C15.5867 1.85714 16 1.44141 16 0.928571C16 0.415736 15.5867 0 15.0769 0Z">
              </path>
              <path
                d="M15.0769 5.57143H0.923077C0.413276 5.57143 0 5.98717 0 6.5C0 7.01284 0.413276 7.42857 0.923077 7.42857H15.0769C15.5867 7.42857 16 7.01284 16 6.5C16 5.98717 15.5867 5.57143 15.0769 5.57143Z">
              </path>
              <path
                d="M15.0769 11.1429H0.923077C0.413276 11.1429 0 11.5586 0 12.0714C0 12.5843 0.413276 13 0.923077 13H15.0769C15.5867 13 16 12.5843 16 12.0714C16 11.5586 15.5867 11.1429 15.0769 11.1429Z">
              </path>
            </svg>
          </span>
          <span class="heart">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
              </path>
            </svg>
          </span>
        </div>
        <div class="price-line-brake flex">
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
import starsRating from "./details-page/stars-rating.vue"
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
    starsRating,
    VueperSlides,
    VueperSlide
  },
}
</script>
