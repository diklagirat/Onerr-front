<template>
  <div>
      <app-header @setFilter="setFilter" />
      <RouterView />
      <app-footer />
  </div>
</template>


<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'

export default {
  components: {
    appHeader,
    appFooter
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" })
    this.$store.dispatch({ type: "loadUsers" })
  },
  methods: {
    setFilter(filter) {
      console.log('filter inside app.vue')
      filter = JSON.parse(JSON.stringify(filter))
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter })
    },
  }
}
</script>

 