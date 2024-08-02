<script>
export default {
  name: "Checkbox",
  props: {
    titleCheckbox: {
      type: String,
      default: ''
    },
    value: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      statusFocusCheckbox: false
    }
  },
  methods: {
    check (event) {
      this.$emit('check', event.target.checked)
    },
    activeKeyEnter (event) {
      if (this.statusFocusCheckbox) {
        this.$emit('check', !event.target.checked)
      }
    }
  }
}
</script>

<template>
<div class="block-checkbox">
  <label class="block-checkbox__label" :class="{ 'active-checkbox' : value, 'focus-checkbox' : statusFocusCheckbox }">
    <span class="block-checkbox__label-prefix">
      <span class="block-checkbox__label-prefix-wrapper">
        <slot name="icon" />
      </span>
      <span class="block-checkbox__label-prefix-title">
        {{ titleCheckbox }}
      </span>
    </span>
    <input
        class="block-checkbox__label-input"
        type="checkbox"
        :checked="value"
        @focusin="statusFocusCheckbox = true"
        @focusout="this.statusFocusCheckbox = false"
        @keydown.enter="activeKeyEnter($event)"
        @input="check($event)">
  </label>
</div>
</template>

<style scoped>

.block-checkbox__label {
  position: relative;
  display: block;
  border: 1px solid #EFF0F6;
  padding: 23px;
  border-radius: 16px;
  box-shadow: 0 2px 6px 0 #13124212;
}

.active-checkbox {
  border: 1px solid #4A3AFF;
  box-shadow: 0 2px 11px 0 #4541A40F;
}

.focus-checkbox {
  outline: 2px solid #4A3AFF;
}

.block-checkbox__label-prefix {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.block-checkbox__label-prefix-wrapper {
  height: 66px;
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4E1FF;
  border-radius: 100%;
}

.block-checkbox__label-prefix-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
}

.block-checkbox__label-input {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.block-checkbox__label-input:focus {
  outline: none;
}

</style>

