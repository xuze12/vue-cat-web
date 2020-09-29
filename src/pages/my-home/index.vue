<template>
  <div class="hello">
    <div class="header"></div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'my-home',
  data () {
    return {
      msg: ''
    }
  },
  mounted: {
    add () {
      console.log(12)
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 20.875rem;
  background-color: #33c9ae;
}
</style>
