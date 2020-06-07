<template>
    <div class="wrap">
        <h1>锚点定位</h1>
        <div class="left" ref="leftContent">
            <div
                class="content"
                :style="{'background-color': color}"
                v-for="{color,value} in contentList"
                :key="value"
                :ref="'content' + value"
            >
                {{value}}
            </div>

        </div>
        <div class="right">
            <div
                class="menu"
                v-for="{label, value} in menuList"
                @click="jump(value)"
                :key="value"
            >
                {{label}}
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "index",
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
                    {color: 'green', value: 4},
                ]
            }
        },
        mounted(){
            // this.$refs.leftContent.addEventListener('scroll', this.scroll())
            this.$refs.leftContent.addEventListener('scroll', this.scroll)
        },
        methods: {
            scroll(val){
                debugger

                console.log(val)
            },
            jump (index) {
                console.log(this.$refs['content'+index])
                console.log(this.$refs['content'+index][0].offsetTop)
                debugger
                this.$refs['leftContent'][0].scrollTop = this.$refs['content'+index][0].offsetTop

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
        max-height: 600px;
        max-width: 700px;
        overflow-y: scroll;
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
</style>
