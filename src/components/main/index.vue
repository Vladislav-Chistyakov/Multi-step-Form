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
      testInputsText: null,
      form: {},
      statusDisabledNextButton: false
    }
  },
  computed: {
    activeStep: {
      get () {
        return this.step
      },
      set (newValueStep) {
        console.log('Step:', newValueStep, this.step)
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
      console.log('this new date Form', this.form)
    },
    newStep (event) {
      this.activeStep = event
    },
    disabledNextButton (event) {
      this.statusDisabledNextButton = event
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
                     @status-disabled-next-button="disabledNextButton"/>
          !{{ form }}! {{ statusDisabledNextButton }}
        </template>
      </StepByStepForm>

    </div>
  </main>
</template>

<style scoped>

.main {
  width: 100%;
  margin-bottom: 100px;
}

.container {
  max-width: 1440px;
  padding: 0 28px;
  margin: 0 auto;
}



@media screen and (min-width: 1024px) {
  .main {
    padding: 0 50px;
  }
}

@media screen and (min-width: 1440px) {
  .main {
    padding: 0 100px;
  }
}

</style>
