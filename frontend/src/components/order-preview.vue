<template>
    <div v-if="order" class="order-preview  flex space-between ">
        <!-- <div v-if="order" class="order-preview table-row "> -->
        <UserPreview class="userPre" :user="order.buyer" :isDashboard="true"/>
        <h2 class="gig-title">{{ order.gigs[0].name }}</h2>
        <h2 class="date">{{ order.toDate }}</h2>
        <h2 class="price">${{ order.totalPrice }}</h2>
        <button class="btn-basic" :class="statusColor">{{ order.status }}</button>

        <div class="btn-filter" v-if="isSelected">
            <el-select v-model="status" class="m-2 select-option" placeholder="Order status" size="large">
                <el-option v-for="(status, idx) in orderStatus" :key="idx" :label="status" :value="status" />
            </el-select>
        </div>
        <span class="more-btn" @click="toggleSelect"><i class="fas fa-ellipsis-v"></i></span>

    </div>
</template>

<script>
import UserPreview from "../components/user-preview.vue";
export default {

    name: 'order-preview',
    props: {
        order: Object
    },
    data() {
        return {
            isSelected: false,
            orderStatus: ['rejected', 'pending', 'on progress', 'complete'],
            status: this.order.status
        }
    },
    created() {
    },
    methods: {
        toggleSelect() {
            this.isSelected = !this.isSelected
        }
    },
    components: {
        UserPreview
    },
    watch: {
        status(status) {
            var orderToEdit = { ...this.order }
            orderToEdit.status = status
            this.isSelected = !this.isSelected
            this.$store.dispatch({ type: 'saveOrder', orderToEdit })
        },
    },
    computed: {
        statusColor() {
            return this.order.status === 'on progress' ? 'on-progress' : this.order.status
        }
    }
}
</script>
