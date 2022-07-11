const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
 {
  quiz: ['value', 'estimate', 'evaluate'],
  options: ['jury', 'assess'],
  correct: 2
 },
 {
  quiz: ['juice', 'drink', 'orange'],
  options: ['unbreakable', 'sweet'],
  correct: 2
 },

  {
  quiz: ['close', 'near', 'next'],
  options: ['trace', 'adjacent'],
  correct: 2
 },

 {
  quiz: ['computer', 'mouse', 'keyboard'],
  options: ['exhaust', 'software'],
  correct: 2
 },

  {
  quiz: ['volunteer', 'donations', 'aid'],
  options: ['cloud', 'contribution'],
  correct: 2
 },


]

let score = 0
scoreDisplay.textContent = score
