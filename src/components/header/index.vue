<script>
import UIButton from '../../components/ui/button/index.vue'
export default {
  components: {
    UIButton
  },
  name: "index"
}
</script>

<template>
<header class="header">
  <div class="header__container container">
    <div class="header-images">
      <img src="../../assets/picture/logo.svg" alt="logo">
      <img src="../../assets/picture/company.svg" alt="company">
    </div>
    <UIButton textButton="Clone now" class="header-button">

    </UIButton>
  </div>
</header>
</template>

<style scoped>

.container {
  max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;
}

.header {
  margin-bottom: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.header__container {
  display: flex;
  flex-direction: column;
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

@media screen and (min-width: 1024px) {
  .container {
    padding: 0 100px;
  }

  .header {
    margin-bottom: 52px;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .header__container {
    flex-direction: row;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }
}

</style>
