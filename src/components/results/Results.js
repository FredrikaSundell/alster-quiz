import useStore from '../../hooks/useStore'

function Results() {
  const userName = useStore((state) => state.userName)
  const questions = useStore((state) => state.questions)

  //acc 0, lägger till current  om det är samma som correctAnswer
  const result = questions.reduce((acc, current) => {
    const correctAnswer = current.options.find((opt) => opt.isCorrect).value
    if (current.answer === correctAnswer) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)

  return (
    <div>
      <h1>GRATTIS {userName} DU FICK!</h1>
      <p>
        {result} av {questions.length}
      </p>
      <button>Spela igen</button>
    </div>
  )
}

export default Results
