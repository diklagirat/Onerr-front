<template>




<AirbnbRating
  count={11}
  
/>


<!-- <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/> -->

<!-- <Rating
  type='heart'
  ratingCount={3}
  imageSize={60}
  showRating
  onFinishRating={this.ratingCompleted}
/> -->

<!-- <Rating
  type='custom'
  ratingImage={WATER_IMAGE}
  ratingColor='#3498db'
  ratingBackgroundColor='#c8c7c8'
  ratingCount={10}
  imageSize={30}
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/> -->
</template>

<script>
//  import { Rating, AirbnbRating } from 'react-native-ratings';
// const WATER_IMAGE = require('./water.png')

// ratingCompleted(rating) {
//   console.log("Rating is: " + rating)
// }
export default {
  name: "stars-rating",
  props: {
    rate: Number,
  },
  computed: {
    value() {
      return this.rate
    },
  },
  created() {
  },

}
</script>

<style></style>
