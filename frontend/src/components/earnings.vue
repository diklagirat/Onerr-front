<template>
    <section class="earnings">
        <h1>Earnings</h1>
        <div class="earnings-table">
            <ul class="labels-list clean-list flex  wrap align-center">
                <li v-for="(label, idx) in labels" :key="idx">
                    <div class="order-status">
                        <h3>{{ label }}</h3>
                        <p>${{ 384 * (idx + 10) }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'earnings',
    props: ['orders'],
    data() {
        return {
            labels: ['Net Income', 'Withdrawn', 'Used For Purchases', 'Pending Clearace', 'Available for Withdrawn']
        }
    },
    created() {
        //TODO: get orders in props
    },
    computed: {

    }

}
</script>
