<template>
    <div>
        常规表格
        <el-row>
            <el-col :span="6" style="margin: 20px;">
                <div class="left-tree">
                    <el-tree
                            :props="props"
                            :load="loadNode"
                            lazy
                            show-checkbox
                            @check-change="handleCheckChange">
                    </el-tree>
                </div>
            </el-col>

            <el-col :span="16" style="margin: 20px;">
                <div class="table-wrap">
                    <div class="table-head">
                        <span>用户列表</span>
                        <div class="handler-btn">
                            <span><i class="el-icon-view"></i></span>
                            <el-button size="small" @click="dialogVisible = true">标签树</el-button>
                        </div>
                    </div>

                    <div class="table-content">
                        <el-table :data="tableData" border stripe style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
                            <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
                            <el-table-column prop="age" label="年龄" width="180" align="center"></el-table-column>
                            <el-table-column prop="mobile" label="手机号" width="180" align="center"></el-table-column>
                            <el-table-column prop="address" label="地址" align="center"></el-table-column>
                        </el-table>

                        <div class="page-container">
                            <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="1000">
                            </el-pagination>
                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>

        <el-dialog
                title="标签树"
                :visible.sync="dialogVisible"
                :close-on-click-modal="false"
                width="800px"
                >
            <div>
                <FeatureTree />
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import FeatureTree from './FeatureTree'

    export default {
        name: "index",
        components: {
            FeatureTree
        },
        data() {
            return {
                dialogVisible: false,
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1,
                tableData: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    age: 18,
                    mobile: '123457855',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    age: 22,
                    mobile: '123457855',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    age: 25,
                    mobile: '123457855',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    age: 30,
                    mobile: '123457855',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                comments : [
                    { id: 1, pid: null },
                    { id: 2, pid: 1 },
                    { id: 3, pid: 1 },
                    { id: 4, pid: 2 },
                    { id: 5, pid: 4 }
                ],
            }
        },
        mounted() {
            console.log(1222, this.nest(this.comments))
        },
        methods: {
            nest(items, id = null, link = 'pid') {
              return  items
                    .filter(item => item[link] === id)
                    .map(item => ({ ...item, children: this.nest(items, item.id) }))
            },



            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: 'region1'}, {name: 'region2'}]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            }

        }
    }
</script>

<style lang="less" scoped>
    /deep/ .el-table th{
        background-color: #cdcdcd !important;
        color: #404040;
    }

    .table-wrap{
        background-color: #fff;
        color: #404040;
        height: auto;
        padding-bottom: 20px;
        .table-head{
            display: flex;
            justify-content: space-between;
            padding-right: 30px;
            border-bottom: 1px solid #EBEEF5;
            min-height: 50px;
            line-height: 50px;
            padding-left: 20px;
            font-size: 16px;
            font-weight: bold;
            .handler-btn span{
                margin-right: 20px;

            }
        }
        .table-content{
            margin: 20px;
        }
        .page-container{
            margin-top: 20px;
            text-align: right;
        }

    }
</style>
