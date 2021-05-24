<template lang="pug">
button( :class="[ 'base-button' ,{ '-highlighted': highlighted } ]")
  h4
    slot
</template>

<script>
export default {
  props: {
    highlighted: Boolean
  }

}
</script>

<style lang="sass">
.base-button
  height: 40px
  display: flex
  align-items: center
  justify-content: center
  border: $base-border
  border-radius: $base-radius
  background-color: transparent
  color: $base-color
  background-repeat: no-repeat
  cursor: pointer
  outline: none
  padding: 0 40px

  &.-highlighted
    background-color: $base-color
    border: transparent

    > h4
      color: $base-background

</style>