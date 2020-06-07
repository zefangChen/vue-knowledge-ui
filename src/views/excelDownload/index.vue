<template>
    <div>
        <h5>把excel模板放到前端醒目的static文件夹中，纯前端获取文件下载</h5>
        <a :href="downloadTemplate">下载模板</a>
        <!--<el-button @click="downloadTemplate">下载模板</el-button>-->
    </div>
</template>

<script>
    export default {
        name: "index",
        computed: {
            downloadTemplate() {
                // return location.host+'/static/excel/template'
            },
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
