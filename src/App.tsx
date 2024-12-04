
import './App.css'
import {FC} from 'react'
import Home from './component/Home/Home';
import TestTwo from './component/TestTwo/TestTwo';
import TestThree from './component/TestThree/TestThree';

// interface AppProps {
//   title: String;
// }

type AppProps = {
  title: string;
  test_one: string;
}
const App: FC<AppProps> = ({title,test_one})=> {

  return (
    
    <>
    <p>App</p>
    <h1>Prop type test: {title}</h1>
    <h2>{test_one}</h2>
    <Home home_title='Home Testing'/>
    <TestTwo test_two="Test Two running"/>
    <TestThree test_three ="Test three running succesfully"/>
    </>
  )
}

export default App
