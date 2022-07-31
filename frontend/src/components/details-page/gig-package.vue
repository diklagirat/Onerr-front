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
        <!-- <router-link to="/explore" class="clean-link"> -->
        <button class="btn-basic" @click.prevent="addOrder">
          Continue (${{ gig.packageDetails.price }})
        </button>
        <!-- </router-link> -->
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

    addOrder() {
      const buyer = { ...this.$store.getters.getloggedinUser }
      console.log('buyer', buyer)
      console.log('seller', buyer)
      const orderToAdd = {
        createdAt: Date.now(),
        deliveredAt: Date.now(),
        totalPrice: this.gig.price,
        status: "pending",
        buyer: {
          _id: buyer._id,
          fullname: buyer.fullname,
          imgUrl: buyer.imgUrl
        },
        seller: {
          _id: this.gig.owner._id,
          fullname: this.gig.owner.fullname,
          imgUrl: this.gig.owner.imgUrl
        },
        gigs: [
          {
            _id: this.gig._id,
            name: this.gig.title,
            amount: 1
          }
        ]
      }
      console.log('orderToAdd', orderToAdd)
      this.$store.dispatch({ type: 'saveOrder', orderToEdit: orderToAdd })
      showSuccessMsg('Order submited')
    }
  },
}
</script>