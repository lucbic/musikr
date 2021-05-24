<template lang="pug">
div(class="intervals-container")
  interval-tabs(
    class="tabs"
    :tabs="tabs"
    :selected="selectedInterval"
    @change="selectedInterval = +$event"
  )

  div(class="content")
    flash-card(
      :note="questionNote.note"
      size="large"
      @click="onMainCardClick"
    )

  div(class="selector-wrapper")
    flash-card(
      v-for="(card) in answerCards"
      :key="card.note"
      :note="card.note"
      :status="card.status"
      @click="onAnswerClick(card)"
    )
</template>

<script>
import FlashCard from '../components/FlashCard'
import IntervalTabs from '../components/Tabs'

import { getRandomItem } from '../modules/random'
import { notes, naturalNotes, accidentals, answerNotes, baseNotes, intervals, numberNotes } from '../content/notes'

export default {
  components: {
    FlashCard,
    IntervalTabs
  },

  data: () => ({
    questionNote: getRandomItem(notes),
    initialQuestionNote: {},
    tabs: intervals,
    selectedInterval: 1,
    notes,
    answerCards: [],
    shuffling: false
  }),

  methods: {
    onMainCardClick () {
      this.shuffle()
    },

    shuffle () {
      this.shuffling = true
      this.initialQuestionNote = this.questionNote
      let shuffles = 0
      let newNote = {}

      while (shuffles <= 100) {
        setTimeout(() => {
          this.questionNote = getRandomItem(this.notes)
        }, Math.random() * shuffles * 10)

        shuffles++
      }

      this.setAnswerCards()
      this.shuffling = false
    },

    setAnswerCards () {
      this.answerCards = this.notes.map(note => ({ ...note, status: '' }))
    },

    onAnswerClick (card) {
      if (this.shuffling) return

      const success = this.checkAnswer(card)

      card.status = success ? 'success' : 'error'

      if (success)
        setTimeout(() => { this.shuffle() }, 1000)
    },

    checkAnswer ({ note, number }) {
      const answer = numberNotes[this.questionNote.number + this.selectedInterval]
      const selected = numberNotes[number]     
 
      return answer === selected
    }
  },

  mounted () {
    this.setAnswerCards()
  }
}
</script>

<style lang="sass">
.intervals-container
  height: 800px
  width: 1000px
  padding: $base-padding
  display: flex
  flex-direction: column
  align-items: center
  border-radius: $base-radius
  border: $base-border

  > .tabs
    align-self: flex-start

  > .content
    display: flex
    flex-direction: column
    justify-content: center
    flex: 1
  
  > .selector-wrapper
    max-width: 100%
    margin: -5px
    // margin-top: 40px
    margin-bottom: 20px
    display: flex
    justify-content: center
    flex-wrap: wrap

    > *
      margin: 5px
</style>