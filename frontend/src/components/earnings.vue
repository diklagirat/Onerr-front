<template>
  <section class="earnings">
    <h1>Earnings</h1>
    <div class="earnings-table">
      <ul class="labels-list clean-list flex wrap align-center">
        <li v-for="(label, idx) in labels" :key="idx">
          <div class="order-status">
            <h3>{{ label }}</h3>
            <p>${{ 384 * (idx + 10) }}</p>
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
        { label:"This Month Income", value: "9,489" },
        { label:"This Month Orders Completed", label},
        "Orders Pending",
      ],
    }
  },
  created() {
    //TODO: get orders in props
  },
  computed: {
    statusNum(status) {},
  },
}
</script>
