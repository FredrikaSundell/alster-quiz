import { Routes, Route, Navigate } from 'react-router-dom'
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
        {/* Navigate redirect on the initial render in the client * for No Match */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  )
}

export default App
