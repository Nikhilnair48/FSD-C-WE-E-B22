import './App.css'
import Child from './Child';

function App() {
  const user = { name: "Balaji A", type: "learner", grade: "A" };
  return (
    <div>
      <h1>Parent component</h1>
      <Child user={user} />
    </div>
  )
}

export default App
