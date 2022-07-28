<template>
    <section class="dashboard">
        <div class="dashboard-container main-layout">
            <earnings :orders="orders" />
            <h1>Manage Orders</h1>
            <div class="title flex grow">
                <h2>Padding</h2>
                <h2>On progress</h2>
                <h2>Complete</h2>
                <h2>All</h2>
            </div>
            <section class="orders-list">
                <!-- <div class="title flex grow">
                    <h2>Padding</h2>
                    <h2>On progress</h2>
                    <h2>Complete</h2>
                    <h2>All</h2>
                </div> -->
                <div>
                    <ul class="orders-list-container clean-list">
                        <li v-for="order in orders" :key="order._id">
                            <order-preview :order="order" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import earnings from "../components/earnings.vue";
import orderPreview from '../components/order-preview.vue'

export default {
    name: "dashboard",
    data() {
        return {}
    },
    created() {
    },
    computed: {
        orders() {
            return this.$store.getters.ordersToDisplay
        }
    },
    components: {
        earnings,
        orderPreview
    }
}
</script>


