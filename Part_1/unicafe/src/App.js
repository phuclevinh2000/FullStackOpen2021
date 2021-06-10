import React, {useState } from "react";

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}:</td> 
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  )
}

const Statistics = ({good,neutral,bad, total,average,positive}) => {
  if(total === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </tbody>
      </table>
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  const average = 100*(good-bad)/total
  const positive = 100*good/total

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={"Good"} onClick={() => setGood(good+1)}/>
      <Button value={"Neutral"} onClick={() => setNeutral(neutral+1)} />
      <Button value={"Bad"} onClick={() => setBad(bad+1)} />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App