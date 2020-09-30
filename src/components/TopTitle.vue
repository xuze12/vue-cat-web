<template>
<div class="hello">
    <van-nav-bar :title="title" right-text="清空" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
</div>
</template>

<script>
import Vue from 'vue'
import {
  NavBar,
  Toast
} from 'vant'
Vue.use(NavBar)

export default {
  name: 'TopTitle',
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style scoped></style>
