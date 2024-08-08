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
    whiteButton: {
      type: Boolean,
      default: false
    },
    smallButton: {
      type: Boolean,
      default: false
    },
    submitButton: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  name: 'index'
}
</script>

<template>
  <div class="ui-button-block">
    <button :type="type"
            :disabled="disabled"
            class="ui-button"
            :class="{
              'white-button' : whiteButton,
              'small-button' : smallButton,
              'submit-button' : submitButton
            }">
      {{ textButton }}
    </button>
  </div>
</template>

<style scoped>
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

.ui-button:hover {
  opacity: .90;
}

.ui-button:active {
  opacity: .75;
}

.ui-button:disabled {
  cursor: default;
  opacity: .55;
}

.white-button {
  color: #4A3AFF;
  border: 1px solid #4A3AFF;
  background: white;
  box-shadow: none;
  margin-right: auto;
}

.small-button {
  padding: 7px 8px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
}

.submit-button {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 494px;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .small-button  {
    padding: 14px 26px;
    font-size: 16px;
    line-height: 18px;
    max-width: 100%;
  }

  .submit-button {
    padding: 18px 39px;
  }
}

</style>
