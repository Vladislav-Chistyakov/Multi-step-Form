<script>
// import debounce from 'lodash.debounce'
import UIInput from '../../ui/inputs/Input.vue'
export default {
  name: "StepInputs",
  components: { UIInput },
  data () {
    return {
      timeout: 750,
      form: {
        inputName: '',
        inputPhone: '',
        inputCompanyName: '',
        inputEmail: ''
      }
    }
  },
  methods: {
    myEvents () {
      this.$emit('inputForm', this.form)
      this.statusDisabledNextButton()
    },
    statusDisabledNextButton () {
      if (!!this.form.inputName
          && !!this.form.inputPhone
          && !!this.form.inputCompanyName
          && !!this.form.inputEmail) {
        this.$emit('statusDisabledNextButton', false)
      } else {
        this.$emit('statusDisabledNextButton', true)
      }
    }
  },
  watch: {
    'form.inputName' () {
      this.myEvents()
    },
    'form.inputPhone' () {
      this.myEvents()
    },
    'form.inputCompanyName' () {
      this.myEvents()
    },
    'form.inputEmail' () {
      this.myEvents()
    }
  },
  mounted() {
    this.statusDisabledNextButton()
    if (this.$attrs.form) {
      this.form = {...this.$attrs.form}
    }
  }
}
</script>

<template>
<div class="step-input-list">
  <UIInput type="text" :suffix="true" label="Name" placeholder="Name" :disabled="false" v-model:value="form.inputName">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/person.svg" alt="person">
      </div>
    </template>
  </UIInput>

  <UIInput type="email" :suffix="true" label="Email" placeholder="email" :disabled="false" v-model:value="form.inputEmail">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/mail.svg" alt="Email">
      </div>
    </template>
  </UIInput>

  <UIInput type="tel" :suffix="true" label="Number" placeholder="Number" :disabled="false" v-model:value="form.inputPhone">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/phone.svg" alt="phone">
      </div>
    </template>
  </UIInput>

  <UIInput type="text" :suffix="true" label="Company name" placeholder="company name" :disabled="false" v-model:value="form.inputCompanyName">
    <template #suffix>
      <div>
        <img src="../../../assets/picture/company-name.svg" alt="Company name">
      </div>
    </template>
  </UIInput>
</div>
</template>

<style scoped>
.step-input-list {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1024px) {
  .step-input-list {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}

</style>
