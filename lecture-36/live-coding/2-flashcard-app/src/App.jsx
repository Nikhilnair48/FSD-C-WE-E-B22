import './App.css'
import Flashcard from './components/Flashcard'
import Summary from './components/Summary'

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcard Study</h1>
      <Flashcard />
      <Summary />
    </div>
  )
}

export default App
