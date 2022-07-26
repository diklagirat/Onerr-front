<template>
  <section class="owner-about">
    <h1>About The Owner</h1>
    <user-preview :user="owner" :isOwnerDetails="true"/>
    <div class="about-container">
      <ul class="owner-stats clean-list flex wrap">
        <li>
          From<strong>{{ owner.state }}</strong>
        </li>
        <li>
          Member since<strong>{{ owner.created }}</strong>
        </li>
        <li>
          Avg. response time<strong>{{ owner.responseTime }}</strong>
        </li>
        <li>
          Last delivery<strong>{{ owner.LastDelivery }}</strong>
        </li>
      </ul>
      <article>{{ owner.description }}</article>
    </div>
    <!-- <pre>{{ owner }}</pre> -->
  </section>
</template>

<script>
import userPreview from '../user-preview.vue'
export default {
  name: "owner-about",
  props: {
    owner: Object,
  },
  mounted() {
    // console.log('this.owner',this.owner)
  },
  components: {
    userPreview
  }
}
</script>

<style></style>
