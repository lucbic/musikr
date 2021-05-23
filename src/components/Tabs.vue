<template lang="pug">
div(class="tab-selector")
  base-button(
    class="btn"
    v-for="(val, key) in tabs"
    :key="key"
    :highlighted="selected == key"
    @click.native="$emit('change', key)"
  ) {{ val }}

</template>

<script>
import BaseButton from './Button'

export default {
  components: { BaseButton },

  props: {
    tabs: {
      type: Object,
      default: () => {}
    },
    selected: [ String, Number ]
  }

}
</script>

<style lang="sass">
.tab-selector
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: -5px

  > .btn
    width: 150px
    margin: 5px
    flex-shrink: 0

</style>