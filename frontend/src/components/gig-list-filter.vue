<template>
    <div class="gig-list-filter flex align-center">
        <div class="btn-filter">
            <el-select v-model="deliveryDay" class="m-2 select-option" placeholder="Delivery Time" size="large">
                <el-option v-for="item in deliveryDayOptions" :key="item.value" :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="btn-filter">
            <el-select v-model="ownerLevel" class="m-2 select-option" placeholder="Seller Details" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="btn-filter">
            <!-- <el-select v-model="value" class="m-2 select-option" placeholder="Budget" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> -->
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            deliveryDayOptions: [
                {
                    value: 1,
                    label: 'Express 24H'
                },
                {
                    value: 3,
                    label: 'Up to 3 days'
                },
                {
                    value: 7,
                    label: 'Up to 7 days'
                },
                {
                    value: '',
                    label: 'Anytime'
                }],
            deliveryDay: ''

        }
    },
    mutation: {


    },
    watch: {
        deliveryDay(deliveryDay) {
            // click on label change state filterBy on store
            var filterBy = { ...this.$store.getters.getfilterBy }
            filterBy.deliveryDay = deliveryDay
            this.$store.commit({ type: 'setFilterBy', filterBy })
        },
    },
}

</script>
