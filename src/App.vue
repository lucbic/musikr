<template lang="pug">
div(id="app")
  intervals-container
</template>

<script>
import IntervalsContainer from './containers/Intervals'

export default {
  name: 'App',

  components: {
    IntervalsContainer
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $base-color
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

</style>
