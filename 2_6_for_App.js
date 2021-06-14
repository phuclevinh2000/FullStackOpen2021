import React, { useState } from 'react'
import Note from './components/Book'

const Header = (props) => {
  return (
    <h1>{props.head}</h1>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    ''
  )

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <Header head={"Phonebook"}/>
      <label>name: </label>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">add</button>
      </form>
      <Header head={"Numbers"}/>
      {notes.map(note => 
          <Note key={note.id} note={note} />
      )}
    </div>
  )
}

export default App
