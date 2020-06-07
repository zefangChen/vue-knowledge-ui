<template>
    <div>
        <!--手动添加的高度变化-->
        <div style="margin: 20px;">
            <h3>手动添加的高度变化</h3>
            <el-carousel trigger="click" :height="carouselHeight" :autoplay="false" arrow="never" @change="changeEvent">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div :ref="'carouselItem'+item">
                        <h3 class="small">第{{ item }}页</h3>
                        <el-button @click="add(item)">点击添加</el-button>
                        <br />
                        <div  v-for="(item1, index) in inputArr">
                            <el-input
                                    v-model="item1.label"
                                    size="small"
                                    style="width: 60%;margin: 20px;"
                            ></el-input>
                            <i class="el-icon-delete" title="删除" style="cursor: pointer;" @click="deleteInput(index, item)"></i>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div style="margin: 20px;">
            <h3>加载时候的高度不同</h3>
            <el-carousel trigger="click" :height="carouselHeight2" :autoplay="false" arrow="never" @change="changeEvent2">
                <el-carousel-item v-for="(item, index) in itemContent" :key="index">
                    <div :ref="'carouselItem2'+index">
                        <h3 class="small">第{{ index + 1 }}页</h3>
                        <div :style="{background: item.background, height: item.height,textAlign: 'center'}"></div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div style="margin: 20px;">
            <h3>倒计时5秒</h3>
            <el-button @click="startCount">开始倒计时</el-button>
            <div style="color: red; font-size: 20px;font-weight: bold;margin: 20px;">{{count}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                inputArr: [],
                carouselHeight: '300px',
                carouselHeight2: '300px',
                itemContent: [
                    { label: '400px', height: '400px', background: 'red'},
                    { label: '500px', height: '500px', background: 'green'},
                    { label: '600px', height: '600px', background: 'blue'},
                    { label: '800px', height: '800px', background: 'yellow'}
                ],
                count: '',//倒计时
            }
        },
        mounted() {
            // 一开始渲染结束给高度赋值
            this.$nextTick(()=>{
                this.carouselHeight2 =  this.$refs['carouselItem20'][0].offsetHeight + 20 + 'px';
            })
        },
        methods: {
            add(index) {
                this.inputArr.push({
                    label: '1111',
                    value: this.inputArr.length + 1
                })

                this.$nextTick(()=>{
                    this.carouselHeight = this.$refs['carouselItem'+index][0].offsetHeight + 20 + 'px'
                })
            },

            deleteInput(index, currentPageIndex) {
                this.inputArr = [...this.inputArr.filter((item, index1) => index !== index1)]
                this.$nextTick(()=>{
                    this.carouselHeight = this.$refs['carouselItem'+currentPageIndex][0].offsetHeight + 20 + 'px'
                })
            },

            // 翻一页高度自适应
            changeEvent(val) {
                let index = val +1
                this.carouselHeight =  this.$refs['carouselItem'+index][0].offsetHeight + 20 + 'px';
            },

            changeEvent2(val) {
                this.carouselHeight2 =  this.$refs['carouselItem2'+val][0].offsetHeight + 20 + 'px';
            },

            startCount(){
                const TIME_COUNT = 5;
                if(!this.timer){
                    this.count = TIME_COUNT;
                    this.timer = setInterval(()=>{
                        if(this.count > 0 && this.count <= TIME_COUNT){
                            this.count--;
                        }else{
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    },1000)
                }
            },
        }
    }
</script>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
