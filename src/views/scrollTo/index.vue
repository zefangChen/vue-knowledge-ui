<template>
    <div class="wrap">
        <h1>锚点定位</h1>
        <div class="left" ref="leftContent">
            <div
                class="content"
                v-for="{color,value} in contentList"
                :style="{'background-color': color}"
                :key="value"
                :ref="'content' + value"
            >
                {{value}}
            </div>

        </div>
        <div class="right">
            <div style="margin-bottom: 20px;">
                <el-button v-waves type="primary" @click="jumpBottom">滑到底部</el-button>
                <el-button v-waves type="primary" @click="jumpTop">滑到顶部</el-button>
                <div class="pan-btn blue-btn" @click="">效果按钮</div>
            </div>

            <div
                class="menu"
                v-for="{label, value} in menuList"
                @click="jump(value)"
                :key="value"
                :ref="'menu' + value"
            >
                {{label}}
            </div>
        </div>


    </div>
</template>

<script>
    import waves from '@/views/directive/waves/index.js' // 水波纹指令
    export default {
        name: "index",
        directives: {
            waves
        },
        data(){
            return {
                menuList : [
                    {label: '菜单一', value: 1},
                    {label: '菜单二', value: 2},
                    {label: '菜单三', value: 3},
                    {label: '菜单四', value: 4}
                ],
                contentList: [
                    {color: 'red', value: 1},
                    {color: 'blue', value: 2},
                    {color: 'yellow', value: 3},
                    {color: 'green', value: 4}
                ]
            }
        },
        mounted(){
            // this.$refs.leftContent.addEventListener('scroll', this.scroll)  //监听容器的滚动条

            window.addEventListener('scroll', this.handleScroll, true)

        },
        methods: {
            handleScroll() {
                this.$nextTick(()=>{n
                    let top = document.body.scrollHeight || document.documentElement.scrollHeight;
                    console.log(555,top)
                })
            },

            scroll(){
                let scrollHeight = this.$refs.leftContent.scrollTop;
                this.menuList.forEach(item=>{
                    this.$refs['menu' + item.value][0].className = 'menu'
                });

                if(scrollHeight >= 0  && scrollHeight < 807) {
                    this.$refs['menu1'][0].className = 'menu active-menu'
                }else if(scrollHeight >= 807  && scrollHeight < 1600) {
                    this.$refs['menu2'][0].className = 'menu active-menu'
                }else if(scrollHeight >= 1614  && scrollHeight < 2080) {
                    this.$refs['menu3'][0].className = 'menu active-menu'
                }else if(scrollHeight >= 2080) {
                    this.$refs['menu4'][0].className = 'menu active-menu'
                }
            },
            jump (index) {
                let that = this;
                let total = this.$refs['content'+index][0].offsetTop;
                let step = total / 50; // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let distance = this.$refs.leftContent.scrollTop;

                if (total > distance) {
                    smoothDown()   //往下
                } else {
                    let newTotal = distance - total;
                    step = newTotal / 50;
                    smoothUp()  //往上
                }

                function smoothDown () {
                    if (distance < total) {
                        distance += step;
                        // 移动一小段
                        that.$refs.leftContent.scrollTop = distance;
                        // 设定每一次跳动的时间间隔为10ms
                        setTimeout(smoothDown, 10)
                    } else {
                        // 限制滚动停止时的距离
                        that.$refs.leftContent.scrollTop = total;  //滚动到对应的位置
                    }
                }

                function smoothUp() {
                    if (distance > total) {
                        distance -= step;
                        that.$refs.leftContent.scrollTop = distance;
                        setTimeout(smoothUp, 10)
                    } else {
                        that.$refs.leftContent.scrollTop = total;  //滚动到对应的位置
                    }
                }
            },

            jumpBottom() {
                // 方法一：无动画效果
                // this.$refs.leftContent.scrollTop = this.$refs.leftContent.scrollHeight;

                //方法二：有动画，慢慢滑动效果
                let that = this;  //有匿名函数，所以需要转换
                let total = this.$refs.leftContent.scrollHeight;
                let step = total / 50;// 平滑滚动，时长500ms，每10ms一跳，共50跳
                let distance = this.$refs.leftContent.scrollTop;

                 (function smoothDown () {
                     if (distance < total) {
                         distance += step;
                         that.$refs.leftContent.scrollTop = distance;  // 移动一小段
                         setTimeout(smoothDown, 15)  // 设定每一次跳动的时间间隔为10ms
                     } else {
                         // 限制滚动停止时的距离
                         that.$refs.leftContent.scrollTop = total;  //滚动到对应的位置
                     }
                 })()
            },

            jumpTop() {
                // 方法一：无动画效果
                // this.$refs.leftContent.scrollTop = 0;

                //方法二：有动画，慢慢滑动效果
                let that = this;  //有匿名函数，所以需要转换
                let total = 0;
                let step = total / 50;  // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let distance = this.$refs.leftContent.scrollTop;

                let newTotal = distance - total;
                step = newTotal / 50;

                (function smoothUp() {
                    if (distance > total) {
                        distance -= step;
                        that.$refs.leftContent.scrollTop = distance;
                        setTimeout(smoothUp, 10)
                    } else {
                        that.$refs.leftContent.scrollTop = total;  //滚动到对应的位置
                    }
                })()

            },
        }

    }
</script>

<style scoped>
    .wrap{
        overflow: hidden;
    }
    .content{
        width: 600px;
        height: 800px;
        background-color: aquamarine;
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    .left{
        /*height: 1200px;*/
        max-width: 700px;
        /*overflow-y: auto;*/
    }
    .right{
        position: fixed;
        top: 100px;
        right: 0;
    }
    .menu{
        padding: 10px 50px;
        margin-bottom: 20px;
        width: 300px;
        cursor: pointer;
        border: 1px solid #716557;
    }
    .menu:hover{
        background-color: #4299e1;
        color: #fff;
    }

    .active-menu {
        background-color: #4299e1;
        color: #fff;
        transition: 0.5s;
    }

</style>
