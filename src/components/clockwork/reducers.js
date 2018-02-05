import {ADDPOINT} from "./actionTypes";
export const pointReducers = (state = {}, action) => {
    const newState = {...state};
    let value = state.points;
    console.log(JSON.stringify(action));
    switch (action.type) {
        case ADDPOINT:
            value = newState.points + action.value;
            newState.points = value;
            return newState;
        default:
            return state
    }
}