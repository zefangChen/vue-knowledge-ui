<template>
    <div class="home-bar-wrap">
        <img src="@/assets/img/name-logo1.png" alt="logo">
        <div class="home-view cursor-p" @click="goRouter('home')">首页</div>
        <div class="cursor-p" @click="goRouter('basicThreeD')">3D模型</div>

    </div>
</template>

<script>
    export default {
        name: "HomeNavBar",
        methods: {
            goRouter(name) {
                this.$router.push({name})
            }
        }
    }
</script>

<style scoped>
    .home-bar-wrap {
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        color: #404040;
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .home-bar-wrap img{
        width: 160px;
        height: 50px;
        margin: 0 30px;
    }

    .home-view{
        margin:0 30px;
    }

    .cursor-p{
        cursor: pointer;
    }

</style>
