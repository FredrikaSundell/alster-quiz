import { useState } from 'react'

function Form() {
  const [name, setName] = useState('')

  const handleSubmit = () => {}

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
