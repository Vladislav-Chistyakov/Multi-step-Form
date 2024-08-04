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
            custom-class="submit-step"
            @click.prevent="statusDisabledBackButton"
            text-button="Submit" />
</div>
</template>

<style>
.submit-step {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 494px;
  text-align: center;
}

.submit-step__icon {
  margin-bottom: 18px;
}

.submit-step {
  padding: 12px 24px;
}

@media screen and (min-width: 1024px) {
  .submit-step {
    padding: 18px 39px;
  }
}
</style>
