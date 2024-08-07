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
      <UIInput placeholder="Enter your email" :suffix="true" custom-class-block-input="form__input" custom-class-block="form__block-input">
        <template #suffix>
          <UIButton text-button="Subscribe" custom-class="footer__button" />
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

.form__block-input {
  padding-top: 0;
}

.form__input {
  padding: 9px 8px 8px 10px;
  font-size: 12px;
  max-width: 380px;
}

.footer__button {
  padding: 7px 8px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
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

  .form__input {
    min-width: 507px;
  }

  .form__input {
    padding: 12px 13px 12px 30px;
  }

  .footer__button {
    padding: 14px 26px;
    font-size: 16px;
    line-height: 18px;
    max-width: 100%;
  }
}
</style>
