import React, { useState } from 'react'
import Note from './components/Book'

const Header = (props) => {
  return (
    <h1>{props.head}</h1>
  )
}

const App = (props) => {
  const [ persons, setPersons] = useState([
    { 
      id: 1,
      name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <Header head={"Phonebook"}/>
      <label>name: </label>
      <form onSubmit={addName}>
        <input
          value={newName}
          onChange={handleNoteChange}
        />
        <button type="submit">add</button>
      </form>
      <Header head={"Numbers"}/>
      {persons.map(person => 
          <Note key={person.id} person={person} />
      )}
    </div>
  )
}

export default App
