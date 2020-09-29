<template>
  <div class="hello">
    <div class="my-home">我是个人中心</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
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
.my-home {
  width: 23.4375rem;
  height: 23.4375rem;
  background-color: aqua;
}
</style>
