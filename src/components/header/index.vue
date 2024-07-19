<script>
import UIButton from '../../components/ui/button/index.vue'
export default {
  components: {
    UIButton
  },
  name: "index",
  methods: {
    textClick () {
      console.warn('@!@#!@#!@#')
    }
  }
}
</script>

<template>
<header>
  <div>
    <img src="../../assets/picture/logo.svg" alt="logo">
    <img src="../../assets/picture/company.svg" alt="company">
  </div>
  <UIButton textButton="123" @clickButton="textClick">

  </UIButton>
</header>
</template>

<style>
.red {
  background: red;
}
</style>
