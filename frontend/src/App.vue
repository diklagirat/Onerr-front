<template>
  <div>
    <app-header />
    <RouterView />
  </div>
</template>


<script>
import AppHeader from './components/app-header.vue'

export default {
  components: {
    AppHeader,
  },
}
</script>

 