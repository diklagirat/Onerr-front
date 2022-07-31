<template>
  <section v-if="reviews" class="owner-rate">
    <header class="flex">
      <h1 class="flex align-center center">
        <article>{{ reviews.length }} Reviews</article>
        <stars-rating :rate="average" :length="5"/>
      </h1>
    </header>
    <main class="flex">
      <div class="demo-progress">
       <div class="progress-stars-5 flex">
          <h3><span>5</span>Stars</h3>
          <el-progress style="--el-menu-sub-item-height: 40px" :percentage="percent(5)" status="warning"
            >({{ amountReviewsPerStar(5) }})</el-progress
          >
        </div>
        <div class="progress-stars-4 flex">
          <h3><span>4</span>Stars</h3>
          <el-progress style="--el-menu-sub-item-height: 40px" :percentage="percent(4)" status="warning"
            >({{ amountReviewsPerStar(4) }})</el-progress
          >
        </div>
        <div class="progress-stars-3 flex">
          <h3><span>3</span>Stars</h3>
          <el-progress :percentage="percent(3)" status="warning"
            >({{ amountReviewsPerStar(3) }})</el-progress
          >
        </div>
        <div class="progress-stars-2 flex">
          <h3><span>2</span>Stars</h3>
          <el-progress :percentage="percent(2)" status="warning"
            >({{ amountReviewsPerStar(2) }})</el-progress
          >
        </div>
        <div class="progress-stars-1 flex">
          <h3><span>1</span>Stars</h3>
          <el-progress :percentage="percent(1)" status="warning"
            >({{ amountReviewsPerStar(1) }})</el-progress
          >
        </div>
      </div>
      <section class="rating-breakdown">
        <h2>Rating Breakdown</h2>
        <ul class="clean-list">
          <li class="flex space-between">
            Seller communication level <stars-rating class="rate" :rate="average" :length="1"/>
          </li>
          <li class="flex space-between">
            Recommend to a friend <stars-rating class="rate" :rate="average" :length="1"/>
          </li>
          <li class="flex space-between">
            Service as described <stars-rating class="rate" :rate="average" :length="1"/>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<script>
import starsRating from '../details-page/stars-rating.vue'
export default {
  name: "owner-rate",
  props: {
    reviews: Array,
  },
  data() {
    return {
      average: null,
    }
  },
  methods: {
    amountReviewsPerStar(stars) {
      let mapStars = 0
      this.reviews.map((review) => {
        if (review.rate === stars) mapStars++
      })
      return mapStars
    },
    percent(stars) {
      let amount = 0
      this.reviews.map(review => {
        if(review.rate === stars) amount++
      })
      return 100 / this.reviews.length * amount
    },
  },
  created() {
    let average = 0
    this.reviews.map((review) => {
      average += review.rate
    })
      average = average / this.reviews.length
      this.average = average
  },
  components: {
    starsRating,
  }
}
</script>

