<script>
import UIButton from '../../ui/button/index.vue'
export default {
  name: "index",
  components: {
    UIButton
  }
}
</script>

<template>
  <div class="steps-block">
    <h1 class="steps-block__title">
      Get a project quote
    </h1>
    <p class="steps-block__description">
      Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
    </p>
    <form class="steps-block__form">
      <div class="steps-block__card">

      </div>
      <div class="steps-block__block-buttons">
        <UIButton type="button"
                  text-button="Previous step"
                  custom-class="steps-block__button-back" />
        <UIButton type="button"
                  text-button="Next step"
                  custom-class="steps-block__button-next" />
      </div>
    </form>
  </div>
</template>

<style>
.steps-block {
  margin: 0 auto;
}

.steps-block__title {
  max-width: 680px;
  margin: 0 auto 12px;
  font-size: 34px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: #170F49;
}

.steps-block__description {
  max-width: 566px;
  margin: 0 auto 42px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #6F6C90;
}

.steps-block__form {
  margin: 0 auto;
  max-width: 700px;
}

.steps-block__card {
  margin-bottom: 32px;
  padding: 32px 37px 80px;
  border-radius: 34px;
  border: 1px solid #EFF0F6;
  box-shadow: 0 5px 16px 0 #080F340F;
}

.steps-block__block-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.steps-block__button-back {
  color: #4A3AFF;
  border: 1px solid #4A3AFF;
  background: white;
  box-shadow: none;
}
</style>
