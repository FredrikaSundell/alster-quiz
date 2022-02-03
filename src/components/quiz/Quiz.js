import Button from '../buttons/Button'

function Quiz() {
  return (
    <div>
      <h1>Hallå från Quiz</h1>
      <Button className="results-btn" to="/results">
        Results
      </Button>
    </div>
  )
}

export default Quiz
