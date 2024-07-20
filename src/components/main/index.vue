<script>
import StepByStepForm from './StepByStepForm/index.vue'

export default {
  name: 'index',
  components: {
    StepByStepForm
  },
}
</script>

<template>
  <main class="main">
    <div class="main__container container">
      <StepByStepForm></StepByStepForm>

    </div>
  </main>
</template>

<style scoped>

.main {
  width: 100%;
  margin-bottom: 100px;
}

.container {
  max-width: 1440px;
  padding: 0 28px;
  margin: 0 auto;
}



@media screen and (min-width: 1024px) {
  .main {
    padding: 0 50px;
  }
}

@media screen and (min-width: 1440px) {
  .main {
    padding: 0 100px;
  }
}

</style>
