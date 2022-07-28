<template>
  <el-rate
    v-if="rate"
    v-model="rate"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value}"
  />
</template>

<script>
export default {
  name: "stars-rating",
  props: {
    rate: Number,
  },
  computed: {
    value() {
      return this.rate
    },
  },
  created() {
  },
}
</script>

<style></style>
