<script>
import debounce from 'lodash.debounce'
import UIInput from '../../ui/inputs/Input.vue'
export default {
  name: "StepInputs",
  components: { UIInput },
  data () {
    return {
      timeout: 1500,
      form: {
        inputName: '',
        inputNumber: '',
        inputDate: '',
        inputEmail: ''
      },
      text: 1,
      debounceTest: null
    }
  },
  methods: {
    myEvents () {
      console.warn('this FORM INPUTS: ', this.form)
      this.$emit('inputForm', this.form)
    },
    debounceInputValue () {
      this.debounceTest = debounce(this.myEvents, this.timeout)
      this.debounceTest()
    },
    cancelDebounce () {
      if (this.debounceTest) {
        this.debounceTest.cancel()
      }
    },
    sandDataToParent () {
      this.cancelDebounce()
      this.debounceInputValue()
    }
  },
  watch: {
    'form.inputName' () {
      this.sandDataToParent()
    },
    'form.inputNumber' () {
      this.sandDataToParent()
    },
    'form.inputDate' () {
      this.sandDataToParent()
    },
    'form.inputEmail' () {
      this.sandDataToParent()
    }

  }
}
</script>

<template>
<div>
  <UIInput placeholder="Name" :disabled="false" v-model:value="form.inputName"/>
  <UIInput placeholder="Number" :disabled="false" v-model:value="form.inputNumber"/>
  <UIInput placeholder="Date" :disabled="false" v-model:value="form.inputDate"/>
  <UIInput placeholder="Email" :disabled="false" v-model:value="form.inputEmail"/>
  <button @click.prevent="myEvents">
    submit
  </button>
</div>
</template>

<style scoped>

</style>
