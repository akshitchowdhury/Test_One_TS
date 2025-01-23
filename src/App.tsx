
import './App.css'
import {FC} from 'react'
import ColorCarousel from './typeComponents/ColorCarousel'
import ApiMap from './typeComponents/ApiMap'


const App: FC = ()=> {
 
  return (
    
    <> 
      {/* <Greetings alias='Sam' age={30}/>
      <GreetingTwo num1={20} num2={30} />
      <Counter/> */}
      <ColorCarousel/>
      <ApiMap/>
    </>
  )
}

export default App
