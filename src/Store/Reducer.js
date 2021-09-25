import {ActionSetContacts} from "./Action";

const initialState = {
    contacts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionSetContacts:
            return {...state, contacts: action.payload};
        default:
            return state
    }
}

export default reducer;