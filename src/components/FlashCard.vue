<template lang="pug">
div(class="flash-card")
  h1(class="note") {{ note }}
</template>

<script>
export default {
  props: {
    note: String
  }
}
</script>

<style lang="sass">
.flash-card
  height: 200px
  width: 160px
  display: flex
  justify-content: center
  align-items: center
  border-radius: $base-radius
  border: $base-border
</style>