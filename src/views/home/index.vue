<template>
    <div>
       <h1 class="animate__animated animate__fadeInUp" style="font-size: 50px;font-weight: bolder;margin-left: 100px;">首页标题、高端大气的文字动画效果</h1>

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
