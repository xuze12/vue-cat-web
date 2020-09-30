<template>
<div class="hello">
    头部
</div>
</template>

<script>
import Vue from 'vue'
import {
  Button
} from 'element-ui'
Vue.use(Button)

export default {
  name: 'TopTitle',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped></style>
