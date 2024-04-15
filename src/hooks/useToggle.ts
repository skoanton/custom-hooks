import { useState } from "react"

export const useToggle = () => {


    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(!on);
    }

    const toggleOff = () => {
        setOn(false);
    }

    const toggleOn = () => {
        setOn(true);
    }
    return { on, toggle, toggleOff, toggleOn };

}