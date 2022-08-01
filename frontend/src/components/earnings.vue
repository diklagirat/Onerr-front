<template>
  <section class="earnings">
    <h1>Earnings</h1>
    <div class="earnings-table">
      <ul class="labels-list clean-list flex wrap align-center">
        <li v-for="(earning, idx) in earnings" :key="idx">
          <div class="order-status flex column space-between">
            <h3>{{ earning.label }}</h3>
            <p>{{ earning.value }}</p>
          </div>
        </li>
      </ul>
      <!-- <div class="order-info all"><i class="fa-solid fa-bag-shopping"></i></div>
            <div class="order-info pending"><i class="fa-brands fa-algolia"></i></div>
            <div class="order-info complete"><i class="fa-solid fa-champagne-glasses"></i></div>
            <div class="order-info progress"><i class="fa-solid fa-spinner"></i></div>
            <div class="order-info rejected"><i class="fa-solid fa-square-xmark"></i>{{statusNum('rejected')}}</div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "earnings",
  props: ["orders"],
  data() {
    return {
      earnings: [
        { label: "This Year Income", value: "58,535" },
        { label: "This Month Income", value: "9,489" },
<<<<<<< HEAD
        { label: "This Year Orders Completed", value: "274"},
        { label: "This Month Orders Completed", value: "36"},
        { label: "Orders Pending", value: "3"}
=======
>>>>>>> 2f161f8b71b426eac5d4daac12d98e60d3bd01d0
      ],
    }
  },
  created() {
    //TODO: get orders in props
    // Set This Year Income
    // this.yearlyIncome()
  },
  computed: {
    statusNum(status) { },
  },
  methods: {
    // yearlyIncome() {
    //   console.log('this.orders', this.orders)
    //   const yearlyIncome = this.orders.reduce(
    //     (previousValue[totalPrice], currentValue[totalPrice]) => {
    //       previousValue[totalPrice] + currentValue[totalPrice], 0
    //       console.log('previousValue, currentValue',previousValue[totalPrice], currentValue[totalPrice])
    //     }
    //   )
    // this.earnings[0].value = yearlyIncome.toLocaleString()
  }
}

</script>
