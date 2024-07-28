<script>
export default {
  props: {
    textButton: {
      type: String,
      default: 'Кнопка'
    },
    type: {
      type: String,
      default: 'button'
    },
    customClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  name: 'index',
  data () {
    return {

    }
  },
  methods: {
    clickButton () {
      console.warn('Click')
      this.$emit('clickButton')
    }
  }
}
</script>

<template>
  <div>
    <button @click.prevent="clickButton"
            :type="type"
            :disabled="disabled"
            :class="[customClass ? `ui-button ${customClass}` : 'ui-button']">
      {{ textButton }}
    </button>
  </div>
</template>

<style>
.ui-button {
  cursor: pointer;
  display: block;
  width: fit-content;
  margin: 0;
  padding: 19px 39px;
  background: #4A3AFF;
  border: 1px solid #4A3AFF;
  color: white;
  border-radius: 56px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  box-shadow: 0 3px 12px 0 #4A3AFF2E;
}
.ui-button:disabled {
  opacity: .55;
}
</style>
