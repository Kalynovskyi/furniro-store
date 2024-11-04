export const toggleState = (state: boolean, stateCallback: (state: boolean) => void) => {
    if (state) {
        stateCallback(false);
    } else {
        stateCallback(true);
    }
}