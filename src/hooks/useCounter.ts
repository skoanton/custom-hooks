import { useReducer } from "react"
import { isNumberEven, isNumberHigherOrLower } from "../utils/checkNumber"



export const ACTION = {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE",
    RESET: "RESET",
    SET_MAX: "SET_MAX",
    SET_MIN: "SET_MIN",
    STEP_INCREASE: "STEP_INCREASE",
    STEP_DECREASE: "STEP_DECREASE"
}

type Action = {
    type: string
    payload?: number
}

export type InitalNumber = {
    defaultValue: number
    number: number;
    maxNumber: number;
    minNumber: number;
    isEven: boolean,
    stepNumber: number,
}

const countReducer = (state: InitalNumber, action: Action): InitalNumber => {
    switch (action.type) {
        case ACTION.INCREASE:

            const newNumberIncrease = state.number + 1;
            const isHigher = isNumberHigherOrLower(newNumberIncrease, state.maxNumber, true);

            if (isHigher) {
                return { ...state, number: state.maxNumber, isEven: isNumberEven(state.maxNumber) }
            }
            else {
                return { ...state, number: newNumberIncrease, isEven: isNumberEven(newNumberIncrease) };
            }
        case ACTION.DECREASE:
            const newNumberDecrease = state.number - 1;
            const isLower = isNumberHigherOrLower(newNumberDecrease, state.minNumber, false);
            if (isLower) {
                return { ...state, number: state.minNumber, isEven: isNumberEven(state.minNumber) };
            }

            else {
                return { ...state, number: newNumberDecrease, isEven: isNumberEven(newNumberDecrease) };
            }
        case ACTION.RESET:
            return { ...state, number: state.defaultValue, isEven: isNumberEven(state.defaultValue) }
        case ACTION.SET_MAX:
            return { ...state, number: state.maxNumber, isEven: isNumberEven(state.maxNumber) };
        case ACTION.SET_MIN:
            return { ...state, number: state.minNumber, isEven: isNumberEven(state.minNumber) };
        case ACTION.STEP_INCREASE: {
            const newStepNumber = state.number + state.stepNumber;

            const isHigher = isNumberHigherOrLower(newStepNumber, state.maxNumber, true);

            if (isHigher) {
                return { ...state, number: state.maxNumber, isEven: isNumberEven(state.maxNumber) }
            }
            else {
                return { ...state, number: newStepNumber, isEven: isNumberEven(newStepNumber) }
            }

        }


        case ACTION.STEP_DECREASE: {
            const newStepNumber = state.number - state.stepNumber;
            const isLower = isNumberHigherOrLower(newStepNumber, state.minNumber, false);
            if (isLower) {
                return { ...state, number: state.minNumber, isEven: isNumberEven(state.minNumber) }
            }
            else {
                return { ...state, number: newStepNumber, isEven: isNumberEven(newStepNumber) }
            }
        }
        default:
            return state
    }
}



export const useCounter = (initalNumber: InitalNumber) => {
    const [state, dispatch] = useReducer(countReducer, initalNumber);

    return { state, dispatch };

}

