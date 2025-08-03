import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Flashcard from './components/Flashcard'
import Summary from './components/Summary'
import { fetchRequest } from './reducers/flashcardReducer';
import { useGetFlashcardsQuery } from './app/apiSlice';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.study);

  const { data: cardsData, isLoading, error: queryError } = useGetFlashcardsQuery();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcard Study</h1>

      <div style={{ padding: "2rem" }}>
        <button onClick={() => dispatch(fetchRequest())} disabled={loading}>
            {loading ? "Fetching..." : "Fetch New Cards"}
        </button>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <p>RTK Query: {isLoading ? "Loading..." : "Loaded " + (cardsData ? cardsData.length : 0) + " cards"}</p>
        {queryError &&  <p style={{ color: "red" }}>Error: {queryError}</p>}
      </div>

      <Flashcard />
      <Summary />
    </div>
  )
}

export default App
