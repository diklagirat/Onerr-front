<template>
  <div v-if="length" class="stars-rate flex">
    <div v-if="length === 5">
      <span
        v-for="idx in 5"
        class="fa fa-star"
        v-bind:class="{ fill: value(idx) }"
        :key="idx"
      ></span>
    </div>
    <span v-else class="fa fa-star fill"></span>
    <span class="value">{{ rate }}</span>
  </div>
</template>

<script>
export default {
  name: "stars-rating",
  props: {
    rate: Number,
    length: Number,
  },
  methods: {
    value(star) {
      if (this.rate >= star) return true
      return false
    },
  },
}
</script>

<style></style>
