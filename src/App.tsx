import './App.css'
import HooksDemo from './components/Hooks-Demo/HooksDemo'

function App() {

  return (
    <>
        <HooksDemo startNumber={10} minNumber={-20} maxNumber={20} stepValue={5}/>
        <HooksDemo startNumber={20} minNumber={-50} maxNumber={50} stepValue={10}/>
        <HooksDemo startNumber={0} minNumber={-100} maxNumber={100} stepValue={20}/>
    </>
  )
}

export default App
