import Button from '../buttons/Button'
import useStore from '../../hooks/useStore'
import RadioButton from '../radioButton/RadioButton'

function Quiz() {
  const currentQuestion = useStore((state) =>
    state.questions.find((q) => q.id === state.currentQuestionId)
  )
  const setAnswer = useStore((state) => state.setAnswer)
  const setNextQuestion = useStore((state) => state.setNextQuestion)

  const isLastQuestion = useStore(
    (state) =>
      state.questions[state.questions.length - 1].id === currentQuestion.id
  )

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <div>
        {currentQuestion.options.map((option) => {
          return (
            <RadioButton
              key={option.value}
              label={option.value}
              name={currentQuestion.question}
              value={option.value}
              onChange={() => setAnswer(option.value)}
              checked={currentQuestion.answer === option.value}
            />
          )
        })}
      </div>

      {!isLastQuestion && (
        <button onClick={setNextQuestion}>Nästa fråga</button>
      )}

      <Button className="results-btn" to="/results">
        Resultat
      </Button>
    </div>
  )
}

export default Quiz
