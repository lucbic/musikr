<template lang="pug">
div(class="tab-selector")
  base-button(
    class="btn"
    v-for="(val, key) in tabs"
    :key="key"
    :highlighted="selected == key"
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
  margin: 0 -10px

  > .btn
    margin: 0 10px

</style>