import React , {useState }from 'react'
import CounterHooks from './CounterHooks' 
import Counter from './counter'

export const ThemeContext = React.createContext()
function App() {
  const [theme, setTheme ] = useState('red')
  return (
    <ThemeContext.Provider value = { {backgroundColor: theme}}>
      <h1>Counter App with React</h1>
      <h2>Counter</h2>
        <Counter initialCount= {0}/>

      <h2>Counter Hooks</h2>
        <CounterHooks initialCount={0} />
        <button onClick = {() => setTheme(prevTheme => {
          return prevTheme === 'red'? 'blue' : 'red'})}>Toggler </button>
    </ThemeContext.Provider>
  )
    
}

export default App;
