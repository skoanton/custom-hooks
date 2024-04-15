import { ACTION, InitalNumber, useCounter } from "../../hooks/useCounter"
import { isNumberEven } from "../../utils/checkNumber"

type HooksDemoProps = {
    startNumber: number,
    maxNumber : number,
    minNumber: number
    stepValue: number,

}

const HooksDemo = ({startNumber, maxNumber,minNumber,stepValue}:HooksDemoProps) => {


    const initalNumber: InitalNumber = {
        defaultValue: startNumber,
        number: startNumber,
        maxNumber: maxNumber,
        minNumber: minNumber,
        isEven: isNumberEven(startNumber),
        stepNumber: stepValue
    }

    const {state,dispatch}  = useCounter(initalNumber);


    return (
        <>
            <h2>{state.number}</h2>
            <button onClick={ () => dispatch({type:ACTION.SET_MIN})}>Set Min</button>
            <button onClick={ () => dispatch({type:ACTION.STEP_DECREASE})}>- {state.stepNumber}</button>
            <button onClick={ () => dispatch({type:ACTION.DECREASE})}>-</button>
            <button onClick={ () => dispatch({type:ACTION.INCREASE})}>+</button>
            <button onClick={ () => dispatch({type:ACTION.STEP_INCREASE})}>+ {state.stepNumber}</button>
            <button onClick={ () => dispatch({type:ACTION.SET_MAX})}>Set max</button>
            <button onClick={ () => dispatch({type:ACTION.RESET, payload: initalNumber.number})}>Reset</button>
            
            {state.isEven ? <p>Number is even</p> : <p>Numer is not Even</p>}
        </>
    )
}

export default HooksDemo
