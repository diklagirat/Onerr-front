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
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

 