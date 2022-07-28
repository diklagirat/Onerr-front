<template>
  <section v-if="images" class="gig-image">
    <vueper-slides
      ref="vueperslides1"
      :touchable="false"
      fade
      :autoplay="false"
      :bullets="false"
      @slide="
        $refs.vueperslides2.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
      fixed-height="400px"
    >
      <vueper-slide
        v-for="(image, i) in images"
        :key="i"
        :image="image"
      />
    </vueper-slides>

    <vueper-slides
      class="no-shadow thumbnails"
      ref="vueperslides2"
      @slide="
        $refs.vueperslides1.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
      :visible-slides="6"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="2.5"
      :arrows="false"
    >
      <vueper-slide
        v-for="(image, i) in images"
        :key="i"
        :image="image"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

export default {
  props: {
    images: Array,
  },
  data() {
    return {
      slides: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f6a1514779a0e777fb5f785a39c85816-1648468392711/cf54e7b9-0101-4f51-b334-1a7dbec9d0ef.jpg",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f6a1514779a0e777fb5f785a39c85816-1648468392711/cf54e7b9-0101-4f51-b334-1a7dbec9d0ef.jpg",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f6a1514779a0e777fb5f785a39c85816-1648468392711/cf54e7b9-0101-4f51-b334-1a7dbec9d0ef.jpg",
        },
      ],
    }
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
}
</script>

<style>

</style>
