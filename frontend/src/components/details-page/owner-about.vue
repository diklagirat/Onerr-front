<template>
  <section class="owner-about">
    <h1>About The Owner</h1>
    <p style="background-color: yellow">Here come's user-preview comonent</p>
    <div class="about-container">
      <ul class="owner-stats">
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
export default {
  name: "owner-about",
  props: {
    owner: Object,
  },
  mounted() {
    console.log('this.owner',this.owner)
    
  },
}
</script>

<style></style>
