<template>
  <div class="hello">
    <div class="header">
      <div class="headset">
        <img
          class="headset-img"
          src="../../assets/icon/headset.svg"
          alt="Headset"
        />
      </div>

      <div class="info">
        <div class="info-left">
          <img
            class="info-head-portrait"
            src="../../assets/images/head-portrait.jpeg"
          />
          <div class="info-account">
            <div class="info-name">傲视小可</div>
            <div class="info-">猫号:123456</div>
          </div>
        </div>

        <div class="personal-button">个人资料></div>
      </div>
    </div>
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
  mounted () {},
  methods: {
    add () {}
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 10.4375rem;
  background-color: #33c9ae;
}
.headset {
  height: 2.1875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.78125rem;
}
.headset-img {
  width: 1.09375rem;
  height: 1.09375rem;
}
.info {
  height: 4.6875rem;
  padding-left: 0.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-head-portrait {
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 50%;
  overflow: hidden;
}
</style>
