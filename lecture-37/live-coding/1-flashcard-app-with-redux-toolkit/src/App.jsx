import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Flashcard from './components/Flashcard'
import Summary from './components/Summary'
import { fetchFlashcards } from './reducers/flashcardReducer';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.study);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcard Study</h1>

      <div style={{ padding: "2rem" }}>
        <button onClick={() => dispatch(fetchFlashcards())} disabled={loading}>
            {loading ? "Fetching..." : "Fetch New Cards"}
        </button>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>

      <Flashcard />
      <Summary />
    </div>
  )
}

export default App
