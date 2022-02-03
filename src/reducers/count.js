import {INCREMET, DECREMET} from "../actions";

const initialState = {value: 0}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMET:
            return { value: state.value + 1}
        case DECREMET:
            return { value: state.value - 1}
        default:
            return state
    }
}