<script>
import Header from '../header/index.vue'
import Footer from '../footer/index.vue'
import Main from '../main/index.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Main
  }
}
</script>

<template>
  <div class="page">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
