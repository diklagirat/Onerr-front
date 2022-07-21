<template>
  <section class="gig-feature flex">
    <i class="fas fa-check" aria-hidden="true"></i>
    <h1>{{ feature }}</h1>
  </section>
</template>

<script>
export default {
  name: "gig-feature",
  props: {
    feature: String,
  },
};
</script>

<style></style>
