import { useDispatch } from 'react-redux'
import './App.css'
import Flashcard from './components/Flashcard'
import Summary from './components/Summary'
import { fetchFlashcards } from './reducers/flashcardReducer';

function App() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcard Study</h1>

      <div style={{ padding: "2rem" }}>
        <button onClick={() => dispatch(fetchFlashcards())}>
            Fetch New Cards
        </button>
      </div>

      <Flashcard />
      <Summary />
    </div>
  )
}

export default App
