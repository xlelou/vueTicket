<template>
  <div class="navHeader">
    <span>ticket Admin</span>
    <a>注销登录</a>
    <slider></slider>
  </div>
</template>

<script>
import Slider from './slider';
export default {
  name: 'navHeader',
  component:{
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/navHeader.scss';
</style>
