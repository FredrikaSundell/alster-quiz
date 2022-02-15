import { useState } from 'react'
import Button from '../buttons/Button'
import useStore from '../../hooks/useStore'
// import RadioButton from '../radioButton/RadioButton'

function Quiz() {
  const questions = useStore((state) => state.questions)
  console.log(questions)
  const currentQuestion = useStore(
    (state) => state.questions[state.currentQuestionIndex]
  )
  console.log(currentQuestion, 222)

  return (
    <div>
      <h1>{currentQuestion.question}</h1>

      {/* <RadioButton /> */}

      <Button className="results-btn" to="/results">
        Resultat
      </Button>
    </div>
  )
}

export default Quiz
