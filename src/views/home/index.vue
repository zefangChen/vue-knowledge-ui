<template>
    <div>
        <home-nav-bar />
        <div class="home-page-wrap">
            <h1 class="animate__animated animate__fadeInUp" style="font-size: 50px;font-weight: bolder;margin-left: 100px;">首页标题、高端大气的文字动画效果</h1>

            <el-button>下一页</el-button>

            <provinceChart />

            <horizonBar />

            <hobbyBar />

            <labelType />


            <div style="width: 100px;height: 500px;border: 1px solid #eee;">

            </div>
        </div>


    </div>
</template>

<script>
    import provinceChart from './ProvinceChart'
    import horizonBar from './HorizonBar'
    import hobbyBar from './HobbyBar'
    import labelType from './LabelType'
    import HomeNavBar from './HomeNavBar'

    export default {
        name: "index",
        components: {
            provinceChart,
            horizonBar,
            hobbyBar,
            labelType,
            HomeNavBar
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
    .home-page-wrap{
        position: relative;
        margin: 20px;
    }

</style>
