<template>
    <section class="manage-orders">
        <div class="manage-orders-container main-layout">
            <earnings :orders="orders" />
            <section class="orders-list">
                <div class="title flex grow">
                    <h2>Padding</h2>
                    <h2>On progress</h2>
                    <h2>Complete</h2>
                    <h2>All</h2>
                </div>
                <ul class="orders-list-container clean-list ">
                    <li v-for="order in orders" :key="order._id">
                        <div v-if="order" class="order-preview flex space-between baseline">
                            <!-- <order-preview :order="order" /> -->
                            <UserPreview :user="order.buyer" />
                            <h2 class="gig-title">{{ order.gigs[0].name }}</h2>
                            <h2>{{ order.toDate }}</h2>
                            <!-- <h2>{{ order.deliveredAt }}</h2> -->
                            <h2>${{ order.totalPrice }}</h2>
                            <button>{{ order.status }}</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<script>
import earnings from "../components/earnings.vue";
import UserPreview from "../components/user-preview.vue";
export default {
    name: "manage-orders",
    data() {
        return {}
    },
    created() {
        console.log(this.orders)
        //TODO: get all ordes sum from store + get orders in props
    },
    computed: {
        orders() {
            return this.$store.getters.ordersToDisplay
        }
    },
    components: { earnings, UserPreview }
}
</script>
<style lang="scss" scoped>
.orders-list {
    margin-bottom: 20px;
    border: 1px solid #e4e5e7;

    .title {
        h2 {
            font-size: 21px;
            font-family: Macan-Bold;
            padding-right: 30px;

            // border-bottom: 1px solid #e4e5e7;
            &:hover {
                color: #1dbf73;
                cursor: pointer;
            }

            &.active {
                color: #1dbf73;
            }
        }

        border-bottom: 1px solid #e4e5e7;
        padding: 20px 15px;
    }
}

.order-preview {
    padding: 20px 15px;
    border-bottom: 1px solid #e4e5e7; //TODO: :not(:last-child)

    .gig-title {
        overflow: hidden;
        max-width: 55ch;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>

