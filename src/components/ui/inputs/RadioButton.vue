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
    tabindex: {
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
    check (event) {
      console.log('cccc', event)
      this.$emit('check', this.titleRadio)
    },
    activeKeyEnter (event) {
      console.log('dddd', event)
      if (this.statusFocusRadio) {
        this.$emit('check', this.titleRadio)
      }
    }
  }
}
</script>

<template>
  <div class="block-radio">
    {{ value }} || {{ titleRadio }}
    <label class="block-radio__label" :class="{ 'active-radio' : value, 'focus-radio' : statusFocusRadio && !value }">
    <span class="block-radio__label-prefix">
      <span class="block-radio__label-prefix-wrapper">
        <slot name="icon" />
      </span>
      <span class="block-radio__label-prefix-title">
        {{ titleRadio }}
      </span>
    </span>
      <input
          class="block-radio__label-input"
          type="radio"
          :tabindex="tabindex"
          :checked="value"
          @focusin="statusFocusRadio = true"
          @focusout="this.statusFocusRadio = false"
          @click="check($event)"
          @keydown.enter="activeKeyEnter($event)">
    </label>
  </div>
</template>

<style scoped>

.block-radio__label {
  position: relative;
  display: block;
  border: 1px solid #EFF0F6;
  padding: 23px;
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
  height: 66px;
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4E1FF;
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
