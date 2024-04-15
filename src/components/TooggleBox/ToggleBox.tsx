import { useToggle } from "../../hooks/useToggle"

type ToggleBoxProps = {}

const ToggleBox = ({}:ToggleBoxProps) => {

    const {on, toggleOn,toggleOff, toggle} = useToggle();
    return (
        <>
            <h1>current toggle: {on.toString()} </h1>
            <button onClick={toggleOff}>Set false</button>
            <button onClick={toggleOn}>Set true</button>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}

export default ToggleBox
