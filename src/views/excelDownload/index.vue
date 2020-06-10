<template>
    <div>
        <h5>把excel模板放到前端醒目的static文件夹中，纯前端获取文件下载</h5>
        <a :href="downloadTemplate">下载模板</a>
        <!--<el-button @click="downloadTemplate">下载模板</el-button>-->


        <div class="container" style="background-color: #2672ff;width: 100%;">
            <div class="row">
                <div class="col-8">
                    One of three columns
                </div>
                <div class="col-4">
                    One of three columns
                </div>
            </div>
        </div>
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
