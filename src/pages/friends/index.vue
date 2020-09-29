<template>
<div class="hello">
    <div class="header">
        <van-nav-bar title="我的好友" left-arrow @click-left="onHeaderClickLeft" />
    </div>
    <div class="box">
        <van-tabs v-model="active">
            <van-tab title="好友(23)">
                <div class="group-top">
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                    </div>
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                    </div>
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                    </div>
                    <van-index-bar>
                        <van-index-anchor index="A" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />

                        <van-index-anchor index="B" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                    </van-index-bar>
                </div>

            </van-tab>
            <van-tab title="关注(3)">
                <div class="group-top">
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                        <van-button color="#f1f1f1f1" round class="group-but">已关注</van-button>
                    </div>
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                        <van-button color="#f1f1f1f1" round class="group-but">已关注</van-button>
                    </div>
                </div>
            </van-tab>
            <van-tab title="粉丝(73)">
                <div class="group-top">
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                        <van-button color="#16c8a8" round class="group-but">+关注</van-button>
                    </div>
                    <div class="group">
                        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size='36px' />
                        <span class="group-right">我的群</span>
                        <van-button color="#16c8a8" round class="group-but">+关注</van-button>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import {
  Button,
  Icon,
  NavBar,
  Tab,
  Tabs,
  IndexBar,
  IndexAnchor,
  Cell,
  CellGroup
} from 'vant'

Vue.use(Button)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
Vue.use(CellGroup)

export default {
  name: 'friends',
  data () {
    return {
      active: 2
    }
  },
  mounted () {},
  methods: {
    onHeaderClickLeft () {
      // Toast('返回')
    }
  }
}
</script>

<style scoped>
/* 头部 */
.header {
    width: 100%;
    height: 94px;
    background-color: #fff;
    font-size: 36px;
    font-weight: bold;
}

/** 内容 **/
.box {
    width: 100%;
    height: calc(100vh - 94px);
    background-color: #f1f1f1;
}

span {
    font-size: 30px;
    font-weight: 200;
}

.group-top {
    width: 100%;
    border-top: 5px solid #f1f1f1
}

.group {
    width: calc(100% - 25px);
    height: 100px;
    display: inline-flex;
    align-items: center;
    padding-left: 25px;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
}

.group-right {
    width: calc(100% - 20px);
    padding-left: 20px;
}

.group-but {
    width: 180px;
    height: 50px;
    padding: 0;
    margin-right: 20px;
}

.van-tab {
    background: red !important;
}

.box /deep/ .van-tab--active .van-tabs__line {
    background-color: #16c8a8 !important;
    z-index: 2;
}
</style>
