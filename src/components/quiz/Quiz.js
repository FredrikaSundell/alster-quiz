import Button from '../buttons/Button'
import useStore from '../../hooks/useStore'
import RadioButton from '../radioButton/RadioButton'

function Quiz() {
  const currentQuestion = useStore((state) =>
    state.questions.find((q) => q.id === state.currentQuestionId)
  )
  const setAnswer = useStore((state) => state.setAnswer)

  const setPreviousQuestion = useStore((state) => state.setPreviousQuestion)
  const setNextQuestion = useStore((state) => state.setNextQuestion)

  //om sista frågans id är samma som nuvarande frågans id, är det sista frågan
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
      <button onClick={setPreviousQuestion}>Föregående fråga</button>
      {/* inte sista frågan, visa "nästa-fråga-knapp", annars "resultat-knapp" */}
      {!isLastQuestion ? (
        <button onClick={setNextQuestion}>Nästa fråga</button>
      ) : (
        <Button className="results-btn" to="/results">
          Resultat
        </Button>
      )}
    </div>
  )
}

export default Quiz
