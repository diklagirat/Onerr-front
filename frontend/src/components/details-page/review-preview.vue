<template>
  <section class="review-preview">
    <!-- TODO add mini user -->
    <userPreview :user="review.by" :rate="review.rate" :isReview="true"/>
    <br><br><p>{{ review.txt }}</p>
    <article class="flex">
      <div class="helpful flex">
        <div class="svg-container">
          <helpful-icon />
        </div>
        <span>Helpful</span>
      </div>
      <div class="not-helpful flex">
        <div class="svg-container">
          <not-helpful-icon />
        </div>
        <span>Not Helpful</span>
      </div>
    </article>
  </section>
</template>

<script>
import userPreview from "../user-preview.vue"
import notHelpfulIcon from "../icons/not-helpful-icon.vue"
import helpfulIcon from "../icons/helpful-icon.vue"
export default {
  name: "review-preview",
  props: {
    review: Object,
  },
  components: {
    userPreview,
    notHelpfulIcon,
    helpfulIcon
  },
}
</script>

<style></style>
