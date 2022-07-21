<template>
  <section class="gig-preview">
    <div class="gig-preview-container">
      <div class="gig-preview-header">
        <img :src="gig.imgUrl" class="gig-image" />
      </div>

      <div class="gig-preview-content">
        <div class="gig-preview-owner">
          <img :src="gig.owner.imgUrl" class="owner-image" />
          <div class="owner-info">
            <strong>nauman_khalid99 </strong>
            <strong>Level 2 Seller
            </strong>
          </div>
          <!-- <div> TODO: ADD heart</div> -->
        </div>
        <h3 class="gig-preview-title">I will draw architectural house plan using cad for city submission</h3>
        <!-- <p>TODO: add rate</p> -->

      </div>



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