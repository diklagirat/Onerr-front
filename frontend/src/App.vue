<template>
  <div>
    <user-msg />
    <app-header />
    <RouterView class="router-view"/>
    <app-footer />
  </div>
</template>

<script>
import userMsg from "./components/user-msg.vue"
import appHeader from "./components/app-header.vue"
import appFooter from "./components/app-footer.vue"

export default {
  components: {
    userMsg,
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" })
    this.$store.dispatch({ type: "loadUsers" })
    this.$store.dispatch({ type: "loadTags" })
    this.$store.dispatch({ type: "loadOrders" })
  },
  methods: {},
}
</script>
