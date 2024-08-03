<script>
import UIRadioButton from '../../ui/inputs/RadioButton.vue'
export default {
  name: "StepRadio",
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
      valuesRadioButton: {
        one: '$5.000 - $10.000',
        two: '$10.000 - $20.000',
        three: '$20.000 - $50.000',
        four: '$50.000 +',
      }
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
  <div class="list">
    <UIRadioButton :value="valuesRadioButton.one === formRadio.budget" :title-radio="valuesRadioButton.one" @check="checkInput($event)" />

    <UIRadioButton :value="valuesRadioButton.two === formRadio.budget" :title-radio="valuesRadioButton.two" @check="checkInput($event)" />

    <UIRadioButton :value="valuesRadioButton.three === formRadio.budget" :title-radio="valuesRadioButton.three" @check="checkInput($event)" />

    <UIRadioButton :value="valuesRadioButton.four === formRadio.budget" :title-radio="valuesRadioButton.four" @check="checkInput($event)" />
  </div>
</template>

<style>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>

