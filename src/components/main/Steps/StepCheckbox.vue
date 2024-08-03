<script>
import UICheckbox from '../../ui/inputs/Checkbox.vue'
export default {
  name: "StepCheckbox",
  components: { UICheckbox },
  props: {
    form: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      formCheckbox: {}
    }
  },
  methods: {
    checkInput (formKey, event) {
      this.formCheckbox[`${formKey}`] = event
      this.$emit('inputForm', {...this.form, ...this.formCheckbox})
      this.statusDisabledNextButton()
    },

    statusDisabledNextButton () {
      for (const key of Object.keys(this.formCheckbox)) {
        if (this.formCheckbox[`${key}`]) {
          this.$emit('statusDisabledNextButton', false)
          return
        }
      }
      this.$emit('statusDisabledNextButton', true)
    }
  },
  mounted() {
    this.formCheckbox = {
          development: false,
          webDesign: false,
          marketing: false,
          other: false
    }

    for (const key of Object.keys(this.form)) {
      if (this.formCheckbox[`${key}`] !== this.form[`${key}`] && typeof this.formCheckbox[`${key}`] !== 'undefined') {
        this.formCheckbox[`${key}`] = this.form[`${key}`]
      }
    }

    this.statusDisabledNextButton()
  }
}
</script>

<template>
<div class="list">
  <UICheckbox :value="formCheckbox.development" title-checkbox="Development" @check="checkInput('development', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/development-icon.svg" alt="Development">
    </template>
  </UICheckbox>

  <UICheckbox :value="formCheckbox.webDesign" title-checkbox="Web Design" @check="checkInput('webDesign', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/web-designed-icon.svg" alt="Web Design">
    </template>
  </UICheckbox>

  <UICheckbox :value="formCheckbox.marketing" title-checkbox="Marketing" @check="checkInput('marketing', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/marketing-icon.svg" alt="Marketing">
    </template>
  </UICheckbox>

  <UICheckbox :value="formCheckbox.other" title-checkbox="Other" @check="checkInput('other', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/other-icon.svg" alt="Other">
    </template>
  </UICheckbox>
</div>
</template>

<style>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>
