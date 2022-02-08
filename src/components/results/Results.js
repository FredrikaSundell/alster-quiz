import useStore from '../../hooks/useStore'

function Results() {
  const userName = useStore((state) => state.userName)
  return (
    <div>
      <h1>GRATTIS {userName} DU FICK!</h1>
      <p>resultat</p>
      <button>Spela igen</button>
    </div>
  )
}

export default Results
