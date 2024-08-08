<script>
import UIInput from '../ui/inputs/Input.vue'
import UIButton from '../ui/button/index.vue'
export default {
  name: "index",
  components: { UIInput, UIButton }
}
</script>

<template>
<footer class="footer">
  <span class="footer__hr" />
  <div class="footer__container container">
    <div class="footer__left">
      <div class="footer__left-images">
        <img src="../../assets/picture/logo.svg" alt="logo">
        <img src="../../assets/picture/company.svg" alt="company-name">
      </div>
      <span class="footer__left-description">
      Copyright © BRIX Templates | All Rights Reserved
    </span>
    </div>
    <div class="footer__right">
      <UIInput placeholder="Enter your email" :suffix="true" :input-with-button="true">
        <template #suffix>
          <UIButton text-button="Subscribe" :small-button="true" />
        </template>
      </UIInput>
    </div>
  </div>
</footer>
</template>

<style scoped>

.footer__hr {
  display: block;
  border-top: 1px solid #D9DBE9
}

.container {
  max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;
}

.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding-top: 26px;
  padding-bottom: 56px;
}

.footer__left {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 26px;
}

.footer__left-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.footer__left-description {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: #6F6C90;
}

@media screen and (min-width: 1024px){

  .footer__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .footer__left {
    align-items: flex-start;
    gap: 17px;
  }

  .footer__left-description {
    text-align: start;
  }
}
</style>
