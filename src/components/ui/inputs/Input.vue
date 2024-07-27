<script>
export default {
  name: 'Input',
  emits: ['update:value'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Object],
      default: ''
    },
    // value: {
    //   type: [String, Number, Object],
    //   default: ''
    // },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      // inputValue: this.value || ''
    }
  },
}
</script>

<template>
  <div>
    <label></label>
    <input :disabled="disabled"
           :value="value"
           :placeholder="placeholder"
           @input.prevent="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<style scoped>

</style>
