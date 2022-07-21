<template>
  <section class="gig-preview">
    <div class="gig-preview-container">
      <!-- <el-card :body-style="{ padding: '0px' }">
        <img :src="gig.imgUrl" class="image" />
        <div style="padding: 14px">
          user-preview-cmp
          <span>{{ gig.title }}</span>
          <div class="bottom">
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  data() {
    return {};
  },
  methods: {
    errorHandler() {
      return true
    }
  },
  components: {
  }
}
</script>
