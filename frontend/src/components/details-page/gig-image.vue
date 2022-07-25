<template>
  <section v-if="images" class="gig-image">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="image in images" :key="image">
        <img text="2xl" justify="center" :src="images" alt="" />
      </el-carousel-item>
    </el-carousel>
    <template>
</template>

  </section>
</template>

<script>
export default {
  props: {
    images: Array,
  },
}
</script>

<style></style>
