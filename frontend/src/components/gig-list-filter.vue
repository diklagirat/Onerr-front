<template>
    <div class="gig-list-filter flex align-center">
        <div class="btn-filter">
            <el-select v-model="value" class="m-2 select-options" placeholder="Delivery Time" size="large" style="">
                <el-option>
                    <el-radio-group v-model="radio1" class="ml-4">
                        <el-radio label="1" size="large">Express 24H</el-radio>
                        <el-radio label="2" size="large">Up to 3 days</el-radio>
                        <el-radio label="3" size="large">Up to 7 days</el-radio>
                        <el-radio label="4" size="large"> Anytime</el-radio>
                    </el-radio-group>
                </el-option>
            </el-select>
        </div>
        <div class="btn-filter">
            <el-select v-model="value" class="m-2 select-option" placeholder="Seller Details" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="btn-filter">
            <el-select v-model="value" class="m-2 select-option" placeholder="Budget" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>


    </div>
</template>

<script>

export default {

    data() {
        return {
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ]

        }
    },

}

</script>
