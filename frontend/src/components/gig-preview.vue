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
        <div class="gig-rate-container">
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
              <path fill="currentColor"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
              </path>
            </svg>4.9</span>
          <span class="rate-sum">(477)</span>
        </div>
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