<template>

    <section class="trusted-by-container">
        <div class="trusted-by main-layout flex center align-center">
            <span class="trusted-by-title center">Trusted by:</span>
            <ul class="clean-list flex space-between align-center">
                <li class="">
                    <facebook-picture />
                </li>
                <li class="">
                    <google-picture />
                </li>
                <li class="">
                    <netflix-picture />
                </li>
                <li class="">
                    <pg-picture />
                </li>
                <li class="display-from-sm">
                    <paypal-picture />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import facebookPicture from './pictures/facebook-picture.vue'
import googlePicture from './pictures/google-picture.vue'
import netflixPicture from './pictures/netflix-picture.vue'
import pgPicture from './pictures/pg-picture.vue'
import paypalPicture from './pictures/paypal-picture.vue'

export default {
    name: "trusted-by",
    components: {
    facebookPicture,
    googlePicture,
    netflixPicture,
    pgPicture,
    paypalPicture,
},
  
}
</script>
