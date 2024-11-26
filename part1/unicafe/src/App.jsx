import { useState } from 'react'


const Statistics = (props) => {
  return (
  <div>

  <h1>Statistics</h1>

  <p>Good {props.good}</p>
  <p>Neutral {props.neutral}</p>
  <p>Bad {props.bad}</p>
  <p>All {props.good + props.neutral + props.bad}</p>
  <p>Average {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</p>
  <p>Positive {props.good/(props.good + props.neutral + props.bad)*100}%</p>

  </div>
  )
}


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

     {/*No funcionan los numeros el texto si
     Tiene pinta que no va el setStatus bien con el componente */}

    <Statistics good={good.good} neutral={neutral.neutral} bad={bad.bad}/>  

   
    </div>
  )
}

export default App