<template>
  <div class="stage-header">
    <div class="header-left">
      <img src="../../static/message.png" class="header-message">
    </div>
    <div class="header-center" @click="freshPage" >
      <img src="../../static/logo.png" class="header-logo">
      <img src="../../static/refresh.png" class="header-refresh" :class="{'rotate': refresh == true}">
    </div>
    <div class="header-right">
      <img src="../../static/search.png" class="header-search" @click="search">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      refresh: false,
      // tab是否隐藏  隐藏
      tag: true
    }
  },
  methods: {
    search () {
      // console.log(tag)
      // this.$emit('getVal', tag)
      // console.log(tag)
      this.$router.push('/search')
    },
    freshPage () {
      this.refresh = true
      setTimeout(() => {
        this.refresh = false
      }, 200)
    }
  }
}
</script>

<style scoped>
  .stage-header{
    position: fixed;
    height: 90px;
    width: 100%;
    margin-top: -100px;
    background: #d43d3d;
    z-index: 1;
  }
  .header-left{
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 15px;
    display: inline-block;
  }
  .header-message{
    position: relative;
    left: 20px;
    width: 40px;
    height: 40px;
  }
  .header-center{
    display: inline-block;
    width: 400px;
    height: 88px;
    text-align: center;
  }
  .header-logo{
    position: relative;
    width: 160px;
    height: 40px;
    display: inline-block;
  }
  .header-refresh{
    position: relative;
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-left: 10px;
  }
  .header-right {
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  .header-search {
    width: 40px;
    height: 40px;
    margin-top: 25px;
  }
  .rotate {
    -webkit-transform-style: preserve-3d;
    -webkit-animation: x-spin 0.7s linear;
  }
  @-webkit-keyframes x-spin {
    0% {
      -webkit-transform: rotateZ(0deg);
    }
    50% {
      -webkit-transform: rotateZ(180deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
    }
  }
</style>
