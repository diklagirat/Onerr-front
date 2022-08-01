<template>
  <section class="dashboard">
    <div class="dashboard-container main-layout">
      <!-- renov on buyer -->
      <earnings :orders="orders" />
      <h2 class="order-titel">Manage Orders</h2>
      <div class="title flex grow">
        <h2>Panding</h2>
        <h2>On progress</h2>
        <h2>Complete</h2>
        <h2>All</h2>
      </div>
      <section class="orders-list">
        <!-- <div class="title flex grow">
                    <h2>Padding</h2>
                    <h2>On progress</h2>
                    <h2>Complete</h2>
                    <h2>All</h2>
                </div> -->
        <div>
          <ul class="orders-list-container clean-list">
            <li>
              <div class="order-preview flex space-between">
                <h2 class="userPre">BUYER</h2>
                <h2 class="gig-title">GIG</h2>
                <h2 class="date">DUE ON</h2>
                <h2 class="price">TOTAL</h2>
                <h2 class="status">STATUS</h2>
                <!-- remove on buyer  -->
                <h2>SET</h2>
              </div>
            </li>
            <li v-for="order in orders" :key="order._id">
              <order-preview :order="order" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import earnings from "../components/earnings.vue"
import orderPreview from "../components/order-preview.vue"

export default {
  name: "dashboard",
  data() {
    return {}
  },
  created() {
    // Scroll to top of the page
    this.$store.dispatch("scrollToTop")
  },
  computed: {
    orders() {
      return this.$store.getters.ordersToDisplay
    },
  },
  components: {
    earnings,
    orderPreview,
  },
}
</script>
