<template>
  <section class="owner-rate">
    <header class="flex">
      <h1>
        <span>{{ reviews.length }}</span> Reviews
      </h1>
      <el-rate disabled show-score text-color="#ff9900" score-template="{}" />
    </header>
    <main class="flex">
      <div class="demo-progress">
        <div class="progress-stars-5 flex">
          <h3>5 Stars</h3>
          <el-progress :percentage="percent(5)" status="warning">({{amountReviewsPerStar(5)}})</el-progress>
        </div>
        <div class="progress-stars-4 flex">
          <h3>4 Stars</h3>
          <el-progress :percentage="30" status="warning">({{amountReviewsPerStar(4)}})</el-progress>
        </div>
        <div class="progress-stars-3 flex">
          <h3>3 Stars</h3>
          <el-progress :percentage="30" status="warning">({{amountReviewsPerStar(3)}})</el-progress>
        </div>
        <div class="progress-stars-2 flex">
          <h3>2 Stars</h3>
          <el-progress :percentage="30" status="warning">({{amountReviewsPerStar(2)}})</el-progress>
        </div>
        <div class="progress-stars-1 flex">
          <h3>1 Stars</h3>
          <el-progress :percentage="30" status="warning">({{amountReviewsPerStar(1)}})</el-progress>
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
export default {
  name: "owner-rate",
  props: {
    reviews: Array,
  },
  data() {
    return {
      average: null,
    };
  },
  methods: {
    value() {
      let average;
      this.reviews.map((review) => {
        average += review.rate;
      });
      average / this.reviews.length;
      this.average = average;
    },
    amountReviewsPerStar(stars) {
      let mapStars = 0;
      this.reviews.map((review) => {
        if (review.rate === stars) mapStars++;
      });
      return mapStars;
    },
    percent(stars) {
        console.log('stars', this.reviews.lengt)
        100 / this.reviews.lengt * stars
        console.log('100 / this.reviews.lengt * stars',100 / this.reviews.lengt * stars)
    }
  },
  computed: {
    //   value() {
    //     let average
    //     this.reviews.map(review => {
    //         average += review.rate
    //     })
    //     average / this.reviews.length
    //   return average
    // },
  },
  created() {
    this.value();
  },
};
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
