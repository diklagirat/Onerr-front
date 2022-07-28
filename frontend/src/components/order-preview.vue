<template>
    <div v-if="order" class="order-preview  flex space-between ">
        <!-- <div v-if="order" class="order-preview table-row "> -->
        <UserPreview :user="order.buyer" />
        <h2 class="gig-title">{{ order.gigs[0].name }}</h2>
        <h2>{{ order.toDate }}</h2>
        <h2>${{ order.totalPrice }}</h2>
        <button>{{ order.status }}</button>
    </div>
</template>

<script>
import UserPreview from "../components/user-preview.vue";

export default {

    name: 'order-preview',
    props: {
        order: Object
    },
    created() {
    },
    components: {
        UserPreview
    }
}
</script>
