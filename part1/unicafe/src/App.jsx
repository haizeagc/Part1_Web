import { useState } from 'react'

/*
const Statistics = (props) => {
  return (
  <div>

  <h1>Statistics</h1>

  <p>Good</p>
  <p>Neutral</p>
  <p>Bad</p>
  <p>All</p>
  <p>Average </p>
  <p>Positive </p>

  </div>
  )
}
*/

const App = () => {

  // guarda los clics de cada botón en su propio estado
  // Los estados estan formados por contador y updateContador siempre
  // Cuantos menos estados haya mejor
  // LO QUE HAY QUE EDITAR LUEGO PARA REALIZAR EL EJERCICIO
  //USANDO ESTADOS Y FUNCIONES DE ESTADO

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
  return (
    <div>

    <h1>Give feedback</h1>

    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>

    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good - bad)/(good + neutral + bad)}</p>
    <p>positive {good/(good + neutral + bad)*100}%</p>
   
    </div>
  )
}

/*

    <Statistics good={good.good} neutral={neutral.neutral} bad={bad.bad}/>  

*/

export default App