import { useState } from 'react'
import './App.css'
import Child from './Child';

function App() {
  const [message, setMessage] = useState("");

  // handles the onClick event from Child component
  // the Child component passes the message to the App
  // to receive the message, we define the parameter
  const handleChildData = (message) => {
    setMessage(message);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <Child onSend={handleChildData} />
    </div>
  )
}

export default App
