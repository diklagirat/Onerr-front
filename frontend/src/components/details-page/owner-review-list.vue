<template>
  <section class="owner-review">
   <ul class="clean-list">
        <li v-for="review in reviews" :key="review.id">
            <review-preview :review="review" />
        </li>
    </ul>
  </section>
</template>

<script>
import reviewPreview from '../details-page/review-preview.vue'

export default {
    name: "owner-review",
    props: {
        reviews: Array
    },
    data() {
      return {
        percentage: 20
      }
    },
    components: {
        reviewPreview
    },
    computed: {
      format() {
         return (this.percentage === 100 ? 'Full' : `${this.percentage}%`)
      }
    },
}
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
