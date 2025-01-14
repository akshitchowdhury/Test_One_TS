
import './App.css'
import {FC} from 'react'
import Greetings from './typeComponents/Greetings'
import GreetingTwo from './typeComponents/GreetingTwo'
import Counter from './typeComponents/Counter'


const App: FC = ()=> {

  return (
    
    <> 
      <Greetings alias='Sam' age={30}/>
      <GreetingTwo num1={20} num2={30} />
      <Counter/>
    </>
  )
}

export default App
