<template>
<div class="box">
    <div class="box-list">
        <img class="head-portrait" src="../assets/images/head-portrait.jpeg" alt="Headset" />
        <div class="conter-box">
            <div class="name">玩家昵称</div>
            <div class="icon"></div>
            <div class="describe">访问了您的主页</div>
        </div>
        <div class="right-box">
            <div class="describe">一小时前</div>
            <div class="but" v-if="title == '来访'">第一次访问</div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import {
  NavBar
} from 'vant'

Vue.use(NavBar)

export default {
  name: 'VisitContent',
  props: ['title'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.box {
    width: 100%;
    height: calc(100vh - 90px);
    background-color: #f1f1f1;
    border-top: 5px solid #f1f1f1;
}

.box-list {
    width: 100%;
    height: 191px;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    display: inline-flex;
    justify-items: flex-start;
    align-items: center;
}

.head-portrait {
    width: 134px;
    height: 134px;
    border-radius: 128px;
    margin-left: 29px;
}

.conter-box {
    width: 452px;
    margin-left: 36px;
}

.name {
    width: 100%;
    height: 45px;
    font-size: 30px;
}

.icon {
    width: 100%;
    height: 53px;
}

.describe {
    width: 100%;
    height: 34px;
    font-size: 26px;
    color: #a6a4a5;
}

.right-box {
    width: 114px;
    height: 113px;
    margin-right: 24px;
}

.right-box .describe {
    line-height: 52px;
    text-align: right;
}

.but {
    width: 114px;
    height: 39px;
    border: 1px solid #16c8a8;
    border-radius: 20px;
    font-size: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #16c8a8;
}
</style>
