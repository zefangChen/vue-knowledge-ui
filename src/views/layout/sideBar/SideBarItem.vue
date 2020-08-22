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
            </el-submenu>

            <!--一层-->
            <el-menu-item :index="item.path" v-else v-show="!item.hidden" @click="goRouter(item.name)">
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
        methods: {
            goRouter(name) {
                this.$router.push({name})
            }
        }
    }
</script>

<style scoped>

</style>
