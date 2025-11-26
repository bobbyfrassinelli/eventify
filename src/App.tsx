import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setInput(event.target.value)
  }

  const handleCreateClick = () => {
    console.log('Create event clicked with:', input)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">eventify</h1>
      </header>

      <div className="field">
        <label className="field-label" htmlFor="event-text">
          Describe your event
        </label>

        <textarea
          id="event-text"
          className="field-textarea"
          value={input}
          onChange={handleChange}
          placeholder="Whatchu want"
        />
      </div>

      <div className="actions">
        <button type="button" className="primary-button" onClick={handleCreateClick}>
          Create event
        </button>
      </div>
    </div>
  )
}

export default App
