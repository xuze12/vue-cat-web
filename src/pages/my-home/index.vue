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
  height: 334px;
  background-color: #33c9ae;
}
.headset {
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
}
.headset-img {
  width: 35px;
  height: 35px;
}
.info {
  height: 130px;
  padding-left: 30px;
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
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
