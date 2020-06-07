<template>
    <div class="HeaderNav">
        <div class="head-content">
            <div class="left-nav">
                <i class="fold-icon el-icon-s-unfold" v-if="isCollapse" @click="isCollapseMenu"></i>
                <i class="fold-icon el-icon-s-fold" v-else @click="isCollapseMenu"></i>
            </div>

            <div class="right-menu">
                <!--<screenfull></screenfull>-->
                <i class="fold-icon marl-10 el-icon-eleme" title="滚动面包屑" v-if="!isScrollHead" @click="isHandleScrollHead"></i>
                <i class="fold-icon marl-10 el-icon-platform-eleme" title="停止滚动面包屑" v-else @click="isHandleScrollHead"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Screenfull from '@/components/Screenfull'
    export default {
        name: "HeaderNav",
        components: {
            Screenfull
        },
        computed: {
            ...mapState({
                isCollapse: ({app}) => app.isCollapse,
                isScrollHead: ({app}) => app.isScrollHead
            })
        },
        methods: {
            ...mapActions({
                toggleSideBar: 'toggleSideBar',
                handleScrollHead: 'handleScrollHead'
            }),
            isCollapseMenu(){
                this.toggleSideBar()
            },
            isHandleScrollHead() {
                this.handleScrollHead()
            },

        }
    }
</script>

<style lang="less" scoped>
    .HeaderNav{
        width: 100%;
        .head-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .marl-10 {
                margin-left: 10px;
            }
            .fold-icon{
                font-size: 26px;
                color: #409EFF;
                cursor: pointer;
            }

            .left-nav{

            }
            .right-menu{
                min-width: 100px;
            }

        }
    }
</style>
