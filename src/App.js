import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Start from './components/start/Start'
import Quiz from './components/quiz/Quiz'
import Results from './components/results/Results'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  )
}

export default App
