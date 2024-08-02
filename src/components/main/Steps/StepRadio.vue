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
      formRadio: [],
      valuesRadioButton: {
        one: '5 000 - 10 000',
        two: '10 000 - 20 000',
        three: '20 000 - 50 000',
        four: '50 000 +',
      }
    }
  },
  methods: {
    checkInput (event) {
      console.log('check', event)
      if (this.formRadio.budget.includes(event)) {
        console.log('event eeee', this.formRadio.budget, event)
        const index = this.formRadio.budget.indexOf(event)
        this.formRadio.budget.splice(index, 1)
      } else {
        this.formRadio.budget.push(event)
      }
      this.$emit('inputForm', {...this.form, ...this.formRadio})
      this.statusDisabledNextButton()
    },

    statusDisabledNextButton () {
      if (Array.isArray(this.formRadio.budget) && this.formRadio.budget.length) {
        this.$emit('statusDisabledNextButton', false)
      } else  {
        this.$emit('statusDisabledNextButton', true)
      }
    }
  },
  computed: {
    valuesFormRadio () {
      if (this.formRadio.budget && Array.isArray(this.formRadio.budget)) {
        return this.formRadio.budget
      } else {
        return []
      }
    }
  },
  mounted() {
    this.formRadio = {
      budget: []
    }

    for (const key of Object.keys(this.form)) {
      // if (this.formRadio[`${key}`] === this.form[`${key}`] && typeof this.formRadio[`${key}`] !== 'undefined') {
      //   this.formRadio[`${key}`] = this.form[`${key}`]
      //   break
      // }
      console.warn('!!#@!#', key)
      if (this.formRadio[`${key}`] && this.form[`${key}`]) {
          this.formRadio[`${key}`] = this.form[`${key}`]
      }
      console.warn('tttttt')
    }

    this.statusDisabledNextButton()
  }
}
</script>

<template>
  <div class="list">
    <UIRadioButton tabindex="1" :value="valuesFormRadio.includes(valuesRadioButton.one)" :title-radio="valuesRadioButton.one" @check="checkInput($event)">
      <template #icon>
        <img src="../../../assets/picture/checkbox-icon/development-icon.svg" alt="Development">
      </template>
    </UIRadioButton>

    <UIRadioButton tabindex="2" :value="valuesFormRadio.includes(valuesRadioButton.two)" :title-radio="valuesRadioButton.two" @check="checkInput($event)">
      <template #icon>
        <img src="../../../assets/picture/checkbox-icon/web-designed-icon.svg" alt="Web Design">
      </template>
    </UIRadioButton>

    <UIRadioButton tabindex="3" :value="valuesFormRadio.includes(valuesRadioButton.three)" :title-radio="valuesRadioButton.three" @check="checkInput($event)">
      <template #icon>
        <img src="../../../assets/picture/checkbox-icon/marketing-icon.svg" alt="Marketing">
      </template>
    </UIRadioButton>

    <UIRadioButton tabindex="4" :value="valuesFormRadio.includes(valuesRadioButton.four)" :title-radio="valuesRadioButton.four" @check="checkInput($event)">
      <template #icon>
        <img src="../../../assets/picture/checkbox-icon/other-icon.svg" alt="Other">
      </template>
    </UIRadioButton>
  </div>
</template>

<style>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>

