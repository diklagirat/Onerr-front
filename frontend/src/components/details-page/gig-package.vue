<template>
  <section class="gig-package">
    <div class="gig-package-container">
      <header>
        <div class="titel flex space-between">
          <h1>PACKEGE DETAILS</h1>
          <h3>${{ gig.packageDetails.price }}</h3>
        </div>
        <div class="second-titel">
          <h1>{{ gig.packageDetails.title }}</h1>
        </div>
      </header>
      <article>
        <div class="additional-info flex align-center">
          <package-delivery-icon />
          <h3>{{ gig.packageDetails.daysToMake }} Days Delivery</h3>
          <div class="revisions flex align-center">
            <package-revisions-icon />
            <h3>2 Revisions</h3>
          </div>
        </div>
        <ul class="clean-list">
          <li class="flex align-center" v-for="feature in gig.packageDetails.features" :key="feature">
            <package-v-icon />
            <h1>{{ feature }}</h1>
          </li>
        </ul>
      </article>
      <footer>
        <router-link to="/" class="clean-link">
          <button class="btn-basic">
            Continue (${{ gig.packageDetails.price }})
          </button>
        </router-link>
      </footer>
    </div>
  </section>
</template>

<script>
import packageDeliveryIcon from "../icons/package-delivery-icon.vue"
import packageRevisionsIcon from "../icons/package-revisions-icon.vue"
import packageVIcon from "../icons/package-v-icon.vue"
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
  name: "gig-package",
  props: {
    gig: Object,
  },
  data() {
    return {}
  },
  components: {
    packageDeliveryIcon,
    packageRevisionsIcon,
    packageVIcon,
  },
  methods: {
    // setOrder() {
    //   const order = {
    //     totalPrice: this.gig.price,
    //     buyer: 'loggedinUser',
    //     seller: this.gig.owner,
    //     gig: {
    //       _id: this.gig._id,
    //       name: this.gig.name,
    //       amount: 2
    //     }
    //   }
    // },

  },
}
</script>
