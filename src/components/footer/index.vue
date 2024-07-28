<script>
export default {
  name: "index"
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
    <span class="footer__right-span">
      Subscribe to receive free Webflow cloneables every month.
    </span>
      <div class="footer__right-input">INPUT</div>
    </div>
  </div>
</footer>
</template>

<style scoped>

.container {
  max-width: 1440px;
  padding: 0 100px;
  margin: 0 auto;
}

.footer__hr {
  display: block;
  border-top: 1px solid #D9DBE9
}

.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 56px;
  padding-bottom: 56px;
}

.footer__left {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.footer__left-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.footer__left-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: #6F6C90;
}

.footer__right {
}

.footer__right-span {
}

.footer__right-input {
}
</style>
