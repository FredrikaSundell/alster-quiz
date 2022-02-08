import { useNavigate } from 'react-router-dom'
// Globalstore
import useStore from '../../hooks/useStore'

function Form() {
  //Tar emot en funktion som argument
  const setUserName = useStore((state) => state.setUserName)
  const userName = useStore((state) => state.userName)

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/quiz', { replace: true })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Rubrik"
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form
