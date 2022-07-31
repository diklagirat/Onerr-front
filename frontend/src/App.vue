<template>
  <div>
    <user-msg />
    <app-header />
    <login v-if="isLoading" />
    <RouterView v-else class=" router-view" />
    <app-footer />
  </div>
</template>

<script>
import userMsg from "./components/user-msg.vue"
import appHeader from "./components/app-header.vue"
import appFooter from "./components/app-footer.vue"
import login from "./components/login.vue"
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  components: {
    userMsg,
    appHeader,
    appFooter,
    login
  },
  created() {
    this.isLoggedIn = this.$store.getters.getIsLoading
    this.$store.dispatch({ type: "loadGigs" })
    // this.$store.dispatch({ type: "loadUsers" })
    this.$store.dispatch({ type: "loadTags" })
    this.$store.dispatch({ type: "loadOrders" })
  },
  methods: {

  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading
    }
  }
}
</script>
