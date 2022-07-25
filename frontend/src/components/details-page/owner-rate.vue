<template>
  <section v-if="reviews" class="owner-rate">
    <header class="flex">
      <h1 class="flex align-center center">
        <article>{{ reviews.length }} Reviews</article>
        <el-rate
          v-if="average"
          v-model="average"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
      </h1>
    </header>
    <main class="flex">
      <div class="demo-progress">
        <div class="progress-stars-5 flex">
          <h3>5 Stars</h3>
          <el-progress :percentage="percent(5)" status="warning"
            >({{ amountReviewsPerStar(5) }})</el-progress
          >
        </div>
        <div class="progress-stars-4 flex">
          <h3>4 Stars</h3>
          <el-progress :percentage="percent(4)" status="warning"
            >({{ amountReviewsPerStar(4) }})</el-progress
          >
        </div>
        <div class="progress-stars-3 flex">
          <h3>3 Stars</h3>
          <el-progress :percentage="percent(3)" status="warning"
            >({{ amountReviewsPerStar(3) }})</el-progress
          >
        </div>
        <div class="progress-stars-2 flex">
          <h3>2 Stars</h3>
          <el-progress :percentage="percent(2)" status="warning"
            >({{ amountReviewsPerStar(2) }})</el-progress
          >
        </div>
        <div class="progress-stars-1 flex">
          <h3>1 Stars</h3>
          <el-progress :percentage="percent(1)" status="warning"
            >({{ amountReviewsPerStar(1) }})</el-progress
          >
        </div>
      </div>
      <section>
        <h2>Rating Breakdown</h2>
        <ul>
          <li>
            Seller communication level <span>★ {{ this.average }}</span>
          </li>
          <li>
            Recommend to a friend <span>★ {{ value }}</span>
          </li>
          <li>
            Service as described <span>★ {{ value }}</span>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<script>
// const value = ref(3.7)
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
  computed: {
    value() {
      return this.average
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
}
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.el-rate {
  --el-rate-icon-size: 18px;
}
</style>
