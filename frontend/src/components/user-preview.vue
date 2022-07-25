<template>
  <section class="user-preview">
    <div v-if="user" class="gig-preview-user flex align-center">
      <img :src="user.imgUrl" class="user-image" />
      <div class="user-info">
        <a class="name">{{ user.fullname }}</a>
        <span class="level" :class="[this.isTopRated ? 'topRated' : '']">{{
          user.level
        }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "user-preview",
  props: {
    user: Object,
  },
  data() {
    return {
      isTopRated: this.user.level === 'Top Rated Seller' ? true : false
    }
  },

}
</script>

<style></style>
