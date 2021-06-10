import React, { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({onClick,value}) => {
  return (
    <button onClick={onClick}>
      {value} 
    </button>
  )
}

const Anecdote = ({anecdote,votes}) => {
  return (
    <div>
      {anecdote} <br />
      has {votes} vote(s)
    </div>
  )
}

//The most votes part
const MostVoted = ({hasVote, anecdote, votes}) => {
  if(hasVote === false) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <Anecdote anecdote={anecdote} votes={votes} />
      </div>
    )
  }
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))
  const [hasVote, setHasVote] =useState(false)

  //get random number for the anecdote
  const randomNum = () => {
    return Math.floor(Math.random() * 7);
  }

  //increase the vote by 1 by create a new array
  const increaseVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
    setHasVote(true)
  }
  
  //return the highest vote value
  const  maxVote = () => {
    const highest = Math.max(...votes)
    return highest
  }

  //return the index of the highest vote value
  const maxVoteValue = () => {
    const highestValue = maxVote()
    for(let i=0; i<votes.length; i++)
    {
      if(highestValue === votes[i]) 
       {
        return i
       }
    }
    
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button value={"Vote"} onClick={() => increaseVote()} />
      <Button value={"Next anecdote"} onClick={() => setSelected(randomNum())} />
      <Header text="Anecdote with most votes" />
      <MostVoted  hasVote={hasVote} 
                  anecdote={anecdotes[maxVoteValue()]} 
                  votes={maxVote()}/>
    </div>
  )
}

export default App