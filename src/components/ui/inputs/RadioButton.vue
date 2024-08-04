<script>
export default {
  name: "Radio",
  props: {
    titleRadio: {
      type: String,
      default: ''
    },
    value: {
      required: true,
      default: false
    },
    tabindexInput: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      statusFocusRadio: false
    }
  },
  methods: {
    check () {
      this.$emit('check', this.titleRadio)
    },
    focusin () {
      console.warn('focus In')
      this.statusFocusRadio = true
    },
    focusOut () {
      console.warn('focus Out')
      this.statusFocusRadio = false
    },
    activeKeyEnter () {
      if (this.statusFocusRadio) {
        this.$emit('check', this.titleRadio)
      }
    }
  }
}
</script>

<template>
  <div class="block-radio">
    <label class="block-radio__label"
           :class="{ 'active-radio' : value, 'focus-radio' : statusFocusRadio }"
           :tabindex="tabindexInput"
           @focusin="focusin"
           @focusout="focusOut"
           @keydown.enter="activeKeyEnter($event)"
    >
    <span class="block-radio__label-prefix">
      <span class="block-radio__label-prefix-wrapper" :class="{ 'label-prefix-wrapper-active' : value }">
        <span v-if="value" class="block-radio__label-prefix-wrapper-center" />
      </span>
      <span class="block-radio__label-prefix-title">
        {{ titleRadio }}
      </span>
    </span>
      <input
          class="block-radio__label-input"
          type="radio"
          :checked="value"
          @click="check($event)">
    </label>
  </div>
</template>

<style scoped>

.block-radio__label {
  position: relative;
  display: block;
  border: 1px solid #EFF0F6;
  padding: 45px 32px;
  border-radius: 16px;
  box-shadow: 0 2px 6px 0 #13124212;
}

.active-radio {
  border: 1px solid #4A3AFF;
  box-shadow: 0 2px 11px 0 #4541A40F;
}

.focus-radio {
  outline: 2px solid #4A3AFF;
}

.block-radio__label-prefix {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.block-radio__label-prefix-wrapper {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1.2px solid #D9DBE9;
  box-shadow: 0 -3px 7px 0 #14142B14 inset;
}

.label-prefix-wrapper-active {
  box-shadow: none;
  background-color: #4A3AFF;
  border: 1.2px solid #4A3AFF;
}

.block-radio__label-prefix-wrapper-center {
  display: block;
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 100%;
}

.block-radio__label-prefix-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
}

.block-radio__label-input {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.block-radio__label-input:focus {
  outline: none;
}

</style>
