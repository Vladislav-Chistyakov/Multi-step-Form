<script>
import UIButton from '../../ui/button/index.vue'
export default {
  name: "StepInputs",
  components: { UIButton },
  data () {
    return {
      submit: false
    }
  },
  methods: {
    statusDisabledBackButton () {
      this.submit = !this.submit
      this.$emit('statusDisabledBackButton', true)
      this.$emit('submitForm')
    }
  }
}
</script>

<template>
<div class="submit-step">
  <div class="submit-step__icon">
    <img src="../../../assets/picture/submit-icon.svg" alt="submit-icon">
  </div>
  <h2 class="submit-step__title steps-block__card-main-title">
    {{ !submit  ? 'Submit your quote request' : 'You have sent your request!' }}
  </h2>
  <p class="submit-step__description steps-block__card-main-description">
    {{ !submit
      ? 'Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.'
      : 'You will receive a response within 24-48 hours' }}
  </p>
  <UIButton v-if="!submit"
            type="button"
            :submit-button="true"
            @click="statusDisabledBackButton"
            text-button="Submit" />
</div>
</template>

<style scoped>
.submit-step__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.submit-step {
  padding: 12px 24px;
}

.submit-step__title {
  max-width: 680px;
  margin: 0 auto 12px;
  font-size: 34px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: #170F49;
}

.submit-step__description {
  max-width: 566px;
  margin: 0 auto 42px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #6F6C90;
}
</style>
