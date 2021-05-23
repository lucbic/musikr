export const accidentals = new Map([
  [ '♭', 'flat' ],
  [ '', 'natural' ],
  [ undefined, 'natural' ],
  [ '♯', 'sharp' ]
])

export const intervals = {
  1: 'Min 2nd',
  2: 'Maj 2nd',
  3: 'Min 3rd',
  4: 'Maj 3rd',
  5: 'Perf 4th',
  6: 'Aug 4th',
  7: 'Perf 5th',
  8: 'Min 6th',
  9: 'Maj 6th',
  10: 'Min 7th',
  11: 'Maj 7th',
}

export const naturalNotes = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G'
]

export const baseNotes = {
  'A': {
    flat: { note: 'A♭', number: 11 },
    natural: { note: 'A', number: 0 },
    sharp: { note: 'A♯', number: 1 }
  },
  'B': {
    flat: { note: 'B♭', number: 1 },
    natural: { note: 'B', number: 2 }
  },
  'C': {
    natural: { note: 'C', number: 3 },
    sharp: { note: 'C♯', number: 4 }
  },
  'D': {
    flat: { note: 'D♭', number: 4 },
    natural: { note: 'D', number: 5 },
    sharp: { note: 'D♯', number: 6 }
  },
  'E': {
    flat: { note: 'E♭', number: 6 },
    natural: { note: 'E', number: 7 }
  },
  'F': {
    natural: { note: 'F', number: 8 },
    sharp: { note: 'F♯', number: 9 }
  },
  'G': {
    flat: { note: 'G♭', number: 9 },
    natural: { note: 'G', number: 10 },
    sharp: { note: 'G♯', number: 11 }
  }
}

export const notes = naturalNotes.reduce((acc, cur) => [
  ...acc,
  ...Object.values(baseNotes[cur]).reduce((a, c) => [ ...a, c ], [])
], [])

export const answerNotes = {
  'A': {
    flat: 'A♭',
    natural: 'A',
    sharp: 'A♯'
  },
  'B': {
    flat: 'B♭',
    natural: 'B',
    sharp: 'C'
  },
  'C': {
    flat: 'B',
    natural: 'C',
    sharp: 'C♯'
  },
  'D': {
    flat: 'D♭',
    natural: 'D',
    sharp: 'D♯'
  },
  'E': {
    flat: 'E♭',
    natural: 'E',
    sharp: 'F'
  },
  'F': {
    flat: 'E',
    natural: 'F',
    sharp: 'F♯'
  },
  'G': {
    flat: 'G♭',
    natural: 'G',
    sharp: 'G♯'
  }
}

const baseNumberNotes = [
  {
    natural: 'A'
  },
  {
    flat: 'B♭',
    sharp: 'A♯'
  },
  {
    natural: 'B',
    flat: 'C♭'
  },
  {
    natural: 'C',
    sharp: 'B♯'
  },
  {
    flat: 'D♭',
    sharp: 'C♯'
  },
  {
    natural: 'D'
  },
  {
    flat: 'E♭',
    sharp: 'D♯'
  },
  {
    natural: 'E',
    flat: 'F♭'
  },
  {
    natural: 'E',
    flat: 'F♭'
  },
  {
    natural: 'F',
    sharp: 'E♯'
  },
  {
    natural: 'G'
  },
  {
    flat: 'A♭',
    sharp: 'G♯'
  }
]

export const numberNotes = [ ...baseNumberNotes, ...baseNumberNotes ]