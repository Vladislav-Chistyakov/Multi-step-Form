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
    inputWithButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="ui-input" :class="{'block-with-button' : inputWithButton }">
    <label class="ui-input__block" :class="{'label-with-button' : inputWithButton }">
      <span class="ui-input__label">{{ label }}</span>

      <input :disabled="disabled"
             :value="value"
             :placeholder="placeholder"
             :type="type"
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

<style scoped>

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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 1px solid #EFF0F6;
  border-radius: 46px;
  padding: 15px 20px;
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

.block-with-button {
  padding-top: 0;
}

.label-with-button {
  padding: 9px 8px 8px 10px;
  font-size: 12px;
  max-width: 380px;
}

@media screen and (min-width: 1024px) {
  .label-with-button {
    min-width: 507px;
  }

  .label-with-button {
    padding: 12px 13px 12px 30px;
  }
}

</style>
