import { useState } from 'react'

const Boton = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  console.log({props})

  if (props.good + props.neutral + props.bad === 0) {
    return <p>No hay notas</p>
  } else {
    return (
      <div>
        <h1>Statistics</h1>

        <p>Good {props.good}</p>
        <p>Neutral {props.neutral}</p>
        <p>Bad {props.bad}</p>
        <p>All {props.good + props.neutral + props.bad}</p>
        <p>Average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
        <p>Positive {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
      </div>
    )
  }
}

const App = () => {

  // guarda los clics de cada botón en su propio estado
  // Los estados estan formados por contador y updateContador siempre
  // Cuantos menos estados haya mejor
  //USANDO ESTADOS Y FUNCIONES DE ESTADO

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Boton text="good" handleClick={() => setGood(good + 1)} />
      <Boton text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Boton text="bad" handleClick={() => setBad(bad + 1)} />

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        setGood={setGood} 
        setNeutral={setNeutral} 
        setBad={setBad} 
      />
    </div>
  )
}

export default App