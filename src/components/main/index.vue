<script>
import StepByStepForm from './StepByStepForm/index.vue'
import { steps, activeStepComponent, activeStepTitle, activeStepDescription } from './steps.js'
import { shallowRef } from 'vue'

export default {
  name: 'index',
  components: {
    StepByStepForm,
  },
  data () {
    return {
      optionSteps: steps,
      step: 0,
      form: {},
      statusDisabledNextButton: false,
      statusDisabledBackButton: false
    }
  },
  computed: {
    activeStep: {
      get () {
        return this.step
      },
      set (newValueStep) {
        if (newValueStep >= this.optionSteps.length) {
          this.step = this.optionSteps.length - 1
        }
        if (this.step < 0) {
          this.step = 0
        }
        if (newValueStep < this.optionSteps.length && newValueStep >= 0) {
          this.step = newValueStep
        }
      }
    },
  },
  methods: {
    newDateForm (event) {
      this.form = Object.assign(event)
    },
    newStep (event) {
      this.activeStep = event
    },
    disabledNextButton (event) {
      this.statusDisabledNextButton = event
    },
    disabledBackButton (event) {
      this.statusDisabledBackButton = event
    },
    submit () {
      window.localStorage.clear()
      localStorage.setItem('form', JSON.stringify(this.form))
    },
    shallowRef,
    activeStepComponent,
    activeStepTitle,
    activeStepDescription
  }
}
</script>

<template>
  <main class="main">
    <div class="main__container container">
      <StepByStepForm :step="activeStep"
                      :max-step="optionSteps.length"
                      :status-disabled-back-button="statusDisabledBackButton"
                      :status-disabled-next-button="statusDisabledNextButton"
                      @newStep="newStep($event)">
        <template #title>
          {{ activeStepTitle(activeStep) }}
        </template>
        <template #description>
          {{ activeStepDescription(activeStep) }}
        </template>
        <template #default>
          <component :is="activeStepComponent(activeStep)"
                     :form="form"
                     @inputForm="newDateForm"
                     @submitForm="submit"
                     @status-disabled-back-button="disabledBackButton"
                     @status-disabled-next-button="disabledNextButton"/>
        </template>
      </StepByStepForm>

    </div>
  </main>
</template>

<style scoped>

.main {
  width: 100%;
  margin-bottom: 40px;
}

.container {
  max-width: 1440px;
  padding: 0 28px;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .main {
    padding: 0 50px;
    margin-bottom: 100px;
  }
}

@media screen and (min-width: 1440px) {
  .main {
    padding: 0 100px;
  }
}

</style>
