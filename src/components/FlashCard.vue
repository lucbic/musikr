<template lang="pug">
div(:class="[ 'flash-card', classes ]")
  component(:is="textTag" class="note") {{ note }}
</template>

<script>
export default {
  props: {
    note: String,
    size: {
      type: String,
      default: 'small',
      validator: s => ['small', 'large'].includes(s)
    },
    status: {
      type: String,
      default: ''
    }
  },

  computed: {
    textTag () {
      return {
        'small': 'h3',
        'large': 'h1'
      }[this.size] || 'h1'
    },

    classes () {
      return {
        '-large': this.size === 'large',
        '-error': this.status === 'error',
        '-success': this.status === 'success',
      }
    }
  }
}
</script>

<style lang="sass">
.flash-card
  height: 100px
  width: 80px
  display: flex
  justify-content: center
  align-items: center
  border-radius: $base-radius
  border: $base-border
  cursor: pointer
  user-select: none
  flex-shrink: 0

  &.-large
    height: 200px
    width: 160px
  
  &.-error
    background-color: $error-color

  &.-success
    background-color: $success-color
</style>