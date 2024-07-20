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
        <ul class="steps-block__list-steps">
          <li class="steps-block__item-step item-step">
            <div class="item-step__back-line">
              <div class="item-step__back-center-line">---</div>
            </div>
            <span class="item-step__num-step">1</span>
            <div class="item-step__next-line">
              <div class="item-step__next-center-line">---</div>
            </div>
          </li>
          <li class="steps-block__item-step item-step">
            <div class="item-step__back-line">
              <div class="item-step__back-center-line">---</div>
            </div>
            <span class="item-step__num-step">2</span>
            <div class="item-step__next-line">
              <div class="item-step__next-center-line">---</div>
            </div>
          </li>
          <li class="steps-block__item-step item-step">
            <div class="item-step__back-line">
              <div class="item-step__back-center-line">---</div>
            </div>
            <span class="item-step__num-step">3</span>
            <div class="item-step__next-line">
              <div class="item-step__next-center-line">---</div>
            </div>
          </li>
          <li class="steps-block__item-step item-step">
            <div class="item-step__back-line">
              <div class="item-step__back-center-line">---</div>
            </div>
            <span class="item-step__num-step">4</span>
            <div class="item-step__next-line">
              <div class="item-step__next-center-line">---</div>
            </div>
          </li>
          <li class="steps-block__item-step item-step">
            <div class="item-step__back-line">
              <div class="item-step__back-center-line">---</div>
            </div>
            <span class="item-step__num-step">5</span>
            <div class="item-step__next-line">
              <div class="item-step__next-center-line">---</div>
            </div>
          </li>
        </ul>
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

.steps-block__list-steps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.steps-block__item-step {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-step {

}


.item-step__num-step {
  background-color: #4A3AFF;
  color: white;
  border-radius: 100%;
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
}

.item-step__back-line {
  margin-right: 18px;
  height: 4px;
  background: #EFF0F6;
  border-radius: 0 10px 10px 0;
}


.item-step__back-center-line {
  border-radius: 0 10px 10px 0;
  height: 4px;
  background-color: #EFF0F6;
}

.item-step__next-line {
  margin-left: 18px;
  height: 4px;
  background: #EFF0F6;
  border-radius: 10px 0 0 10px;
}

.item-step__next-center-line {
  border-radius: 10px;
  height: 4px;
  background-color: #4A3AFF;
}


</style>
