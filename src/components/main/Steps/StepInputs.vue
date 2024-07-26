<script>
import debounce from 'lodash.debounce'
export default {
  name: "StepInputs",
  data () {
    return {
      timeout: 1500,
      form: {
        inputName: '',
        inputNumber: '',
        inputDate: '',
        inputEmail: ''
      },
      text: 1
    }
  },
  methods: {
    myEvents () {
      console.warn('this FORM INPUTS: ', this.form)
      this.$emit('inputForm', this.form)
    },
    newValueInput(key, event) {
      // this.debounceInputValue(this.timeout)
      console.log('event input')
      this.form[key] = event.target.value
    },
    debounceInputValue (key, event, timeout) {
      const testDebounce = debounce(this.newValueInput, timeout)
      testDebounce()
      // this.newValueInput(key, event)
    }
  },
  watch: {
    'form.inputName' (newValue) {
      console.log(newValue)
    },
    'form.inputNumber' (newValue) {
      console.log(newValue)
    },
    'form.inputDate' (newValue) {
      console.log(newValue)
    },
    'form.inputEmail' (newValue) {
      console.log(newValue)
    }

  }
}
</script>

<template>
<div>
  <input :value="form.inputName" @input.prevent="debounceInputValue('inputName', $event, timeout)">
  <input :value="form.inputNumber" @input.prevent="debounceInputValue('inputNumber', $event, timeout)">
  <input :value="form.inputDate" @input.prevent="debounceInputValue('inputDate', $event, timeout)">
  <input :value="form.inputEmail" @input.prevent="debounceInputValue('inputEmail', $event, timeout)">
  <button @click.prevent="myEvents">
    submit
  </button>
</div>
</template>

<style scoped>

</style>
