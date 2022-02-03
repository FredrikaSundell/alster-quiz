import Button from '../buttons/Button'

function Start() {
  return (
    <div>
      <h1>Hej från Startsidan</h1>
      <Button className="start-btn" to="/quiz">
        Start
      </Button>
    </div>
  )
}

export default Start
