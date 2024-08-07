<script>
import UICheckbox from '../../ui/inputs/Checkbox.vue'
export default {
  name: "StepOfProfession",
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
      formCheckbox: {},
      listCheckbox: [
        {
          value: this.formCheckbox?.development || null,
          title: 'Development',
          nameEvent: 'development',
          srcImg: '/public/checkbox-icon/development-icon.svg'
        },
        {
          value: this.formCheckbox?.webDesign || null,
          title: 'Web Design',
          nameEvent: 'webDesign',
          srcImg: '/public/checkbox-icon/web-designed-icon.svg'
        },
        {
          value: this.formCheckbox?.marketing || null,
          title: 'Marketing',
          nameEvent: 'marketing',
          srcImg: '/public/checkbox-icon/marketing-icon.svg'
        },
        {
          value: this.formCheckbox?.other || null,
          title: 'Other',
          nameEvent: 'other',
          srcImg: '/public/checkbox-icon/other-icon.svg'
        }
      ]
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
<div class="step-checkbox-list">
  <UICheckbox v-for="(item, index) in listCheckbox"
              :key="index"
              :value="item.value"
              :title-checkbox="item.title"
              @check="checkInput(item.nameEvent, $event)">
    <template #icon>
      <img :src="item.srcImg" :alt="item.title">
    </template>
  </UICheckbox>
</div>
</template>

<style scoped>
.step-checkbox-list {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1024px) {
  .step-checkbox-list {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
