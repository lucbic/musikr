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
    animation: error 0.3s cubic-bezier(.36,.07,.19,.97) both

  &.-success
    background-color: $success-color
    animation: success 0.3s cubic-bezier(.36,.07,.19,.97) both

  @keyframes error
    10%, 90%
      transform: translate(-1px, 0)
    20%, 80%
      transform: translate(2px, 0)
    30%, 50%, 70%
      transform: translate(-3px, 0)
    40%, 60%
      transform: translate(4px, 0)

  @keyframes success
    33%, 66%
      transform: scale(1.05)
    0%, 50%, 100%
      transform: scale(1)
</style>