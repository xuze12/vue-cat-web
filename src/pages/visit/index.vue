<template>
<div class="hello">
    hello
</div>
</template>

<script>
import Vue from 'vue'
import {
  Button
} from 'vant'

Vue.use(Button)

export default {
  name: 'visit',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {},
  methods: {
    add () {}
  }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 334px;
    background-color: #33c9ae;
}
</style>
