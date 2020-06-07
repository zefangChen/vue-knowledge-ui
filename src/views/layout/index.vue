<template>
    <div class="app-wrapper">
        <el-container>
            <!--左边菜单-->
            <SideBar></SideBar>
            <el-container class="app-main">
                <el-header v-if="!isScrollHead">
                    <HeaderNav></HeaderNav>
                </el-header>
                <el-scrollbar class="scrollbar-wrapper">
                    <div class="all-content">
                        <el-header v-if="isScrollHead">
                            <HeaderNav></HeaderNav>
                        </el-header>
                        <el-main>
                            <AppMain></AppMain>
                        </el-main>
                    </div>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import SideBar from './sideBar/SideBar'
    import HeaderNav from './HeaderNav'
    import AppMain from './AppMain'
    import {mapState} from 'vuex'

    export default {
        name: "index",
        components: {
            SideBar,
            HeaderNav,
            AppMain
        },
        computed: {
            ...mapState({
                isScrollHead: ({app}) => app.isScrollHead
            })
        },

    }
</script>

<style lang="less" scoped>
    .app-wrapper{
        position: relative;
        width: 100%;
        /*height: 100%;*/
        height: calc(100vh);
        overflow: hidden;
        .el-container {
            height: calc(100vh);
        }
        .app-main {
            height: calc(100vh);
            background-color: #E9EEF3;
        }
        .el-header{
            background-color: #fff;
            color: #333;
            text-align: left;
            line-height: 50px;
            display: flex;
            align-items: center;
        }

        .el-main {
            /*background-color: #E9EEF3;*/
            color: #333;
            text-align: left;
        }

        .scrollbar-wrapper{
            width: 100%;
            height: 100%;
            .el-scrollbar__wrap{
                overflow-x: hidden!important;
            }
            .all-content {
                height: 100%;
            }
        }
    }

</style>
