<template>
    <div>
        <template v-for="item in routes">
            <!--多层-->
            <el-submenu :index="item.path" v-if="item.children && item.children.length">
                <template slot="title">
                    <i :class="item.icon" v-if="item.icon"></i>
                    <i class="el-icon-menu" v-else></i>
                    <span slot="title">{{item.meta.title}}</span>
                </template>

                <sideBarItem :routes="item.children"></sideBarItem>
             <!--   <template v-for="(child, childIndex) in item.children">
                    <el-menu-item :index="item.path">{{child.meta.title}}</el-menu-item>
                </template>-->
            </el-submenu>

            <!--一层-->
            <el-menu-item :index="item.path" v-else>
                <i :class="item.icon" v-if="item.icon"></i>
                <i class="el-icon-star-off" v-else></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "sideBarItem",
        props: {
            routes: {
                type: Array,
                required: true
            }
        },
        computed: {
            ...mapState({
                isCollapse: ({app}) => app.isCollapse
            }),
        },
    }
</script>

<style scoped>

</style>
