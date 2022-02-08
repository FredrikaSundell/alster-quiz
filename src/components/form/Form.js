import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [name, setName] = useState('')

  const navigate = useNavigate()
  const handleSubmit = useCallback(
    () => navigate('/quiz', { replace: true }),
    [navigate]
  )

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Rubrik"
        />
        <input type="submit" />
      </form>
      <p>{name}</p>
    </>
  )
}

export default Form
