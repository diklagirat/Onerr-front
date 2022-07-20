<template>
  <section class="gig-preview">
    <div class="gig-preview-container">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="gig.imgUrl" class="image" />
        <div style="padding: 14px">
          <!-- user-preview-cmp -->
          <span>{{ gig.title }}</span>
          <div class="bottom">
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
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
};
</script>
<style>

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.gig-preview-container {
  width: 324px;
  height: 397px;
}
</style>
