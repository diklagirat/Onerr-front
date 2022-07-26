<template>
  <section class="gig-header">
    <div class="gig-header-container">
      <p>{{ gig.title }}</p>
      <user-preview :user="gig.owner" :isHeader="true"/>
    </div>
  </section>
</template>

<script>
import userPreview from "../user-preview.vue"

export default {
  name: "gig-header",
  props: {
    gig: Object,
  },
  components: {
    userPreview,
  },
}
</script>
