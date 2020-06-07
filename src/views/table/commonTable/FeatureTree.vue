<template>
    <div class="feature-tree">
        <el-row>
            <el-col :span="12">
                <div class="tree-box">
                    <div class="tree-head">全部标签</div>
                    <div class="tree-content">
                        <el-scrollbar class="scrollbar-wrapper">
                            <div class="tree-data">
                                <el-tree
                                        :data="data"
                                        show-checkbox
                                        node-key="id"
                                        @check="checkTree"
                                        :props="defaultProps"
                                        ref="leftTree"
                                >
                                </el-tree>
                            </div>
                        </el-scrollbar>
                    </div>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="tree-box">
                    <div class="tree-head">已选标签</div>
                    <div class="tree-content">
                        <el-scrollbar class="scrollbar-wrapper">
                            <div class="tree-data">
                                <el-tree
                                        :data="selectTree"
                                        show-checkbox
                                        node-key="id"
                                        default-expand-all
                                        @check="removeSelect"
                                        :props="defaultProps"
                                        ref="rightTree">
                                </el-tree>
                            </div>
                        </el-scrollbar>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {removeRepetition} from '@/utils/tools'
    export default {
        name: "FeatureTree",
        data() {
            return {
                data: [
                    {
                        id: 1,
                        pid: null,
                        label: '一级 1',
                        children: [{
                            id: 4,
                            pid: 1,
                            label: '二级 1-1',
                            children: [{
                                id: 9,
                                pid: 4,
                                label: '三级 1-1-1',
                                children: [
                                    {
                                        id: 11,
                                        pid: 9,
                                        isLeaf: 1,
                                        label: '四级 1-1-1-1'
                                    },
                                    {
                                        id: 12,
                                        pid: 9,
                                        isLeaf: 1,
                                        label: '四级 1-1-1-2'
                                    }
                                ]
                            }, {
                                id: 10,
                                pid: 4,
                                isLeaf: 1,
                                label: '三级 1-1-2'
                            },{
                                id: 13,
                                pid: 4,
                                isLeaf: 1,
                                label: '三级 1-1-3'
                            }, {
                                id: 14,
                                pid: 4,
                                isLeaf: 1,
                                label: '三级 1-1-4'
                            }]
                        }]
                    },
                    {
                        id: 2,
                        pid: null,
                        label: '一级 2',
                        children: [{
                            id: 5,
                            pid: 2,
                            isLeaf: 1,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            pid: 2,
                            isLeaf: 1,
                            label: '二级 2-2'
                        }]
                    },
                    {
                        id: 3,
                        pid: null,
                        label: '一级 3',
                        children: [{
                            id: 7,
                            pid: 3,
                            isLeaf: 1,
                            label: '二级 3-1'
                        }, {
                            id: 8,
                            pid: 3,
                            isLeaf: 1,
                            label: '二级 3-2xcxcxcx'
                        },{
                            id: 15,
                            pid: 3,
                            isLeaf: 1,
                            label: '二级 3-33333'
                        },{
                            id: 16,
                            pid: 3,
                            isLeaf: 1,
                            label: '二级 3-411111111'
                        }]
                    }
                ],
                selectTree: [],
                defaultCheckedKeys: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            }
        },
        watch: {
            selectTree: {
                handler(props){
                    this.deleteTreeParent(props)
                },
                deep: true
            }
        },
        methods: {
            nest(items, id = null, link = 'pid') {
                return  items.filter(item => item[link] === id).map(item => ({ ...item, children: this.nest(items, item.id) }))
            },

            getNewTree(nodeList) {
                let allData = [...nodeList.checkedNodes, ...nodeList.halfCheckedNodes];  //所有的数据
                allData = [...removeRepetition(allData, 'id')]; //去重
                this.selectTree = [...this.nest(allData)];  // 树结构拼接
            },

            checkTree(data, nodeList) {
                debugger
                this.getNewTree(nodeList)
                this.$refs.rightTree.setCheckedKeys(nodeList.checkedKeys)
            },

            // 删除右边树结构节点
            removeSelect(data, nodeList) {
                this.deleteTreeChildren(this.selectTree, data.id)
                // this.getNewTree(nodeList)
                this.$refs.leftTree.setCheckedKeys(nodeList.checkedKeys)
            },

            // 删除树节点(bug：只能删除子节点，当父节点下没有子节点时候删除不了)
            deleteTreeChildren(tree, id) {
                tree.forEach((item, idx)=>{
                    if(item.id === id) {
                        tree.splice(idx, 1);
                    }
                    if(item.children && item.children.length){
                        const index = item.children.findIndex(d => d.id === id);
                        if(index !== -1) {
                            item.children.splice(index, 1);
                        }else {
                            this.deleteTreeChildren(item.children, id)
                        }
                    }
                })
            },


            deleteTreeParent(tree) {
                tree.forEach((item, index)=>{
                    if(!item.children.length && !item.isLeaf){
                        tree.splice(index, 1);
                    }else {
                        this.deleteTreeParent(item.children)
                    }
                })

            },
        },
    }
</script>

<style lang="less" scoped>
    .scrollbar-wrapper{
        height: 100%;
        .el-scrollbar__wrap{
            overflow-x: hidden!important;
        }
        .tree-data {
            height: 100%;
        }
    }

    .tree-box {
        border: 1px solid #eee;
        min-width: 280px;
        margin-right: 20px;
        .tree-head {
            font-size: 16px;
            color: #404040;
            font-weight: bold;
            border-bottom: 1px solid #eee;
            padding: 10px 20px;
        }
        .tree-content {
            padding: 10px;
            height: 400px;
            overflow: hidden;
        }
    }

</style>
