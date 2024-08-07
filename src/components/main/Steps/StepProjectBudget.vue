<script>
import UIRadioButton from '../../ui/inputs/RadioButton.vue'
export default {
  name: "StepProjectBudget",
  components: { UIRadioButton },
  props: {
    form: {
      type: Object,
      required: true,
      default: null
    },
  },
  data () {
    return {
      formRadio: {},
      listRadioButton: [
        {
          tabindex: 1,
          value: '$5.000 - $10.000',
          title: '$5.000 - $10.000',
        },
        {
          tabindex: 2,
          value: '$10.000 - $20.000',
          title: '$10.000 - $20.000',
        },
        {
          tabindex: 3,
          value: '$20.000 - $50.000',
          title: '$20.000 - $50.000',
        },
        {
          tabindex: 4,
          value: '$50.000 +',
          title: '$50.000 +',
        }
      ]
    }
  },
  methods: {
    checkInput (event) {
      if (this.formRadio.budget === event) {
        this.formRadio.budget = ''
      } else {
        this.formRadio.budget = event
      }
      this.$emit('inputForm', {...this.form, ...this.formRadio})
      this.statusDisabledNextButton()
    },

    statusDisabledNextButton () {
      if (this.formRadio.budget) {
        this.$emit('statusDisabledNextButton', false)
      } else  {
        this.$emit('statusDisabledNextButton', true)
      }
    }
  },
  mounted() {
    this.formRadio.budget = ''

    for (const key of Object.keys(this.form)) {
      if (typeof this.formRadio[`${key}`] !== "undefined" && typeof this.form[`${key}`] !== "undefined") {
        this.formRadio[`${key}`] = this.form[`${key}`]
        break
      }
    }

    this.statusDisabledNextButton()
  }
}
</script>

<template>
  <div class="step-radio-list">
    <UIRadioButton v-for="(item, index) in listRadioButton" :key="index"
                   :tabindex-input="item.tabindex"
                   :value="item.value === formRadio.budget"
                   :title-radio="item.title"
                   @check="checkInput($event)" />
  </div>
</template>

<style scoped>
.step-radio-list {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1024px) {
  .step-radio-list {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>

