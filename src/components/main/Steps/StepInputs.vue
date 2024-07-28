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
        inputCompanyName: '',
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
    'form.inputCompanyName' () {
      this.sandDataToParent()
    },
    'form.inputEmail' () {
      this.sandDataToParent()
    }

  },
  mounted() {
    if (this.$attrs.form) {
      this.form = {...this.$attrs.form}
    }
  }
}
</script>

<template>
<div class="list">
  <UIInput :suffix="true" label="Name" placeholder="Name" :disabled="false" v-model:value="form.inputName">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/person.svg" alt="person">
      </div>
    </template>
  </UIInput>

  <UIInput :suffix="true" label="Email" placeholder="email" :disabled="false" v-model:value="form.inputEmail">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/mail.svg" alt="Email">
      </div>
    </template>
  </UIInput>

  <UIInput :suffix="true" label="Number" placeholder="Number" :disabled="false" v-model:value="form.inputNumber">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/phone.svg" alt="phone">
      </div>
    </template>
  </UIInput>

  <UIInput :suffix="true" label="Company name" placeholder="company name" :disabled="false" v-model:value="form.inputCompanyName">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/company-name.svg" alt="Company name">
      </div>
    </template>
  </UIInput>
</div>
</template>

<style>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}

</style>
