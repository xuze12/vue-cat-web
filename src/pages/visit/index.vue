<template>
<div class="hello">
    <top :title='title' />
    <visitContent :title='title' />
</div>
</template>

<script>
import Vue from 'vue'
import Top from '../../components/TopTitle'
import VisitContent from '../../components/VisitContent'
import {
  Button
} from 'vant'

Vue.use(Button)

export default {
  name: 'visit',
  components: {
    Top,
    VisitContent
  },
  data () {
    return {
      title: '来访'
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
