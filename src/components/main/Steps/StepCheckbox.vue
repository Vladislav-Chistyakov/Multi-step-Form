<script>
import UICheckbox from '../../ui/inputs/Checkbox.vue'
export default {
  name: "StepCheckbox",
  components: { UICheckbox },
  data () {
    return {
      timeout: 750,
      form: {
        development: false,
        webDesign: false,
        marketing: false,
        other: false
      },
      debounceFunction: null
    }
  },
  methods: {
    testCheck (formKey, event) {
      console.log('formKey', event)
      for (const key of Object.keys(this.form)) {
        console.log('key', key, formKey, this.form)
        if (key !== formKey && !this.form[`${key}`]) {
          this.form[`${key}`] = false
        }
      }
    }
  }
}
</script>

<template>
<div class="list">
  <UICheckbox v-model:value="form.development" title-checkbox="Development" @check="testCheck('development', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/development-icon.svg" alt="Development">
    </template>
  </UICheckbox>

  <UICheckbox v-model:value="form.webDesign" title-checkbox="Web Design" @check="testCheck('webDesign', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/web-designed-icon.svg" alt="Web Design">
    </template>
  </UICheckbox>

  <UICheckbox v-model:value="form.marketing" title-checkbox="Marketing" @check="testCheck('marketing', $event)">
    <template #icon>
      <img src="../../../assets/picture/checkbox-icon/marketing-icon.svg" alt="Marketing">
    </template>
  </UICheckbox>

  <UICheckbox v-model:value="form.other" title-checkbox="Other" @check="testCheck('other', $event)">
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
