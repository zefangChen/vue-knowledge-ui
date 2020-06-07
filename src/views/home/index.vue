<template>
    <div>
        图标绘制
        <provinceChart />

        <horizonBar />

        <hobbyBar />

        <labelType />


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
    }
</script>

<style scoped>

</style>
