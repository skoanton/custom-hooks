export const isNumberHigherOrLower = (numberToCheck: number, number: number, HigherThen: boolean): boolean => {


    switch (HigherThen) {
        case true:
            if (numberToCheck > number)
                return true;
            else
                return false;

        case false:
            if (numberToCheck < number)
                return true
            else
                return false;
        default:
            return false;

    }
}


export const isNumberEven = (number: number): boolean => {

    if (number % 2 === 0)
        return true;
    else
        return false;

}