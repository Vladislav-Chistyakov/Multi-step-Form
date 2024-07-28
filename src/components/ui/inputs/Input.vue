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
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    suffix: {
      type: Boolean,
      default: false
    },
    customClassBlockInput: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
}
</script>

<template>
  <div class="ui-input">
    <label :class="[customClassBlockInput ? `ui-input__block ${customClassBlockInput}` : 'ui-input__block']">
      <span class="ui-input__label">{{ label }}</span>

      <input :disabled="disabled"
             :value="value"
             :placeholder="placeholder"
             @input.prevent="$emit('update:value', $event.target.value)"
             class="ui-input__input"
      />
      <span v-if="suffix" class="ui-input__block-suffix">
        <slot name="suffix">
          *
        </slot>
      </span>
    </label>
  </div>
</template>

<style>
.ui-input {
  position: relative;
  padding-top: 30px;
}

.ui-input__label {
  position: absolute;
  display: block;
  top: 0;
  color: #170F49;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
}

.ui-input__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 1px solid #EFF0F6;
  border-radius: 46px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 #13124212;
}

.ui-input__input {
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;

  display: block;
  border: 0;
  border-radius: 0;
  color: #6F6C90;
  outline: none;
  padding: 0;
  width: 100%;
}
.ui-input__input::placeholder {
  color: rgba(111, 108, 144, 0.55);
}


.ui-input__block-suffix {
}
</style>
