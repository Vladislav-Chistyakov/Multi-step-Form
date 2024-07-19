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
<header class="header">
  <div class="header-images">
    <img src="../../assets/picture/logo.svg" alt="logo">
    <img src="../../assets/picture/company.svg" alt="company">
  </div>
  <UIButton textButton="Clone now" @clickButton="textClick" class="header-button">

  </UIButton>
</header>
</template>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
}

.header-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.header-button {
}


</style>
