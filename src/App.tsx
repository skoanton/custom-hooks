import './App.css'
import CatInfoBox from './components/CatInfoBox/CatInfoBox'
import HooksDemo from './components/Counter/Counter'
import ToggleBox from './components/TooggleBox/ToggleBox'

function App() {

  return (
    <>

      <h1>Counter</h1>
        <HooksDemo startNumber={10} minNumber={-20} maxNumber={20} stepValue={5}/>
        <HooksDemo startNumber={20} minNumber={-50} maxNumber={50} stepValue={10}/>
        <HooksDemo startNumber={0} minNumber={-100} maxNumber={100} stepValue={20}/> 
      <h1>FetchAPI</h1>
       <CatInfoBox/>
      <h1>Toggle</h1>
        <ToggleBox/>
    </>
  )
}

export default App
