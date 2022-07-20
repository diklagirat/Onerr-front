<template>
  <div>
    <el-container>
      <app-header />
      <RouterView />
      <app-footer />
    </el-container>

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
  },
}
</script>

 