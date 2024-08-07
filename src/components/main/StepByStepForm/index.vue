<script>
import UIButton from '../../ui/button/index.vue'
export default {
  name: "index",
  components: {
    UIButton
  },
  props: {
    step: {
      required: true,
      type: Number,
      default: 0
    },
    maxStep: {
      required: true,
      type: Number,
      default: 0
    },
    statusDisabledNextButton: {
      required: true,
      type: Boolean,
      default: false
    },
    statusDisabledBackButton: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeNextButton () {
      return this.step < this.maxStep - 1
    },
    activeBackButton () {
      return this.step > 0
    },
    stepStyle () {
      return this.step + 1
    },
    listStep () {
      const listNumberStep = []
      for (let i = 1; i <= this.maxStep; i++) {
        listNumberStep.push(i)
      }
      return listNumberStep
    }
  },
  methods: {
    clickNextButton () {
      this.$emit('newStep', this.step + 1)
    },
    clickBackButton () {
      this.$emit('newStep', this.step - 1)
    },
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
          <li class="steps-block__item-step item-step" v-for="(item, index) in listStep" :key="index">
            <div class="item-step__back-line" :class="{ 'visible-line' : index === 0 }">
              <div class="item-step__back-center-line" :class="{ 'active-step' : item <= stepStyle }"></div>
            </div>

            <span class="item-step__num-step" :class="{ 'active-step' : item <= stepStyle }">{{ item }}</span>

            <div class="item-step__next-line" :class="{ 'active-step' : item <= stepStyle, 'visible-line' : index === listStep.length - 1 }">
              <div class="item-step__next-center-line"></div>
            </div>
          </li>
        </ul>
        <!--  Блок из JS  -->
        <div class="steps-block__card-main">
          <h2 class="steps-block__card-main-title">
            <!--  Title слота  -->
            <slot name="title"></slot>
          </h2>
          <p class="steps-block__card-main-description">
            <!--  Description слота  -->
            <slot name="description"></slot>
          </p>
          <!--  Компонент шага, обычно с формой  -->
          <slot name="default"></slot>
        </div>
      </div>
      <div class="steps-block__block-buttons">
        <UIButton v-if="activeBackButton"
                  type="button"
                  text-button="Previous step"
                  custom-class="steps-block__button-back"
                  :disabled="statusDisabledBackButton"
                  @click.prevent="clickBackButton" />
        <UIButton v-if="activeNextButton"
                  type="button"
                  text-button="Next step"
                  class="button-next"
                  custom-class="steps-block__button-next"
                  :disabled="statusDisabledNextButton"
                  @click.prevent="clickNextButton"/>
      </div>
    </form>
  </div>
</template>

<style scoped>
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
  margin-bottom: 18px;
  padding: 24px 18px 30px;
  border-radius: 34px;
  border: 1px solid #EFF0F6;
  box-shadow: 0 5px 16px 0 #080F340F;
}

.steps-block__card-main-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 8px;
}

.steps-block__card-main-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #6F6C90;
  margin-bottom: 39px;
}

.steps-block__block-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.steps-block__button-back, .steps-block__button-next {
  padding: 12px 14px;
}

.steps-block__button-back {
  color: #4A3AFF;
  border: 1px solid #4A3AFF;
  background: white;
  box-shadow: none;
  margin-right: auto;
}

.button-next {
  margin-left: auto;
}

.steps-block__list-steps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #D9DBE9;
}

.steps-block__item-step {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-step {
  flex: 1 auto;
}

.item-step__num-step {
  background-color: #6F6C90;
  color: white;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  min-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.item-step__back-line {
  display: flex;
  width: 100%;
  margin-right: 6px;
  background: #EFF0F6;
  border-radius: 0 10px 10px 0;
}


.item-step__back-center-line {
  border-radius: 0 10px 10px 0;
  height: 4px;
  background-color: #EFF0F6;
  width: 100%;
}

.item-step__next-line {
  display: flex;
  width: 100%;
  margin-left: 6px;
  background: #EFF0F6;
  border-radius: 10px 0 0 10px;
}

.item-step__next-center-line {
  border-radius: 10px;
  height: 4px;
  width: 100%;
}

.active-step {
  background-color: #4A3AFF;
}

.visible-line {
  margin: 0;
  visibility: hidden;
}

@media screen and (min-width: 1024px){
  .steps-block__card {
    margin-bottom: 32px;
    padding: 32px 37px 80px;
  }

  .steps-block__list-steps {
    margin-bottom: 64px;
    padding-bottom: 32px;
  }

  .item-step__num-step {
    height: 34px;
    width: 34px;
    min-width: 34px;

    font-size: 16px;
    line-height: 18px;
  }

  .item-step__back-line {
    margin-right: 18px;
  }

  .item-step__next-line {
    margin-left: 18px;
  }

  .steps-block__button-back, .steps-block__button-next {
    padding: 18px 39px;
  }
}
</style>
