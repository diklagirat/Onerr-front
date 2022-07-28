<template>
    <div class="gig-list-filter flex align-center">
        <div class="btn-filter">
            <el-select v-model="deliveryDay" placeholder="Delivery Time" size="large">
                <el-option v-for="(item, idx) in deliveryDayOptions" :key="idx" :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="btn-filter">
            <el-select v-model="ownerLevel" class="m-2 select-option" placeholder="Seller Details" size="large">
                <el-option v-for="(item, idx) in ownerLevelOptions" :key="idx" :label="item.label"
                    :value="item.value" />
            </el-select>
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
            deliveryDay: '',
            ownerLevelOptions: [
                {
                    value: 'Top Rated Seller',
                    label: 'Top Rated'
                },
                {
                    value: 'Level 1 Seller',
                    label: 'Level One'
                },
                {
                    value: 'Level 2 Seller',
                    label: 'Level Two '
                },
                {
                    value: 'New Seller',
                    label: this.value
                },
            ],
            ownerLevel: '',

        }
    },
    mutation: {

    },
    watch: {
        deliveryDay(deliveryDay) {
            var filterBy = { ...this.$store.getters.getfilterBy }
            filterBy.deliveryDay = deliveryDay
            this.$store.commit({ type: 'setFilterBy', filterBy })
        },
        ownerLevel(ownerLevel) {
            var filterBy = { ...this.$store.getters.getfilterBy }
            filterBy.ownerLevel = ownerLevel
            this.$store.commit({ type: 'setFilterBy', filterBy })
        },
    },
}

</script>
