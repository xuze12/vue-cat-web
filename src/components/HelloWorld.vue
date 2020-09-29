<template>
  <div class='hello'>
    <el-button type='primary'>主要按钮</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
Vue.use(Button)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
</style>
