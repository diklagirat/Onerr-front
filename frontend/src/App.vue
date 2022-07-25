<template>
  <div>
    <app-header />
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
    this.$store.dispatch({ type: "loadTags" })
  },
  methods: {
  }
}
</script>

 