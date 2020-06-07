<template>
    <div>
        图标绘制
        <el-button>下一页</el-button>

        <provinceChart />

        <horizonBar />

        <hobbyBar />

        <labelType />


        <div style="width: 100px;height: 500px;border: 1px solid #eee;">

        </div>
    </div>
</template>

<script>
    import provinceChart from './ProvinceChart'
    import horizonBar from './HorizonBar'
    import hobbyBar from './HobbyBar'
    import labelType from './LabelType'

    export default {
        name: "index",
        components: {
            provinceChart,
            horizonBar,
            hobbyBar,
            labelType
        },

        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>
